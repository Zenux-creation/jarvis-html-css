const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;


    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Sir...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello') ||  message.includes('hi vaithiyan') ||  message.includes('hello jarvis') || message.includes('wake up jarvis')){
        speak("Hello sir , How May I Help You sir?");
    }
    else if(message.includes("meaning of jarvis") || message.includes("tell me the meaning of your name jarvis")){
       speak(" Sir the meaning of the jarvis is  (Just a Rather Very Intelligent System) ");
    }
    else if(message.includes("nothing") || message.includes("  ")){
        speak("Sorry Sir, I didn't get that. Can you please repeat?");
    }
    else if(message.includes("who are you") || message.includes("tell me about yourself jarvis")){
        speak("my name is jarvis and create by using programming language called javascript sir");
    }
    else if(message.includes("why are you like this") || message.includes("  ")){
        speak("a cretian person programmed me like this and i am here" );}
    else if(message.includes("can you help me jarvis") || message.includes("can you help me  ")){
        speak("what can i help you sir");
    }
    else if(message.includes("give me some medical description") || message.includes("i got a fever can you give me medical discription for it")){
        speak("Rest and drink plenty of fluids. Medication isn't needed. Call the doctor if the fever is accompanied by a severe headache, stiff neck, shortness of breath, or other unusual signs or symptoms.");
    }
    else if(message.includes("What are some first aid treatments?") || message.includes("what sre the first aid treatments")){
    speak("First aid can include cleaning minor cuts, scrapes, or scratches; treating a minor burn; applying bandages and dressings; the use of non-prescription medicine; draining blisters; removing debris from the eyes; massage; and drinking fluids to relieve heat stress.")
    }
    else if (message.includes("pain killer tablets") || message.includes("Which is the best pain killer tablet?")){
    speak("Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It's available to buy from a pharmacy or shop but you may be able to get it on prescription if you have long-term pain.")
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if(message.includes("open microsoft apps")){
        window.open("https://www.office.com");
        speak("opening microsoft app")
    }
    else if(message.includes("open quora")){
        window.open("https://www.quora.com/");
        speak("opening quora")
    }
    else if(message.includes("open chatgpt")){
        window.open(" https://chatgpt.com/?oai-dm=1", "_blank");  //whatsapp web
        speak("opening chatgpt sir")
    }
    else if(message.includes("open notepad")){
        window.open("https://www.microsoft.com/store/productId/9MSMLRH6LZF3?ocid=pdpshare", "_blank");  //whatsapp web
        speak("opening notepad sir")
    }
    else if(message.includes("open github")){
        window.open(" https://github.com/microsoft/pyright/blob/main/docs/configuration.md#reportMissingImports", "_blank");  
        speak("opening github")
    }
   
    
    else if(message.includes("open telegram")){
        window.open("https://web.telegram.org/k/");
        speak("opening telegram")
    }
    else if(message.includes("open canva")){
        window.open("https://www.canva.com/", "_blank");
        speak("Opening canva sir...")}
    else if(message.includes("open microsoft")){
        window.open("https://www.canva.com/", "_blank");
        speak("Opening microsoft sir...")}
    else if(message.includes("jarvis free anime website") || message.includes("open zoro to website")){
         window.open("https://anilab.to/", "_blank");
        speak("Opening anilab sir..to watch animes for free.")}
    else if(message.includes("open netflix")){
         window.open("https://www.netflix.com/in/", "_blank");
        speak("Opening netflix sir...")}
    else if(message.includes("open gemini") || message.includes("jarvis open gemini ai")){
        window.open("https://gemini.google.com/", "_blank");
        speak("Opening gemini ai sir...")}
                                                                           

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }
    else if(message.includes('play') || message.includes('from youtube')){
        window.open(`https://www.youtube.com/results?search_query=${message.replace(" ", "+")}`, "_blank");
        const finalText ="" + message;
        speak(finalText);
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
    }
    