//import { dmxnet } from "./lib.js";
import { dmxnet } from "dmxnet";

// Load dmxnet as libary
///const dmxlib = require('./lib.js');
// Create new dmxnet instance
var options = {
    log: { level: 'info' }, // Winston logger options
    oem: 0, // OEM Code from artisticlicense, default to dmxnet OEM.
    esta: 0, // ESTA Manufacturer ID from https://tsp.esta.org, default to ESTA/PLASA (0x0000)
    sName: "Text", // 17 char long node description, default to "dmxnet"
    lName: "Long description", // 63 char long node description, default to "dmxnet - OpenSource ArtNet Transceiver"
    hosts: ["127.0.0.1"] // Interfaces to listen to, all by default
  }

  var dmxnet1 = new dmxnet(options);

  var optionsSender = {
    ip: "10.211.55.3", //IP to send to, default 255.255.255.255
    subnet: 0, //Destination subnet, default 0
    universe: 1, //Destination universe, default 0
    net: 0, //Destination net, default 0
    port: 6454, //Destination UDP Port, default 6454
    base_refresh_interval: 1000 // Default interval for sending unchanged ArtDmx
  }

  var sender=dmxnet1.newSender(optionsSender);
  sender.setChannel(10, 255);
  sender.transmit();
