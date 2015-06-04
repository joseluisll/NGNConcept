/**
 * Created by Jose Luis on 04/06/2015.
 */

var http = require('http'),
    url = require('url');

http.createServer(function(request, response) {
    target = request.url;

    if(target[0] == "/") // remove the leading forward slash
        target = target.substring(1, target.length);

    console.log("Request received. Target: " + target);

    // parse the url
    url_parts = url.parse(target);
    if(url_parts.host == undefined) { // stop processing, URL must contain http(s)://
        response.write("ERROR: missing host in target URL " + target);
        response.end();
    }
    else {

        var proxy = http.createClient(80, url_parts.host)
        delete request.headers.origin;
        delete request.headers['access-control-request-method'];
        delete request.headers['access-control-request-headers'];
        delete request.headers.referer;
        delete request.headers.accept;

        request.method='GET';

        var proxy_request = proxy.request(request.method, url_parts.href, request.headers);

        console.log("Creating proxy request to server: " + url_parts.hostname + ", path: " + url_parts.pathname);
        proxy_request.addListener('response', function (proxy_response) {
            proxy_response.addListener('data', function(chunk) {
                response.write(chunk, 'binary');
            });
            proxy_response.addListener('end', function() {
                response.end();
            });
            //proxy_response.headers['access-control-allow-headers']='x-powered-by';
            delete proxy_response.headers['access-control-allow-origin'];
            console.log(proxy_response.headers);
            response.writeHead(proxy_response.statusCode, proxy_response.headers);
        });
        request.addListener('data', function(chunk) {
            proxy_request.write(chunk, 'binary');
        });
        request.addListener('end', function() {
            proxy_request.end();
        });
    }
}).listen(800);
console.log("Proxy started. Listening to port 800");