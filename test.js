var osc = require("osc");

/****************
 * OSC Over TCP *
 ****************/


var tcpPort = new osc.TCPSocketPort({
//    address: "10.101.100.101",
    address: "192.168.1.21",
    port: 3036,
//    useSLIP: false
});

tcpPort.on("ready", function () {
    console.log("Connected to "+tcpPort.options.address+":"+tcpPort.options.port+" - Listening for OSC over TCP.");
});

tcpPort.on("data", function (oscMessage) {
    console.log("Data: "+oscMessage);
});

tcpPort.on("raw", function (data, packetInfo) {
    console.log("Raw: "+data+", "+packetInfo);
});

tcpPort.on("osc", function (packet, packetInfo) {
    console.log("OSC: "+packet+", "+packetInfo);
});

tcpPort.on("error", function (err) {
    console.log("Error: "+err);
});

tcpPort.on("close", function (hadError) {
    console.log("Close: "+hadError);
});

tcpPort.open();