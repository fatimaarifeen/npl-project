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