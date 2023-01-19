ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([59.711192, 7.697125, 101.633512, 39.536405]);
var wms_layers = [];

var format_IndianStates_0 = new ol.format.GeoJSON();
var features_IndianStates_0 = format_IndianStates_0.readFeatures(json_IndianStates_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndianStates_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndianStates_0.addFeatures(features_IndianStates_0);
var lyr_IndianStates_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndianStates_0, 
                style: style_IndianStates_0,
                interactive: true,
                title: '<img src="styles/legend/IndianStates_0.png" /> Indian States'
            });
var format_presentStates_1 = new ol.format.GeoJSON();
var features_presentStates_1 = format_presentStates_1.readFeatures(json_presentStates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_presentStates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_presentStates_1.addFeatures(features_presentStates_1);
var lyr_presentStates_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_presentStates_1, 
                style: style_presentStates_1,
                interactive: true,
                title: '<img src="styles/legend/presentStates_1.png" /> presentStates'
            });
var format_finalProjectCount_190123_2 = new ol.format.GeoJSON();
var features_finalProjectCount_190123_2 = format_finalProjectCount_190123_2.readFeatures(json_finalProjectCount_190123_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_finalProjectCount_190123_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_finalProjectCount_190123_2.addFeatures(features_finalProjectCount_190123_2);
var lyr_finalProjectCount_190123_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_finalProjectCount_190123_2, 
                style: style_finalProjectCount_190123_2,
                interactive: true,
                title: '<img src="styles/legend/finalProjectCount_190123_2.png" /> finalProjectCount_190123'
            });

lyr_IndianStates_0.setVisible(true);lyr_presentStates_1.setVisible(true);lyr_finalProjectCount_190123_2.setVisible(true);
var layersList = [lyr_IndianStates_0,lyr_presentStates_1,lyr_finalProjectCount_190123_2];
lyr_IndianStates_0.set('fieldAliases', {'STNAME': 'STNAME', 'STCODE11': 'STCODE11', 'STNAME_SH': 'STNAME_SH', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'State_LGD': 'State_LGD', 'Shape_Le_1': 'Shape_Le_1', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_presentStates_1.set('fieldAliases', {'STNAME': 'STNAME', 'STCODE11': 'STCODE11', 'STNAME_SH': 'STNAME_SH', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'State_LGD': 'State_LGD', 'Shape_Le_1': 'Shape_Le_1', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_finalProjectCount_190123_2.set('fieldAliases', {'STNAME': 'STNAME', 'STCODE11': 'STCODE11', 'STNAME_SH': 'STNAME_SH', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'State_LGD': 'State_LGD', 'Shape_Le_1': 'Shape_Le_1', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', 'NUMPOINTS': 'NUMPOINTS', });
lyr_IndianStates_0.set('fieldImages', {'STNAME': 'TextEdit', 'STCODE11': 'TextEdit', 'STNAME_SH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_presentStates_1.set('fieldImages', {'STNAME': 'TextEdit', 'STCODE11': 'TextEdit', 'STNAME_SH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_finalProjectCount_190123_2.set('fieldImages', {'STNAME': 'TextEdit', 'STCODE11': 'TextEdit', 'STNAME_SH': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'State_LGD': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_IndianStates_0.set('fieldLabels', {'STNAME': 'no label', 'STCODE11': 'no label', 'STNAME_SH': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'State_LGD': 'no label', 'Shape_Le_1': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_presentStates_1.set('fieldLabels', {'STNAME': 'no label', 'STCODE11': 'no label', 'STNAME_SH': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'State_LGD': 'no label', 'Shape_Le_1': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_finalProjectCount_190123_2.set('fieldLabels', {'STNAME': 'no label', 'STCODE11': 'no label', 'STNAME_SH': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'State_LGD': 'no label', 'Shape_Le_1': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', 'NUMPOINTS': 'no label', });
lyr_finalProjectCount_190123_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});