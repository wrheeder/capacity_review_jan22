var wms_layers = [];


        var lyr_ESRITOPO_0 = new ol.layer.Tile({
            'title': 'ESRI TOPO',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UMTS_HM_1 = new ol.format.GeoJSON();
var features_UMTS_HM_1 = format_UMTS_HM_1.readFeatures(json_UMTS_HM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMTS_HM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMTS_HM_1.addFeatures(features_UMTS_HM_1);
var lyr_UMTS_HM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UMTS_HM_1, 
                style: style_UMTS_HM_1,
                interactive: false,
    title: 'UMTS Users<br />\
    <img src="styles/legend/UMTS_HM_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/UMTS_HM_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/UMTS_HM_1_2.png" /> 10 - 20<br />\
    <img src="styles/legend/UMTS_HM_1_3.png" /> 20 - 30<br />\
    <img src="styles/legend/UMTS_HM_1_4.png" /> 30 - 100<br />'
        });
var format_USR_Jan_12000_20k_2 = new ol.format.GeoJSON();
var features_USR_Jan_12000_20k_2 = format_USR_Jan_12000_20k_2.readFeatures(json_USR_Jan_12000_20k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USR_Jan_12000_20k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USR_Jan_12000_20k_2.addFeatures(features_USR_Jan_12000_20k_2);
var lyr_USR_Jan_12000_20k_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USR_Jan_12000_20k_2, 
                style: style_USR_Jan_12000_20k_2,
                interactive: false,
    title: 'UMTS User Heatmap<br />\
    <img src="styles/legend/USR_Jan_12000_20k_2_0.png" /> Very Low<br />\
    <img src="styles/legend/USR_Jan_12000_20k_2_1.png" /> Low<br />\
    <img src="styles/legend/USR_Jan_12000_20k_2_2.png" /> Medium<br />\
    <img src="styles/legend/USR_Jan_12000_20k_2_3.png" /> High<br />\
    <img src="styles/legend/USR_Jan_12000_20k_2_4.png" /> Vwry High<br />'
        });
var format_LTE_HM_3 = new ol.format.GeoJSON();
var features_LTE_HM_3 = format_LTE_HM_3.readFeatures(json_LTE_HM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LTE_HM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTE_HM_3.addFeatures(features_LTE_HM_3);
var lyr_LTE_HM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LTE_HM_3, 
                style: style_LTE_HM_3,
                interactive: false,
    title: 'LTE PRB Utilization<br />\
    <img src="styles/legend/LTE_HM_3_0.png" /> 0 - 10<br />\
    <img src="styles/legend/LTE_HM_3_1.png" /> 10 - 29<br />\
    <img src="styles/legend/LTE_HM_3_2.png" /> 29 - 49<br />\
    <img src="styles/legend/LTE_HM_3_3.png" /> 49 - 69<br />\
    <img src="styles/legend/LTE_HM_3_4.png" /> 69 - 100<br />'
        });
var format_PRB_Jan_4500_20k_4 = new ol.format.GeoJSON();
var features_PRB_Jan_4500_20k_4 = format_PRB_Jan_4500_20k_4.readFeatures(json_PRB_Jan_4500_20k_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRB_Jan_4500_20k_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRB_Jan_4500_20k_4.addFeatures(features_PRB_Jan_4500_20k_4);
var lyr_PRB_Jan_4500_20k_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PRB_Jan_4500_20k_4, 
                style: style_PRB_Jan_4500_20k_4,
                interactive: false,
    title: 'LTE PRB Heatmap<br />\
    <img src="styles/legend/PRB_Jan_4500_20k_4_0.png" /> Very Low<br />\
    <img src="styles/legend/PRB_Jan_4500_20k_4_1.png" /> Low<br />\
    <img src="styles/legend/PRB_Jan_4500_20k_4_2.png" /> Medium<br />\
    <img src="styles/legend/PRB_Jan_4500_20k_4_3.png" /> High<br />\
    <img src="styles/legend/PRB_Jan_4500_20k_4_4.png" /> Very High<br />'
        });

lyr_ESRITOPO_0.setVisible(true);lyr_UMTS_HM_1.setVisible(false);lyr_USR_Jan_12000_20k_2.setVisible(false);lyr_LTE_HM_3.setVisible(true);lyr_PRB_Jan_4500_20k_4.setVisible(true);
var layersList = [lyr_ESRITOPO_0,lyr_UMTS_HM_1,lyr_USR_Jan_12000_20k_2,lyr_LTE_HM_3,lyr_PRB_Jan_4500_20k_4];
lyr_UMTS_HM_1.set('fieldAliases', {'field_1': 'field_1', 'H': 'H', 'CELL_NAME': 'CELL_NAME', 'AVG_USER': 'AVG_USER', 'VOL_MB': 'VOL_MB', 'pid': 'pid', 'SITE_CODE': 'SITE_CODE', 'area_name': 'area_name', 'x': 'x', 'y': 'y', });
lyr_USR_Jan_12000_20k_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LTE_HM_3.set('fieldAliases', {'field_1': 'field_1', 'H': 'H', 'E_CELL_NAM': 'E_CELL_NAM', 'DL_RESOURC': 'DL_RESOURC', 'DL_TRAFFIC': 'DL_TRAFFIC', 'pid': 'pid', 'SITE_CODE': 'SITE_CODE', 'area_name': 'area_name', 'x': 'x', 'y': 'y', });
lyr_PRB_Jan_4500_20k_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_UMTS_HM_1.set('fieldImages', {'field_1': 'TextEdit', 'H': 'TextEdit', 'CELL_NAME': 'TextEdit', 'AVG_USER': 'TextEdit', 'VOL_MB': 'TextEdit', 'pid': 'TextEdit', 'SITE_CODE': 'TextEdit', 'area_name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_USR_Jan_12000_20k_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_LTE_HM_3.set('fieldImages', {'field_1': '', 'H': 'TextEdit', 'E_CELL_NAM': 'TextEdit', 'DL_RESOURC': 'TextEdit', 'DL_TRAFFIC': 'TextEdit', 'pid': 'TextEdit', 'SITE_CODE': 'TextEdit', 'area_name': 'TextEdit', 'x': '', 'y': '', });
lyr_PRB_Jan_4500_20k_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_UMTS_HM_1.set('fieldLabels', {'field_1': 'no label', 'H': 'header label', 'CELL_NAME': 'no label', 'AVG_USER': 'no label', 'VOL_MB': 'no label', 'pid': 'no label', 'SITE_CODE': 'no label', 'area_name': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_USR_Jan_12000_20k_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_LTE_HM_3.set('fieldLabels', {'field_1': 'no label', 'H': 'no label', 'E_CELL_NAM': 'no label', 'DL_RESOURC': 'no label', 'DL_TRAFFIC': 'no label', 'pid': 'no label', 'SITE_CODE': 'no label', 'area_name': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_PRB_Jan_4500_20k_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_PRB_Jan_4500_20k_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});