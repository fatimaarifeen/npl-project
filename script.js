function startSpeechToText(){
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = 'en-US';

    recognition.start();
    recognition.onresult = (event)=>{
        document.getElementById("speechOutput").value = event.results[0][0].transcript;
    };
    recognition.onerror = (event)=>{
        alert('Speech Recogination error detected: '  + event.error);
    };
}

function startTextToSpeech(){
    const text = document.getElementById("speechOutput").value;
    const Speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(Speech);
}

function startWebcam(){
    const camera= document.getElementById("camera")
    camera.style.display = 'block';
    Webcam.set({
        width:320,
        height:240,
        Image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach('#camera');
}

function takeSelfie(){
    Webcam.snap((dataUri)=>{
        const link = document.createElement('a');
        link.href = dataUri;
        link.download = "fatima.jpg";
        link.click();
    });
}