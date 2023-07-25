function openChat() {
    document.getElementsByClassName('chatbot-button')[0].setAttribute('style', 'display: none;');
    document.getElementById('chatbot-ventana-container').setAttribute('style', 'display: block;');
}

function closeChat() {
    document.getElementsByClassName('chatbot-button')[0].setAttribute('style', 'display: block;');
    document.getElementById('chatbot-ventana-container').setAttribute('style', 'display: none;');
    mensaje = document.getElementById('chatbot-ventana-container').getAttribute(style);
}

$(document).bind('keydown',function(eEvento){    
    if(eEvento.which == 27) {
        document.getElementsByClassName('chatbot-button')[0].setAttribute('style', 'display: block;');
        document.getElementById('chatbot-ventana-container').setAttribute('style', 'display: none;');
    }
});