// calling the dom
const videoElement = document.getElementById('video');
const playBtn = document.getElementById('button');

// Prompt and select media stream ,pass the vieo element ,then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    } catch (error) {
        // display error
        console.log('whoops there is an error: '+error)
    }
}
selectMediaStream();

playBtn.addEventListener('click', async () => {
    //disable the button
    playBtn.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // enable the button
    playBtn.disabled = false;
});