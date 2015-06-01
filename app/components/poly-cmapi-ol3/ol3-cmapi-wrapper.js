/** 
 * This module serves as a template for CMAPI abstraction layers. 
 * It can be reused to bundle any map with a JS API. 
 */

/**
  *  This module HAS CODE THAT INVOKES FUNCTIONS FROM A OL3 MAP LIBRARY.
 *
 *  HERE THE FUNCTIONS ARE MAPPED TO THE CMAPI-OL3 POLYMER WEBCOMPONENT, SO THAT THE MAP SUBSCRIBES TO THE APPROPIATE CHANNELS, AND PROVIDED THE REQUIRED RESPONSES
 */

var ol3_cmapi_wrapper = {
    UUID: {
        //THIS UUID IS THE SENDER ID IN THE CMAJS BROWSER RUNTIME, AS WELL AS THE UUID OF THE POLYMER WRAPPER!.
        type: String,
        value: ''
    },

    // ======================================================================== 
    // Put module level private helper functions here. 
    // ======================================================================== 
    // Note: these functions must be prefaced with 'cmapi.' when calling from 
    // from one scope level down. 
  
    /**  
     * Generate an rfc4122 version 4 compliant guid. 
     * From http://byronsalau.com/blog/how-to-create-a-guid-uuid-in-javascript/ 
     * 
     */
    createGuid: function () { //
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function(c) { 
            var r = Math.random()*16|0, 
                v = c === 'x' ? r : (r&0x3|0x8); 
            return v.toString(16); 
        }); 
    }, 
  
    overlays: {}, 

  
    // ======================================================================== 
      
    // map.overlay channels: create and manipulate overlays 
    overlay: { 
  
        // Channel names for map.overlay 
        channels: { 
            create: 'map.overlay.create', 
            remove: 'map.overlay.remove', 
            hide:   'map.overlay.hide', 
            show:   'map.overlay.show', 
            update: 'map.overlay.update'
        }, 
          
        /** 
         * Create an overlay into which data can be aggregated. 
         * 
         * channel = "map.overlay.create" 
         * payload = {name: (optional), overlayId: (optional), parentId: (optional)} 
         */
        create: function (channel, payload) { 
            var name, id, parentId; 
            var newOverlay; 
  
            console.log('map.overlay.create triggered'); 
  
            // get id from payload or create new one 
            if (payload.hasOwnProperty('overlayId')) { 
                id = payload.overlayId; 
                // if overlay already exists, exit 
                if (ol3_cmapi_wrapper.overlays.hasOwnProperty(id)) {
                    console.log('overlay with id ' + id + 'already exists'); 
                    return; 
                } 
            } else { 
                id = ol3_cmapi_wrapper.createGuid();
            } 
  
            // get name or use id as name 
            if (payload.hasOwnProperty('name')) { 
                name = payload.name; 
            } else { 
                name = id;
            } 
  
            // check for parentId.
            if (payload.hasOwnProperty('parentId')) { 
                parentId = payload.parentId; 
                // create parent if it does not exist 
                if (!ol3_cmapi_wrapper.overlays.hasOwnProperty(parentId)) {
                    ol3_cmapi_wrapper.overlay.create("map.overlay.create", {
                        overlayId: parentId 
                    }); 
                } 
            } else { 
                // no parent 
                parentId = undefined; 
            } 
  
            // now create the overlay and add to map 
            newOverlay = L.featureGroup(); 
            newOverlay.addTo(ol3_map);
            ol3_map.getPanes()[id] = ""; //TODO: shoudl remove features before doing this

            // add to overlay data store 
            ol3_cmapi_wrapper.overlays[id] = {
                obj: newOverlay, 
                name: name, 
                parent: parentId, 
                children: {}
            } 
  
            console.log('Created new overlay with id ' + id); 
            console.log(ol3_cmapi_wrapper.overlays[id]);
        }, 
          
        /** 
         * Remove an entire overlay from the map. 
         * If no overlay with overlayId exists, delete default overlay. 
         * If no default overlay exists, no operation is performed. 
         * 
         * channel = "map.overlay.remove" 
         * payload = {overlayId} 
         */
        remove: function (channel, payload) { 
            var id, overlay, overlayObj; 
  
            console.log('map.overlay.remove triggered'); 
  
            // Case 1: no overlayId passed 
            if (!payload.hasOwnProperty('overlayId')) { 
                // TODO: no default overlays for now 
                console.log('no default overlays for now'); 
                return; 
            } 
  
            id = payload.overlayId; 
  
            // Case 2: overlay with passed id doesn't exist 
            if (!ol3_cmapi_wrapper.overlays.hasOwnProperty(id)) {
                console.log('no overlay with id ' + id + ' exists'); 
                return; 
            } 
  
            // Case 3: overlay exists; time to remove it 
            overlay = ol3_cmapi_wrapper.overlays[id];
            overlayObj = overlay.obj; 
  
            // delete from map; also deletes all child overlays 
            ol3_map.removeLayer(overlayObj);
  
            // delete all children in storage 
            for (var key in ol3_cmapi_wrapper.feature.features) {
                var feature = ol3_cmapi_wrapper.feature.features[key].overlayId;
                if (feature === id) {
                    delete ol3_cmapi_wrapper.feature.features[key]
                }
                console.log('child overlay with id ' + id + ' removed'); 
            } 
            // and then delete the overlay in storage 
            delete ol3_cmapi_wrapper.overlays[id];
  
            console.log('overlay with id ' + id + ' removed'); 
        }, 
          
        /** 
         * Hide an existing overlay on the map. 
         * 
         * channel = "map.overlay.hide" 
         * payload = {overlayId} 
         * 
         * Leaflet best/easiest solution for leaflet: https://github.com/Leaflet/Leaflet/issues/4
         *      http://jsfiddle.net/b7LgG/3/
         */ 
        hide: function (channel, payload) { 
            console.log('map.overlay.hide triggered');
            if (!payload.hasOwnProperty("overlayId")) {
                console.log("Payload did not have overlayId to hide");
                return;
            }

            if (!ol3_cmapi_wrapper.overlays.hasOwnProperty(payload.overlayId)) {
                console.log("Overlay doesn't exist to hide: " + payload.overlayId);
                return;
            }

            // Hide map pane (features with current overlayId)
            $(ol3_map.getPane(payload.overlayId)).hide();

            console.log("Overlay: " + payload.overlayId + " was hidden.");

        }, 
          
        /** 
         * Show an existing overlay on the map. This does nothing if the 
         * overlay is already showing. 
         * 
         * channel = "map.overlay.show" 
         * payload = {overlayId} 
         *
         * Leaflet best/easiest solution for leaflet: https://github.com/Leaflet/Leaflet/issues/4
         *      http://jsfiddle.net/b7LgG/3/
         */ 
        show: function (channel, payload) { 
            console.log('map.overlay.show triggered'); 
            if (!payload.hasOwnProperty("overlayId")) {
                console.log("Payload did not have overlayId to hide");
                return;
            }

            if (!ol3_cmapi_wrapper.overlays.hasOwnProperty(payload.overlayId)) {
                console.log("Overlay doesn't exist to hide: " + payload.overlayId);
                return;
            }

            // Show map pane (features with current overlayId)
            $(ol3_map.getPane(payload.overlayId)).show();
            console.log("Overlay: " + payload.overlayId + " was shown.");
        }, 
  
        /** 
         * Update an existing overlay. 
         * 
         * channel = "map.overlay.update" 
         * payload = {name (optional), 
         *            overlayId (optional), 
         *            parentId (optional)} 
         */ 
        update: function (channel, payload) { 
            console.log('map.overlay.update triggered'); 

            //TODO: Add default widget ID implementation
            if (!payload.hasOwnProperty("overlayId")) {
                console.log("Map update error: overlay ID does not exist in payload");
                return;
            } else { // Update attributes
                //TODO: feature.features needs to be updated too
                var overlay = ol3_cmapi_wrapper.overlays[payload.overlayId];

                if (payload.hasOwnProperty("name")) {
                    overlay.name = payload.name;
                }

                if (payload.hasOwnProperty("parentId")) {
                    overlay.parent = payload.parentId;
                    // create parent if it does not exist 
                    if (!ol3_cmapi_wrapper.overlays.hasOwnProperty(payload.parentId)) {
                        ol3_cmapi_wrapper.overlay.create("map.overlay.create", {
                            overlayId: payload.parentId 
                        }); 
                    } 
                }
            }
            console.log("Overlay was successfully update");
            console.log("Value: " + overlay);
        } 
    }, 
  
    // map.feature channels: load feature data onto map 
    feature: { 

        features: {},//TODO: STUDY THE WAY OF ORGNISING THIS OR DELEGATING TO THE MAPPING LIBRARY. ALL FEATURES WOULD BE STORED HERE. EACH FEATURE WILL BE ASOCIATED WITH AN OVERLAY, BUT ALL ARE MIXED HERE. THIS WILL CONTAIN CMAPI STRUCTURES, AND ILL BE REPEATED IN THE MAP ITSELF????
  
        // Channel names for map.feature 
        channels: {
            plotFeature:       'map.feature.plot',
            plotURL:           'map.feature.plot.url',
            plotBatch:           'map.feature.plot.batch',//TODO:ADD FUNCTION INTO THE FEATURE STRUCTURE. THE BATCH AND THE UPDATE ARE NEW IN 1.3, AND THE PRESENT CODE IS FROM 1.2, SO ARE MISSING.I ADDED THEM TO THE LIST HERE, BUT NEED TO IMPLEMENT THE CODE AS REAL FUNCTIONS.
            unplotFeature:     'map.feature.unplot',
            unplotFeatureBatch:     'map.feature.unplot.batch',//TODO:ADD FUNCTION INTO THE FEATURE STRUCTURE. THE BATCH AND THE UPDATE ARE NEW IN 1.3, AND THE PRESENT CODE IS FROM 1.2, SO ARE MISSING.I ADDED THEM TO THE LIST HERE, BUT NEED TO IMPLEMENT THE CODE AS REAL FUNCTIONS.

            hideFeature:       'map.feature.hide', 
            showFeature:       'map.feature.show', 
            featureSelected:   'map.feature.selected',
            featureSelectedBatch:   'map.feature.selected.batch',//TODO:ADD FUNCTION INTO THE FEATURE STRUCTURE. THE BATCH AND THE UPDATE ARE NEW IN 1.3, AND THE PRESENT CODE IS FROM 1.2, SO ARE MISSING.I ADDED THEM TO THE LIST HERE, BUT NEED TO IMPLEMENT THE CODE AS REAL FUNCTIONS.

            featureDeselected: 'map.feature.deselect',
            featureDeselectedBatch: 'map.feature.deselected.batch',//TODO:ADD FUNCTION INTO THE FEATURE STRUCTURE. THE BATCH AND THE UPDATE ARE NEW IN 1.3, AND THE PRESENT CODE IS FROM 1.2, SO ARE MISSING.I ADDED THEM TO THE LIST HERE, BUT NEED TO IMPLEMENT THE CODE AS REAL FUNCTIONS.

            featureUpdate:    'map.feature.update'//TODO:ADD ALL FUNCTION INTO THE FEATURE STRUCTURE. THE BATCH AND THE UPDATE ARE NEW IN 1.3, AND THE PRESENT CODE IS FROM 1.2, SO ARE MISSING.I ADDED THEM TO THE LIST HERE, BUT NEED TO IMPLEMENT THE CODE AS REAL FUNCTIONS.
        },
  
        /** 
         * Plot feature data on the map. 
         * 
         * channel = "map.feature.plot" 
         * payload = {overlayId: (optional), featureId: (required), name: (optional), 
         *       format: (optional), feature: (required), zoom: (optional), 
         *       readOnly: (optional)}
         */ 
        plotFeature: function (channel, payload) { 
            console.log('map.feature.plot triggered'); 
            var overlayId;

            // if (_.isEmpty(payload.featureId) || _.isEmpty(payload.feature)) {
            //     console.log("FeatureID & Feature attributes are required");
            // }

            // Create overlay id
            if (_.isEmpty(payload.overlayId) ||
                _.isEmpty(ol3_cmapi_wrapper.overlays[payload.overlayId])) {
                overlayId = ol3_cmapi_wrapper.createGuid();
                ol3_cmapi_wrapper.overlay.create('channel', {overlayId: overlayId});
            } else { // Overlay exists.
                overlayId = payload.overlayId;
            }

            if (payload.format === "geojson") {
                var obj = new L.geoJson(payload.feature, {pane: overlayId});
                ol3_map.addLayer(obj);
                ol3_cmapi_wrapper.feature.features[payload.featureId] =
                    {marker: obj,
                        overlayId: overlayId};
                // TODO: Should check if it exists, if it does remove -> add new one
                //cmapi.overlay.overlays[overlayId].children[featureId] = obj;
            }   

        }, 
          
        /** 
         * Plot feature data on the map obtained from a URL. 
         * 
         * channel = "map.feature.plot.url" 
         * payload = {overlayId, featureId, featureName, format, url, zoom} 
         */ 
        plotURL: function (channel, payload) { 
            console.log('map.feature.plot.url triggered'); 
        }, 
          
        /** 
         * Remove feature data from the map. 
         * 
         * channel = "map.feature.unplot" 
         * payload = {overlayId, featureId} 
         */ 
        unplotFeature: function (channel, payload) { 
            console.log('map.feature.unplot triggered'); 
            //TODO: Add error checking.
            ol3_map.removeLay(ol3_cmapi_wrapper.feature.features[payload.featureId].marker);
            delete ol3_cmapi_wrapper.feature.features[payload.featureId];
            console.log('Feature removed'); 
        }, 
          
        /** 
         * Hide an existing feature on the map. 
         * This does nothing if the feauture is already hidden. 
         * 
         * channel = "map.feature.hide" 
         * payload = {overlayId, featureId} 
         */ 
        hideFeature: function (channel, payload) { 
            console.log('map.feature.hide triggered'); 
            //TOD: Add error checking
            ol3_cmapi_wrapper.feature.features[payload.featureId].marker.setOpacity(0);
            // marker.setOpacity(1 or 0);
        }, 
          
        /** 
         * Show previously hidden feature data on the map. 
         * This does nothing if the feature data is already showing. 
         * 
         * channel = "map.feature.show" 
         * payload = {overlayId, featureId, zoom} 
         */ 
        showFeature: function (channel, payload) { 
            console.log('map.feature.show triggered'); 
            //TOD: Add error checking
            ol3_cmapi_wrapper.feature.features[payload.featureId].marker.setOpacity(1);
            // marker.setOpacity(1 or 0);
        }, 
          
        /** 
         * Trigger selection of a feature on the map. 
         * Subsequent calls to "map.status.selected" will include this feature 
         * until it is deselected. The message is ignored if this feature is  
         * already selected. 
         * 
         * channel = "map.feature.selected" 
         * payload = {selectedId, selectedName, featureId, overlayId} 
         */ 
        featureSelected: function (channel, payload) { 
            console.log('map.feature.selected triggered'); 
        }, 
  
        /** 
         * Deselect a feature on the map. 
         * The message is ignored if the feature is not selected. 
         * 
         * channel = "map.feature.deselected" 
         * payload = {deSelectedId, deSelectedName, featureId, overlayId} 
         */ 
        featureDeselected: function (channel, payload) { 
            console.log('map.feature.deselected triggered'); 
        },
        featureUpdate: function (channel,payload) {
            console.debug('map.feature.update triggered');
        }
    }, 
      

    view: {
        
        // Channel names
        channels: {
            zoom:             'map.view.zoom',
            centerOnOverlay:  'map.view.center.overlay',
            centerOnFeature:  'map.view.center.feature',
            centerOnLocation: 'map.view.center.location',
            centerOnBounds:   'map.view.center.bounds',
            mapClicked:       'map.view.clicked'
        },

        /**
         * Zoom the map to a particular range.
         *
         * channel = "map.view.zoom"
         * payload = {range}
         */
        zoom: function (channel, payload) {
            console.log('map.view.zoom triggered');
            ol3_map.setZoom(payload.range);
        },
        
        /**
         * Center the map on a particular overlay.
         *
         * channel = "map.view.center.overlay"
         * payload = {overlayId, zoom}
         */
        centerOnOverlay: function (channel, payload) {
            console.log('map.view.center.overlay triggered');
            if (typeof payload.overlayId === 'string'){
                //Take the overlay ID and use it to find the overlay bounds
                var bounds = ol3_cmapi_wrapper.overlays[payload.overlay].obj.getBounds();
            } else {
                //Find the default overlay and use its center
                var bounds = ol3_cmapi_wrapper.overlays['default'].obj.getBounds();
            }
            if (typeof payload.zoom === 'number'){
                var havezoom = true;
                var range = payload.zoom;
            }
            if (payload.zoom == "Auto"){
                var havezoom = false;
            }

            ol3_map.fitBounds(bounds);

            if (havezoom){
                ol3_map.setZoom(range);
            }
        },
        
        /**
         * Center the map on a particular feature, or on a given range.
         *
         * channel = "map.view.center.feature"
         * payload = {overlayId, featureId, zoom}
         */
        centerOnFeature: function (channel, payload) {
            console.log('map.view.center.feature triggered');
            if (typeof payload.overlayId === 'string'){
                //Take the overlay ID and use it to find the overlay bounds
                var bounds = ol3_cmapi_wrapper.overlays[payload.overlay].obj.getBounds();
            } else {
                //Find the default overlay and use its center
                var bounds = ol3_cmapi_wrapper.overlays['default'].obj.getBounds();
           }
            if (typeof payload.zoom === 'number'){
                var havezoom = true;
                var range = payload.zoom;
            }
            if (payload.zoom == "Auto"){
                var havezoom = false;
                //find the "best" default zoom for overlay
                var range = 0;
            }
            //find the middle of the feature
            middle=[30,50]
            ol3_map.fitBounds(bounds);
            ol3_map.panTo(middle)
            if (havezoom){
                ol3_map.setZoom(range);
            };
            
        },
        
        /**
         * Center the map on a particular location,
         * either as close as possible or to a given range.
         *
         * channel  = "map.view.center.location"
         * payload  = {location, zoom}
         * location = {lat, lon}
         */
        centerOnLocation: function (channel, payload) {
            console.log('map.view.center.location triggered');
            if (typeof payload.zoom === 'number'){
                var havezoom = true;
                var range = payload.zoom;
            }
            if (payload.zoom == "Auto"){
                var havezoom = false;
                //find the "best" default zoom for overlay
                var range = 8;
            }
            ol3_map.setView([payload.location.lat,payload.location.lon],range);
        },
        
        /**
         * Center the map on a particular bounding box,
         * either as close as possible to the bounds or to a given range.
         *
         * channel = "map.view.center.bounds"
         * payload = {bounds, zoom}
         * bounds  = {southWest: {lat, lon}, northEast: {lat, lon}}
         */
        centerOnBounds: function (channel, payload) {
            console.log('map.view.center.bounds triggered');
            sw= new L.latLng(payload.southWest.lat, payload.southWest.lon)
            ne= new L.latLng(payload.northEast.lat, payload.northEast.lon)
            ol3_map.fitBounds(L.latLngBounds(sw,ne));
        },
        
        /**
         * This is the channel the map uses to report where user clicks.
         * This function should actually listen for map events and publish them
         * to the global pub/sub object.
         *
         * channel = "map.view.clicked"
         * payload = {lat, lon}
         */
        mapClicked: function () {
            console.log('map.view.clicked triggered');
            eventstuff = { 
                latlng: L.latLng(payload.lat, payload.lon),
                //We have to figure out how to do this
                layerPoint: L.point(0,0),
                conteinerPoint: L.point(0,0)
            };
            ol3_map.fireEvent('click', eventstuff);
        }

    },

      
    // Obtain current map status from the map. 
    // Requests are sent by clients on the request channel. 
    // The remaining three channels are published to by the map to respond. 
    status: {

        // Channel names for map.status
        channels: {
            request:                      'map.status.request',
            respondWithMapViewStatus:     'map.status.view',
            respondWithMapFormatStatus:   'map.status.format',
            respondWithMapAboutStatus:    'map.status.about',
            respondWithMapSelectedStatus: 'map.status.selected',
            respondWithInitializationStatus: 'map.status.initialization'
        },
        
        /**
         * Request the status of the map from the map.
         * The result gets sent out on the associated channel.
         *
         * channel = "map.status.request"
         * payload = {types}
         *
         * types: list of strings identifying which status messages are being
         *        requested. Allowable types are "view", "format", and "about".
         *        If omitted, all status messages will be published.
         */
        request: function (channel, payload) {
            console.log('map.status.request triggered');
            //THE MAP MUST SUBSCRIBE TO THIS MESSAGE!!!

            if(payload===undefined) {
                console.error('payload cannot be NULL.');
                return;
            }

            //TODO: Add exepction handling for parsing the MSG. In theory it is not needed, as the cmajs publish function validates before publishing
            var req=JSON.parse(payload);
            var res; //the message for a response.
            var res_payload;//the payload to be embedded into the message.
            var res_channel;//the channel to send the message with the payload.

            if(req.types===undefined) {
                //WE NEED TO PROVIDE ALL RESPONSES.
                console.debug('payload.types is undefined, providing a full status report:map.status.view, map.status.format, map.status.about, map.status.selected, map.status.initialization');
                req.types=['view','about','selected','format','initialization'];
                //NEXT PARAGRAPHS WILL EXECUTE ALL FUNCTIONS.
            }

            for (type in payload.types) {
                switch(type) {
                    case 'view':
                        console.debug('Publishing a map.status.view response');
                        res_payload=this.respondWithMapViewStatus();
                        //GOT THE PAYLOAD
                        //NOW WRAPPIT, AND PUBLISH
                        //TODO:EXTRACT A TEMPLATE MESSAGE FOR MAP.STATUS.VIEW, ADD THE CORRECT SENDERID, ADD THE PAYLOAD AND PUBLISH IT.
                        break;
                    case 'about':
                        console.debug('Publishing a map.status.about response');
                        res_payload=this.respondWithMapAboutStatus();
                        //GOT THE PAYLOAD
                        //NOW WRAPPIT, AND PUBLISH
                        //TODO:EXTRACT A TEMPLATE MESSAGE FOR MAP.STATUS.ABOUT, ADD THE CORRECT SENDERID, ADD THE PAYLOAD AND PUBLISH IT.
                        break;

                    case 'selected':
                        console.debug('Publishing a map.status.selected response');
                        res_payload=this.respondWithMapSelectedStatus();
                        //GOT THE PAYLOAD
                        //NOW WRAPPIT, AND PUBLISH
                        //TODO:EXTRACT A TEMPLATE MESSAGE FOR MAP.STATUS.SELECTED.VIEW, ADD THE CORRECT SENDERID, ADD THE PAYLOAD AND PUBLISH IT.
                        break;

                    case 'initialization' :
                        console.debug('Publishing a map.status.initialization response');
                        res_payload=this.respondWithMapInitializationStatus();
                        //GOT THE PAYLOAD
                        //NOW WRAPPIT, AND PUBLISH
                        //TODO:EXTRACT A TEMPLATE MESSAGE FOR MAP.STATUS.INITIALIZATION., ADD THE CORRECT SENDERID, ADD THE PAYLOAD AND PUBLISH IT.
                        break;

                    case 'format':
                        console.debug('Publishing a map.status.format response');
                        res_payload=this.respondWithMapFormatStatus();
                        //GOT THE PAYLOAD
                        //NOW WRAPPIT, AND PUBLISH
                        //TODO:EXTRACT A TEMPLATE MESSAGE FOR MAP.STATUS.FORMAT, ADD THE CORRECT SENDERID, ADD THE PAYLOAD AND PUBLISH IT.
                        break;
                    //default: NOT NEEDED. VALIDATION DONE ON THE FIRST PLACE.
                }
            }
        },
        
        /**
         * Publish a "view" status response to the global pub/sub object.
         * 
         *
         * channel = "map.status.view"
         * payload = {requester (optional), bounds, center, range}
         * bounds  = {southWest: {lat, lon}, northEast: {lat, lon}}
         * center  = {lat, lon}
         */
        respondWithMapViewStatus: function () {

            /* TODO: ADAPT THE CODE TO GET THE VIEW STATUS TO OL3. THE OBJECT OL3_MAP DOES NOT EXIST IN THIS CONTEXT, IT WOULD BE THE INTERNAL VARIABLE OF THE POLYMER WRAPPER FOR THE OL3
            *  getPixelOrigin returns top left corner
            *  SW = (topLeft.y + mapSize, x)
            *  NE = (y, topLeft.x + mapSize)
            */
            return ({/* requester: (optional), */
                    "bounds": {"southWest": {"lat": ol3_map.getPixelOrigin().y+ol3_map.getSize().y, "lon": ol3_map.getPixelOrigin().x},
                               "northEast": {"lat": ol3_map.getPixelOrigin().y, "lon": ol3_map.getPixelOrigin().x+ol3_map.getSize().x}},
                    "center": {"lat": ol3_map.getCenter().lat, "lon": ol3_map.getCenter().lng},
                    "range": ol3_map.getZoom() });
        },
        
        /**
         * Publish a "format" status response to the global pub/sub object.
         *
         * channel = "map.status.format"
         * payload = {formats}
         * 
         * example payload: {formats: ["kml", "geojson", "wms"]}
         */
        respondWithMapFormatStatus: function () {
            /* TODO: ADAPT THE CODE TO GET THE FORMAT STATUS TO OL3. THE OBJECT OL3_MAP DOES NOT EXIST IN THIS CONTEXT, IT WOULD BE THE INTERNAL VARIABLE OF THE POLYMER WRAPPER FOR THE OL3
            */

            return ({"formats": ["geojson", "wms"]});
        },
        
        /**
         * Publish a "about" status response to the global pub/sub object.
         *
         * channel = "map.status.about"
         * payload = {version, type, widgetName}
         * 
         * version: The version numbers of the Common Map Widget API this map
         *          widget supports.
         *
         * type: The type of map in the map widget.
         *       Allowable values are “2-D,” “3-D,” or “other.”
         */
        respondWithMapAboutStatus: function () {
            /* TODO: ADAPT THE CODE TO GET THE ABOUT STATUS TO OL3 OR USE A WRAPPER SPECIFIC INFORMATION!!!. THE OBJECT OL3_MAP DOES NOT EXIST IN THIS CONTEXT, IT WOULD BE THE INTERNAL VARIABLE OF THE POLYMER WRAPPER FOR THE OL3
            */

             return ({"version": "1.0.0", "type": "2D" /*, "widgetName":  map name */});
        },

        /**
         * Publish a "selected" status response to the global pub/sub object.
         * "selected" status is a list of currently selected features.
         * 
         * channel = "map.status.selected"
         * payload = {overlayId, selectedFeatures}
         * selectedFeatures = [{featureId, selectedId, selectedName}]
         */
        respondWithMapSelectedStatus: function () {
            /* TODO: ADAPT THE CODE TO GET THE SELECTED STATUS TO OL3 OR USE A WRAPPER SPECIFIC INFORMATION!!!. THE OBJECT OL3_MAP DOES NOT EXIST IN THIS CONTEXT, IT WOULD BE THE INTERNAL VARIABLE OF THE POLYMER WRAPPER FOR THE OL3
             */
            console.log('map.status.selected triggered');
        },

        /**
         * Publish a "initialization" status response to the global pub/sub object.
         * "initialization" status is To receive notification of map events including the readiness, initialization and teardown of the map.
         *
         * channel = "map.status.initialization"
         * payload = {status: string ["init", "ready", "teardown", "mapswapinprogress"] (required)}
         */
        respondWithMapInitializationStatus: function () {
            /* TODO: ADAPT THE CODE TO GET THE INITIALIZATION STATUS TO OL3 OR USE A WRAPPER SPECIFIC INFORMATION!!!. THE OBJECT OL3_MAP DOES NOT EXIST IN THIS CONTEXT, IT WOULD BE THE INTERNAL VARIABLE OF THE POLYMER WRAPPER FOR THE OL3
             */
            console.log('map.status.initialization triggered');
        }
        
    },
      
    logging: { 
          
        // Channels for logging 
        channels: { 
            mapError: 'map.error' 
        },

        enabled: false,
          
        /** 
         * Start publishing errors from the map on the global pub/sub object 
         * Also start logging errors in a globally accessible place. 
         * 
         * channel = "map.error" 
         * payload = {sender, type, msg, error} 
         * 
         * sender: sender of message that caused error 
         * type: type of message that caused error 
         * msg: the message that caused the error 
         * error: a description of the error 
         */
        enableErrorLogging: function () {
            this.enabled=true;
        }, 
  
        /** 
         * Stop publishing errors from the map and logging them. 
         * 
         * NO CHANNEL. 
         */
        disableErrorLogging: function () {
            this.enabled=false;
        } ,


        publishError: function() {
            if(this.enabled) {
                //TODO: ADD CODE FOR PUBLISHING AN ERROR MESSAGE FROM THE MAP HERE.

            }
        }
          
    } 
      
}; 

var geotest = {overlayId: "overlay",
    featureId: "test",
    format: "geojson",
    feature: { "type": "FeatureCollection",
    "features": [
    { "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
      "properties": {"prop0": "value0"}
      },
    { "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
          ]
        },
      "properties": {
        "prop0": "value0",
        "prop1": 0.0
        }
      },
    { "type": "Feature",
       "geometry": {
         "type": "Polygon",
         "coordinates": [
           [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
             [100.0, 1.0], [100.0, 0.0] ]
           ]
       },
       "properties": {
         "prop0": "value0",
         "prop1": {"this": "that"}
         }
       }
     ]
   } 
};

//cmapi.feature.plotFeature('channel', geotest);
//map.setView({lat:102.0, lng:0.5});
