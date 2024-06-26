# Art-Net (JavaScript)


<p>Art-Net was used in my Bachelor's thesis to control lights in a virtual studio. DMX data was sent from Viz Arc (main interface) to the GrandMA 2 on PC software using Art-Net.</p>

<h2>Workflow:</h2>
<b>Unity: </b>JSON mit REST API → <b>Viz Arc:</b> ArtNet → <b>GrandMA 2:</b> DMX → Einstellung eines Lichts


<h2>Description:</h2>
<p>Art-Net is a standard protocol for transmitting lighting control data over a network. It was developed to send DMX data (Digital Multiplex) over Ethernet. DMX is a widely used protocol for controlling stage lighting and other specialized lighting devices.</p>

<p>This code initializes an Art-Net client that receives DMX data and sends it over UDP. The Art-Net header is set, and the DMX data is managed in an internal memory stream. When DMX values change, the new values are written to the stream and sent over the network.</p>

<p>To control a lamp, the channel must be addressed. The channel is specified by an ID, and the channel is controlled with a value between 0 and 255. A channel can, for example, change the dimmer value or the color temperature of a lamp.</p>

<p>Art-Net must be sent continuously. A DMX universe always has space for exactly 512 channels.</p>

<p align="center">
    <img width="500" alt="Configuration of the GrandMA for Art-Net Input" src="https://github.com/majamichaelis/ArtNet-JavaScript/assets/73911655/2968f4cf-f5ed-440c-a4e2-3731d6148e3d">
    <br>Configuration of the GrandMA for Art-Net Input
</p>

<p align="center">
    <img width="900" alt="Overview of the DMX Channels of the GrandMA" src="https://github.com/majamichaelis/ArtNet-JavaScript/assets/73911655/93d19fec-6930-4fce-b47f-4532caf364fd">
    <br>Overview of the DMX Channels of the GrandMA
</p>

<h2>Files:</h2>
<ul>
    <li><strong>ArtNet-Final.js</strong>: This is the script with the final implementation. The other scripts could not be used because Viz Arc did not support Node.js libraries.</li>
    <li><strong>JSONsampleData.json</strong>: Contains test data. In this format, data for changing the settings of a light is sent to Viz Arc.</li>
</ul>

<p align="center">
    <img width="900" alt="System Overview" src="https://github.com/majamichaelis/ArtNet-JavaScript/assets/73911655/c7e228ec-6ba3-4be8-a400-1b3a477d2931">
    <br> System Overview
</p>
<p align="center">
    <img width="500" alt="JSON Example" src="https://github.com/majamichaelis/ArtNet-JavaScript/assets/73911655/2a6749ad-3fd4-47fc-a8b8-7da9d840d377">
    <br> spot00 shows an example JSON input
</p>

