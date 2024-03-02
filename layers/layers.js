var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Светлая тема',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'Темная тема',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_NDVI_2 = new ol.format.GeoJSON();
var features_NDVI_2 = format_NDVI_2.readFeatures(json_NDVI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_2.addFeatures(features_NDVI_2);
var lyr_NDVI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI_2, 
                style: style_NDVI_2,
                interactive: false,
                title: '<img src="styles/legend/NDVI_2.png" /> Озеленение (NDVI)'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> Озера'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Водные поверхности'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: false,
                title: '<img src="styles/legend/_5.png" /> Городская черта'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr_NDVI_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr_NDVI_2,lyr__3,lyr__4,lyr__5];
lyr_NDVI_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr__3.set('fieldAliases', {'Вид': 'Вид', 'Наиме': 'Наиме', 'Площа': 'Площа', 'Приме': 'Приме', });
lyr__4.set('fieldAliases', {'Вид': 'Вид', 'Наиме': 'Наиме', 'Площа': 'Площа', 'Приме': 'Приме', });
lyr__5.set('fieldAliases', {'Площадь': 'Площадь', 'Наименован': 'Наименован', 'Примечание': 'Примечание', });
lyr_NDVI_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr__3.set('fieldImages', {'Вид': 'TextEdit', 'Наиме': 'TextEdit', 'Площа': 'TextEdit', 'Приме': 'TextEdit', });
lyr__4.set('fieldImages', {'Вид': 'TextEdit', 'Наиме': 'TextEdit', 'Площа': 'TextEdit', 'Приме': 'TextEdit', });
lyr__5.set('fieldImages', {'Площадь': 'TextEdit', 'Наименован': 'TextEdit', 'Примечание': 'TextEdit', });
lyr_NDVI_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr__3.set('fieldLabels', {'Вид': 'no label', 'Наиме': 'no label', 'Площа': 'no label', 'Приме': 'no label', });
lyr__4.set('fieldLabels', {'Вид': 'no label', 'Наиме': 'no label', 'Площа': 'no label', 'Приме': 'no label', });
lyr__5.set('fieldLabels', {'Площадь': 'no label', 'Наименован': 'no label', 'Примечание': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});