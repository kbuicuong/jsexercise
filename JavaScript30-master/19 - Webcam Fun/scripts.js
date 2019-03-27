const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {

    //returns a promise so then...
    navigator.mediaDevices.getUserMedia({ video: true, audio: false} )
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream); //put it in the browser
            video.play();
        })
}

getVideo();