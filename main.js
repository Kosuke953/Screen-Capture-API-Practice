const videoElement = document.getElementById("video");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

console.log(videoElement);

let displayMediaOptions = { video:{cursor:'always'}, audio:false };

start.addEventListener("click", (e)=>{
    startCapture();
}, false)

stop.addEventListener("click", (e)=>{
    stopCapture();
}, false)

    async function startCapture() {
    try {
    videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch(err) {
        console.error("Error" + err);
    }
}

function stopCapture(e) {
    let tracks = videoElement.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    videoElement.srcObject = null;
}

