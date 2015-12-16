/**
 * Created by Jose Luis on 03/06/2015.
 */
function openMapApp(args) {
    var ref=window.open("http://localhost:63342/NGNConcept/apps/NGNMap-app/index.html","","location=no,menubar=no,toolbar=no",true);
    var cmapiinspector=document.querySelector("#cmapi-inspector");
    setTimeout(function(){
        window.cmajs=ref.cmajs;
        window.cmapi=ref.cmapi;
        cmapiinspector._subscribeToCMAPIChannels();
        console.debug("CALLED.");
    }, 60000);
    return ref;
};

