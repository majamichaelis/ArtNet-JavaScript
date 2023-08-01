const UdpClient = xHost.type("System.Net.Sockets.UdpClient", "System.Net.Sockets");
const BinaryWriter = xHost.type("System.IO.BinaryWriter", "System.Runtime");
const MemoryStream = xHost.type("System.IO.MemoryStream", "System.Runtime");
const SeekOrigin = xHost.type("System.IO.SeekOrigin", "System.Runtime");

let client, dmxContent, stream, writer;
const port = 6454;
const host = "255.255.255.255";

Global.OnInit = function ()
{
    client = new UdpClient();
    dmxContent = new Uint8Array(512);
    stream = new MemoryStream(530);
    writer = new BinaryWriter(stream);
    writer.Write(xHost.toByte(0x41)); // A
    writer.Write(xHost.toByte(0x72)); // R
    writer.Write(xHost.toByte(0x74)); // T
    writer.Write(xHost.toByte(0x2d)); // -
    writer.Write(xHost.toByte(0x4e)); // N
    writer.Write(xHost.toByte(0x65)); // E
    writer.Write(xHost.toByte(0x74)); // T
    writer.Write(xHost.toByte(0x00));
    writer.Write(xHost.toByte(0x00));
    writer.Write(xHost.toByte(0x50));
    writer.Write(xHost.toByte(0x00)); // Protocol
    writer.Write(xHost.toByte(0x0e)); // Protocol
    writer.Write(xHost.toByte(0x00)); // Seq
    writer.Write(xHost.toByte(0x00)); // Phys
    writer.Write(xHost.toByte(0x00)); // sub universe
    writer.Write(xHost.toByte(0x00)); // net
    writer.Write(xHost.toByte(0x02)); // len h
    writer.Write(xHost.toByte(0x00)); // len l
}

Global.OnParameterChanged = function (id)
{
    if (id.startsWith("artnet-")) {
        const channelIndex = +(id.split("-").pop());
        const value = Math.round(GetParameterValue(id));
        dmxContent[channelIndex-1] = value;
        Console.WriteLine(`Setting ${channelIndex} to ${value}`);  
        sendArtNET();
    }
}

function sendArtNET() {
    writer.Seek(18, SeekOrigin.Begin);
    for (let i = 0; i < 512; i++) writer.Write(xHost.toByte(dmxContent[i]));
    client.Send(stream.GetBuffer(), stream.Length, host, port);
}