var fs = require("fs")
var polyline = require('polyline')
//past here the encoded geometry
var dat = polyline.decode('repxB|fqkGN_KhC_JnDeOiA}_@iA{T`@uFnAo]kBuMJcKLmNR}Ie@{J{CkQmAuIaFcK{AaKd@qNvA_IxCsPto@cu@pA}c@')

dat.forEach(element => {
   console.log(element) 
   var a = element[0]
   element[0] = element[1]
   element[1] = a
});
var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": dat
        }
      }
    ]
  }
//output file name
  fs.writeFile('linestring.geojson', JSON.stringify(geojson), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
})
