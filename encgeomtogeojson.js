var fs = require("fs")
var polyline = require('polyline')
//past here the encoded geometry
var dat = polyline.decode('l|lxBhcjkGIh@|GHDYLo@BC@A@?DAn@?~ALrI|APDLFXRLLFJHPFTBN?LE\\?XDVFNgArBm@dAQ^G\\V`@dBnC^l@dA`BVZLBpBpA|A`AjDrBlC?@bC@dC@bC@dC@dC@fCBjC@nC@dCbH?|FEpHC?nAbHFbEFCnEKlEDF?FChB?zC?PA\\?F?b@|CVfDVlAJf@FX@[vFpCRrCVpCR_@tF_@rFc@zF?FAFAF[`EAPEb@YtEAFAJOrBAXYXMCGJ')

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
