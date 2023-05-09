console.log("Test-Artnet");

var options = {
    host: '10.211.55.3',
    port: 6454,
    refresh: 50000
}
 
var artnet = require('artnet')(options);
 
artnet.set(1, 255, function (err, res) {});
artnet.set(2, 10, function (err, res) {});
artnet.set(3, 127, function (err, res) {
    artnet.close(); 
});
