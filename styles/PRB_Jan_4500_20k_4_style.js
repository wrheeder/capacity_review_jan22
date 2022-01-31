var size = 0;
var placement = 'point';

var style_PRB_Jan_4500_20k_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ELEV");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 961.000000 && value <= 961.000000) {
            style = [ new ol.style.Style({zIndex:1,
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.757)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0.757)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 961.000000 && value <= 1922.000000) {
            style = [ new ol.style.Style({zIndex:2,
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.757)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,191,191,0.757)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1922.000000 && value <= 2883.000000) {
            style = [ new ol.style.Style({zIndex:3,
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.757)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,128,128,0.757)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2883.000000 && value <= 5766.000000) {
            style = [ new ol.style.Style({zIndex:4,
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.757)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,64,64,0.757)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5766.000000 && value <= 14415.000000) {
            style = [ new ol.style.Style({zIndex:5,
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.757)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.757)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
