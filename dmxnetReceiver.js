console.log("Test dmxnet Receiver");

var options = {
    log: { level: 'info' }, // Winston logger options
    oem: 0, // OEM Code from artisticlicense, default to dmxnet OEM.
    esta: 0, // ESTA Manufacturer ID from https://tsp.esta.org, default to ESTA/PLASA (0x0000)
    sName: "Text", // 17 char long node description, default to "dmxnet"
    lName: "Long description", // 63 char long node description, default to "dmxnet - OpenSource ArtNet Transceiver"
    hosts: ["127.0.0.1"] // Interfaces to listen to, all by default
  }
var dmxlib=require('dmxnet');
var dmxnet = new dmxlib.dmxnet(options);

var optionsReceiver = {
  subnet: 0, //Destination subnet, default 0
  universe: 1, //Destination universe, default 0
  net: 0, //Destination net, default 0
}
var receiver=dmxnet.newReceiver(options);
receiver.on('data', function(data) {
  console.log('DMX data:', data);
});
