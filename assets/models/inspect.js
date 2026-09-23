const fs=require('fs');
for (const name of ['Coberturas.geojson','Vias.geojson','Drenajes.geojson']) {
 const fc=JSON.parse(fs.readFileSync('G:/Mi unidad/I+D/ORO_VERDE/'+name));
 console.log(name, 'features=',fc.features.length);
 console.log('fields=',Object.keys(fc.features[0]?.properties||{}).join('|'));
 console.log('sample=',JSON.stringify(fc.features[0]?.properties||{}));
}
const kml=fs.readFileSync('G:/Mi unidad/I+D/ORO_VERDE/3D_Modulos.kml','utf8');
console.log('kml placemarks=',(kml.match(/<Placemark/g)||[]).length);
console.log((kml.match(/<Location>[\s\S]*?<\/Location>/g)||[]).join('\n'));