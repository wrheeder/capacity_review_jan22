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
    <img src="styles/legend/USR_Jan_12000_20k_2_4.png" /> Very High<br />'
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


var format_2YearPlanSiteLevel_Arvin20220125Sheet1_1 = new ol.format.GeoJSON();
var features_2YearPlanSiteLevel_Arvin20220125Sheet1_1 = format_2YearPlanSiteLevel_Arvin20220125Sheet1_1.readFeatures(json_2YearPlanSiteLevel_Arvin20220125Sheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2YearPlanSiteLevel_Arvin20220125Sheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2YearPlanSiteLevel_Arvin20220125Sheet1_1.addFeatures(features_2YearPlanSiteLevel_Arvin20220125Sheet1_1);
var lyr_2YearPlanSiteLevel_Arvin20220125Sheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2YearPlanSiteLevel_Arvin20220125Sheet1_1, 
                style: style_2YearPlanSiteLevel_Arvin20220125Sheet1_1,
                interactive: false,
    title: '2-Year Transition Plan<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_0.png" /> 202202<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_1.png" /> 202203<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_2.png" /> 202204<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_3.png" /> 202205<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_4.png" /> 202206<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_5.png" /> 202207<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_6.png" /> 202208<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_7.png" /> 202209<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_8.png" /> 202210<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_9.png" /> 202211<br />\
    <img src="styles/legend/2YearPlanSiteLevel_Arvin20220125Sheet1_1_10.png" /> 2023<br />'
        });
var format_TransitionPolygons_2 = new ol.format.GeoJSON();
var features_TransitionPolygons_2 = format_TransitionPolygons_2.readFeatures(json_TransitionPolygons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransitionPolygons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransitionPolygons_2.addFeatures(features_TransitionPolygons_2);
var lyr_TransitionPolygons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransitionPolygons_2, 
                style: style_TransitionPolygons_2,
                interactive: true,
    title: 'Transition Polygons<br />\
    <img src="styles/legend/TransitionPolygons_2_0.png" /> 202202<br />\
    <img src="styles/legend/TransitionPolygons_2_1.png" /> 202203<br />\
    <img src="styles/legend/TransitionPolygons_2_2.png" /> 202204<br />\
    <img src="styles/legend/TransitionPolygons_2_3.png" /> 202205<br />\
    <img src="styles/legend/TransitionPolygons_2_4.png" /> 202206<br />\
    <img src="styles/legend/TransitionPolygons_2_5.png" /> 202207<br />\
    <img src="styles/legend/TransitionPolygons_2_6.png" /> 202208<br />\
    <img src="styles/legend/TransitionPolygons_2_7.png" /> 202209<br />\
    <img src="styles/legend/TransitionPolygons_2_8.png" /> 202210<br />\
    <img src="styles/legend/TransitionPolygons_2_9.png" /> 202211<br />\
    <img src="styles/legend/TransitionPolygons_2_10.png" /> <br />'
        });

lyr_2YearPlanSiteLevel_Arvin20220125Sheet1_1.setVisible(true);lyr_TransitionPolygons_2.setVisible(true);
var format_RNCBound_V13_0 = new ol.format.GeoJSON();
var features_RNCBound_V13_0 = format_RNCBound_V13_0.readFeatures(json_RNCBound_V13_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RNCBound_V13_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RNCBound_V13_0.addFeatures(features_RNCBound_V13_0);
var lyr_RNCBound_V13_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RNCBound_V13_0, 
                style: style_RNCBound_V13_0,
                interactive: false,
    title: 'RNCBound_V13<br />\
    <img src="styles/legend/RNCBound_V13_0_0.png" /> 202202<br />\
    <img src="styles/legend/RNCBound_V13_0_1.png" /> 202203<br />\
    <img src="styles/legend/RNCBound_V13_0_2.png" /> 202204<br />\
    <img src="styles/legend/RNCBound_V13_0_3.png" /> 202205<br />\
    <img src="styles/legend/RNCBound_V13_0_4.png" /> 202206<br />\
    <img src="styles/legend/RNCBound_V13_0_5.png" /> 202207<br />\
    <img src="styles/legend/RNCBound_V13_0_6.png" /> 202208<br />\
    <img src="styles/legend/RNCBound_V13_0_7.png" /> 202209<br />\
    <img src="styles/legend/RNCBound_V13_0_8.png" /> 202210<br />\
    <img src="styles/legend/RNCBound_V13_0_9.png" /> 202211<br />\
    <img src="styles/legend/RNCBound_V13_0_10.png" /> done<br />'
        });

lyr_RNCBound_V13_0.setVisible(true);
lyr_ESRITOPO_0.setVisible(true);lyr_UMTS_HM_1.setVisible(false);lyr_USR_Jan_12000_20k_2.setVisible(false);lyr_LTE_HM_3.setVisible(true);lyr_PRB_Jan_4500_20k_4.setVisible(true);
var layersList = [lyr_ESRITOPO_0,lyr_UMTS_HM_1,lyr_USR_Jan_12000_20k_2,lyr_LTE_HM_3,lyr_PRB_Jan_4500_20k_4,lyr_2YearPlanSiteLevel_Arvin20220125Sheet1_1,lyr_RNCBound_V13_0];
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
lyr_2YearPlanSiteLevel_Arvin20220125Sheet1_1.set('fieldAliases', {'Property ID': 'Property ID', 'Site Name': 'Site Name', 'Contract Site ID': 'Contract Site ID', 'MLOG Confirmation': 'MLOG Confirmation', 'CGI Confirmation': 'CGI Confirmation', 'Legal Lease DB': 'Legal Lease DB', 'Property Validation DB': 'Property Validation DB', 'Controller ID': 'Controller ID', 'New Transition Monthly Plan - 3 year': 'New Transition Monthly Plan - 3 year', 'New Transition Monthly Plan - 2 year': 'New Transition Monthly Plan - 2 year', 'mnt': 'mnt', 'mnt1': 'mnt1', 'Field15': 'Field15', 'Field16': 'Field16', 'Field17': 'Field17', });
lyr_TransitionPolygons_2.set('fieldAliases', {'Property ID': 'Property ID', 'Site Name': 'Site Name', 'Contract Site ID': 'Contract Site ID', 'MLOG Confirmation': 'MLOG Confirmation', 'CGI Confirmation': 'CGI Confirmation', 'Legal Lease DB': 'Legal Lease DB', 'Property Validation DB': 'Property Validation DB', 'Controller ID': 'Controller ID', 'New Transition Monthly Plan - 3 year': 'New Transition Monthly Plan - 3 year', 'New Transition Monthly Plan - 2 year': 'New Transition Monthly Plan - 2 year', 'mnt': 'mnt', 'mnt1': 'mnt1', 'Field15': 'Field15', 'Field16': 'Field16', 'Field17': 'Field17', });
lyr_2YearPlanSiteLevel_Arvin20220125Sheet1_1.set('fieldImages', {'Property ID': 'TextEdit', 'Site Name': 'TextEdit', 'Contract Site ID': 'TextEdit', 'MLOG Confirmation': 'TextEdit', 'CGI Confirmation': 'TextEdit', 'Legal Lease DB': 'TextEdit', 'Property Validation DB': 'TextEdit', 'Controller ID': 'TextEdit', 'New Transition Monthly Plan - 3 year': 'TextEdit', 'New Transition Monthly Plan - 2 year': 'TextEdit', 'mnt': 'Range', 'mnt1': 'TextEdit', 'Field15': 'Range', 'Field16': 'Range', 'Field17': 'TextEdit', });
lyr_TransitionPolygons_2.set('fieldImages', {'Property ID': 'TextEdit', 'Site Name': 'TextEdit', 'Contract Site ID': 'TextEdit', 'MLOG Confirmation': 'TextEdit', 'CGI Confirmation': 'TextEdit', 'Legal Lease DB': 'TextEdit', 'Property Validation DB': 'TextEdit', 'Controller ID': 'TextEdit', 'New Transition Monthly Plan - 3 year': 'TextEdit', 'New Transition Monthly Plan - 2 year': 'TextEdit', 'mnt': 'TextEdit', 'mnt1': 'TextEdit', 'Field15': 'Range', 'Field16': 'Range', 'Field17': 'TextEdit', });
lyr_2YearPlanSiteLevel_Arvin20220125Sheet1_1.set('fieldLabels', {'Property ID': 'no label', 'Site Name': 'no label', 'Contract Site ID': 'no label', 'MLOG Confirmation': 'no label', 'CGI Confirmation': 'no label', 'Legal Lease DB': 'no label', 'Property Validation DB': 'no label', 'Controller ID': 'no label', 'New Transition Monthly Plan - 3 year': 'no label', 'New Transition Monthly Plan - 2 year': 'no label', 'mnt': 'no label', 'mnt1': 'no label', 'Field15': 'no label', 'Field16': 'no label', 'Field17': 'no label', });
lyr_TransitionPolygons_2.set('fieldLabels', {'Property ID': 'no label', 'Site Name': 'no label', 'Contract Site ID': 'no label', 'MLOG Confirmation': 'no label', 'CGI Confirmation': 'no label', 'Legal Lease DB': 'no label', 'Property Validation DB': 'no label', 'Controller ID': 'no label', 'New Transition Monthly Plan - 3 year': 'no label', 'New Transition Monthly Plan - 2 year': 'no label', 'mnt': 'no label', 'mnt1': 'no label', 'Field15': 'no label', 'Field16': 'no label', 'Field17': 'no label', });
lyr_TransitionPolygons_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_RNCBound_V13_0.set('fieldAliases', {'id': 'id', 'rncname': 'rncname', 'rncid': 'rncid', 'rank': 'rank', 'area': 'area', 'mnt': 'mnt', });
lyr_RNCBound_V13_0.set('fieldImages', {'id': 'Range', 'rncname': 'TextEdit', 'rncid': 'Range', 'rank': 'Range', 'area': 'TextEdit', 'mnt': 'TextEdit', });
lyr_RNCBound_V13_0.set('fieldLabels', {'id': 'no label', 'rncname': 'no label', 'rncid': 'no label', 'rank': 'no label', 'area': 'no label', 'mnt': 'no label', });
lyr_RNCBound_V13_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});