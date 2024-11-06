// script.js
const videoInput = document.getElementById('myVideo');
const uploadButton = document.getElementById('uploadButton');
const videoPlayer = document.getElementById('videoPlayer');
const videoDuration = document.getElementById('videoDuration');

uploadButton.addEventListener('click', () => {
    videoInput.click();
});

videoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;

    // Mostrar la duración del video
    videoPlayer.onloadedmetadata = () => {
        const minutes = Math.floor(videoPlayer.duration / 60);
        const seconds = Math.floor(videoPlayer.duration % 60);
        videoDuration.textContent = `Duración: ${minutes}:${seconds}`;
    };
});
