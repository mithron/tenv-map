requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: ['//code.jquery.com/jquery-2.2.3.min', 'jquery.min'],
        leaflet: ['//unpkg.com/leaflet@1.0.1/dist/leaflet', 'leaflet/leaflet'],
        leafletMarkerSpiderfier: ['leaflet/leaflet.markerSpiderfier'],
        leafletGroupedLayers: ['leaflet/leaflet.styledLayerControl'],
        leafletSearch: ['leaflet/leaflet.search-src'],
        leafletCredits: ['leaflet/leaflet-control-credits-src']
    },
    shim: {
        leaflet: {
            exports: 'L'
        },
        leafletMarkerSpiderfier: {
        deps: ['leaflet'],
            exports: 'OverlappingMarkerSpiderfier'
        },
        leafletGroupedLayers: {
            deps: ['leaflet'],
            exports: 'L.Control.styledLayerControl'
        },
        leafletSearch: {
            deps: ['leaflet'],
            exports: 'L.control.search'
        },
        leafletCredits: {
            deps: ['leaflet'],
            exports: 'L.controlCredits'
        }
    }
});
