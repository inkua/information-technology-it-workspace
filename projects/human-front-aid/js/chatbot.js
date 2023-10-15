function openChat() {
    document.getElementsByClassName('chatbot-button')[0].setAttribute('style', 'display: none;');
    document.getElementById('chatbot-ventana-container').setAttribute('style', 'display: block;');
    if (screen.width >= 320 && screen.width <= 480) {
        document.getElementById('focus').setAttribute('style', 'display: block;');
    }
}

function closeChat() {
    document.getElementsByClassName('chatbot-button')[0].setAttribute('style', 'display: block;');
    document.getElementById('chatbot-ventana-container').setAttribute('style', 'display: none;');
    document.getElementById('focus').setAttribute('style', 'display: none;');
}

$(document).bind('keydown',function(eEvento){    
    if(eEvento.which == 27) {
        document.getElementsByClassName('chatbot-button')[0].setAttribute('style', 'display: block;');
        document.getElementById('chatbot-ventana-container').setAttribute('style', 'display: none;');
    }
});

function chooseMessage() {
    msgs = document.getElementsByClassName('msg');
    $('#waitingBuble').css("display", "none");;

    for (msg of msgs) {
        msg.setAttribute('style', 'display: none;');
    }

    msgs = document.getElementsByClassName('chatbot-messagechoose');
    

    bubbletime = 0;

    for (msg of msgs) {
        msg.setAttribute('style', 'display: block;');
        msg.classList.add('entrychat');
    }

    document.getElementsByClassName('chatbot-seccionchoose')[0].setAttribute('style', 'background-color: #F2F2F2;');
    document.getElementsByClassName('chatbot-choosetext')[0].setAttribute('style', 'color: #F2F2F2;');
    document.getElementsByClassName('mood')[0].setAttribute('style', 'display: none;');
    document.getElementsByClassName('send')[0].setAttribute('style', 'display: none;');

    document.getElementsByClassName('chatbot-seccionchat')[0].setAttribute('style', 'align-items: baseline; padding: 0;');
}

function anserMessage(element) {

    msgs = document.getElementsByClassName('chatbot-messagechoose');
    waitingBuble = $('#waitingBuble');
    

    for (msg of msgs) {

        if (!msg.classList.contains('chatbot-messagewaiting')) {
        msg.setAttribute('style', 'display: none;');
        } else {
            msg.setAttribute('style', 'display: flex; align-items: normal; padding: 20;');
        }
    }

    document.getElementsByClassName('chatbot-seccionchat')[0].setAttribute('style', 'align-items: normal; padding: 20;');
    
    msgs = document.getElementsByClassName('msg');

    for (msg of msgs) {
        if (!msg.classList.contains('chatbot-messagewaiting')) {
            msg.setAttribute('style', 'display: block;');
        } 
    }

    switch (element.id) {
        case 'question01':

            br = document.createElement("br");
            option = document.createElement("p");
            option.classList.add('chatbot-messageuser', 'msg');
            option.setAttribute('style', 'display: block;');
            option.textContent = 'What is the destination of the donations?';
        
            seccionchat = document.querySelector(".chatbot-seccionchat");
            waitingBuble.after(option);          

            setTimeout(function() {
                
                anser = document.createElement("p");
                line1 = document.createElement("p");
                line1.setAttribute('style', 'margin-bottom: 0;');
                line2 = document.createElement("p");
                line2.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line3 = document.createElement("p");
                line3.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line4 = document.createElement("p");
                line4.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line5 = document.createElement("p");
                line5.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line6 = document.createElement("p");
                line6.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line7 = document.createElement("p");
                line7.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line8 = document.createElement("p");
                line8.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                
                anser.classList.add('chatbot-messagebot', 'msg');
                anser.setAttribute('style', 'display: block;');

                line1.textContent = 
                'All donations go towards:';
                anser.appendChild(line1);

                line2.textContent = 
                '> Direct financial help to people in need.';
                anser.appendChild(line2);

                line3.textContent = 
                '> Purchase of essential materials for the local population.';
                anser.appendChild(line3);

                line4.textContent = 
                '> Support of the internally displaced people (IDPs).';
                anser.appendChild(line4);

                line5.textContent = 
                '> Support of accommodation.';
                anser.appendChild(line5);

                line6.textContent = 
                '> Financing of transports.';
                anser.appendChild(line6);

                line7.textContent = 
                '> Medical-help.';
                anser.appendChild(line7);

                line8.textContent = 
                '> Support for the protection of pets (Dogs, Cats, etc).';
                anser.appendChild(line8);
            
                seccionchat = document.querySelector(".chatbot-seccionchat");
                waitingBuble.after(anser);

            }, 3000);



        break;

        case 'question02':
            option = document.createElement("p");
            option.classList.add('chatbot-messageuser', 'msg');
            option.setAttribute('style', 'display: block;');
            option.textContent = 'Who is the founder?';
        
            seccionchat = document.querySelector(".chatbot-seccionchat");
            waitingBuble.after(option);            

            setTimeout(function() {
                
                anser = document.createElement("p");
                line1 = document.createElement("p");
                line1.setAttribute('style', 'margin-bottom: 5px;');
                line2 = document.createElement("p");
                line2.setAttribute('style', 'margin-bottom: 0; font-size: 13px');
                line3 = document.createElement("p");
                line3.setAttribute('style', 'margin-bottom: 0; font-size: 14px');
                line4 = document.createElement("p");
                line4.setAttribute('style', 'margin-bottom: 0; font-size: 14px');
                line5 = document.createElement("p");
                line5.setAttribute('style', 'margin-bottom: 0; font-size: 14px');
                line6 = document.createElement("p");
                line6.setAttribute('style', 'margin-bottom: 5px; font-size: 14px');
                line7 = document.createElement("p");
                line7.setAttribute('style', 'margin-bottom: 3px; font-size: 13px');


                anser.classList.add('chatbot-messagebot', 'msg');
                anser.setAttribute('style', 'display: block;');

                line1.textContent = 
                'Initiator and founder:';
                anser.appendChild(line1);

                line2.textContent = 
                'Bänz Margot';
                anser.appendChild(line2);

                line3.textContent = 
                'Schifflaube 34';
                anser.appendChild(line3);

                line4.textContent = 
                '3011 Bern';
                anser.appendChild(line4);

                line5.textContent = 
                'Switzerland';
                anser.appendChild(line5);

                line6.textContent = 
                'Tel: +41335333344';
                anser.appendChild(line6);

                line7.textContent = 
                'Located in Odessa.';
                anser.appendChild(line7);
            
                seccionchat = document.querySelector(".chatbot-seccionchat");
                waitingBuble.after(anser);

            }, 3000);
        break;

        case 'question03':
            option = document.createElement("p");
            option.classList.add('chatbot-messageuser', 'msg');
            option.setAttribute('style', 'display: block;');
            option.textContent = 'Where is the organization located?';
        
            seccionchat = document.querySelector(".chatbot-seccionchat");
            waitingBuble.after(option);            

            setTimeout(function() {
                
                anser = document.createElement("p");
                line1 = document.createElement("p");
                line1.setAttribute('style', 'margin-bottom: 0;');
                line2 = document.createElement("p");
                line2.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line3 = document.createElement("p");
                line3.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line4 = document.createElement("p");
                line4.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                line5 = document.createElement("p");
                line5.setAttribute('style', 'margin-bottom: 1px; font-size: 13px');
                
                anser.classList.add('chatbot-messagebot', 'msg');
                anser.setAttribute('style', 'display: block;');

                line1.textContent = 
                'Address:';
                anser.appendChild(line1);

                line2.textContent = 
                'Human Front Aid';
                anser.appendChild(line2);

                line3.textContent = 
                'Riedernstrasse 50';
                anser.appendChild(line3);

                line4.textContent = 
                '3027 Bern';
                anser.appendChild(line4);

                line5.textContent = 
                'Switzerland';
                anser.appendChild(line5);

            
                seccionchat = document.querySelector(".chatbot-seccionchat");
                waitingBuble.after(anser);

            }, 3000);
        break;

        case 'question04':
            option = document.createElement("p");
            option.classList.add('chatbot-messageuser', 'msg');
            option.setAttribute('style', 'display: block;');
            option.textContent = 'Who built this website?';
        
            seccionchat = document.querySelector(".chatbot-seccionchat");
            waitingBuble.after(option);           

            setTimeout(function() {
                
                anser = document.createElement("p");
                line1 = document.createElement("p");
                line1.setAttribute('style', 'margin-bottom: 5px;');
                line2 = document.createElement("p");
                line2.setAttribute('style', 'margin-bottom: 0; font-size: 13px');
                line3 = document.createElement("p");
                line3.setAttribute('style', 'margin-bottom: 0; padding-left: 9px; font-size: 14px');
                line4 = document.createElement("p");
                line4.setAttribute('style', 'margin-bottom: 0; padding-left: 9px; font-size: 14px');
                line5 = document.createElement("p");
                line5.setAttribute('style', 'margin-bottom: 0; padding-left: 9px; font-size: 14px');
                line6 = document.createElement("p");
                line6.setAttribute('style', 'margin-bottom: 3px; padding-left: 9px; font-size: 14px');
                line7 = document.createElement("p");
                line7.setAttribute('style', 'margin-bottom: 3px; font-size: 13px');
                line8 = document.createElement("p");
                line8.setAttribute('style', 'margin-bottom: 1px; padding-left: 7px; font-size: 14px');
                line9 = document.createElement("p");
                line9.setAttribute('style', 'margin-bottom: 1px; padding-left: 7px; font-size: 14px');
                line10 = document.createElement("p");
                line10.setAttribute('style', 'margin-bottom: 1px; padding-left: 7px; font-size: 14px');
                line11 = document.createElement("p");
                line11.setAttribute('style', 'margin-bottom: 1px; padding-left: 7px; font-size: 14px');
                line12 = document.createElement("p");
                line12.setAttribute('style', 'margin-bottom: 1px; padding-left: 7px; font-size: 14px');
                line13 = document.createElement("p");
                line13.setAttribute('style', 'margin-bottom: 1px; padding-left: 7px; font-size: 13.5px');
                
                anser.classList.add('chatbot-messagebot', 'msg');
                anser.setAttribute('style', 'display: block;');

                line1.textContent = 
                'This website is a redesign by the organization InkuA.';
                anser.appendChild(line1);

                line2.textContent = 
                'Designer Team:';
                anser.appendChild(line2);

                line3.textContent = 
                '> Johana Martinez';
                anser.appendChild(line3);

                line4.textContent = 
                '> Virginia Isabel Ponce';
                anser.appendChild(line4);

                line5.textContent = 
                '> Sofia Weigandt';
                anser.appendChild(line5);

                line6.textContent = 
                '> Nicolas Fernandez Picone';
                anser.appendChild(line6);

                line7.textContent = 
                'Development team:';
                anser.appendChild(line7);

                line8.textContent = 
                '> Diego Nicolás Cabrera';
                anser.appendChild(line8);

                line9.textContent = 
                '> Federico Manuel Peralta';
                anser.appendChild(line9);

                line10.textContent = 
                '> Luis Romano';
                anser.appendChild(line10);

                line11.textContent = 
                '> Santiago Elias Carranza';
                anser.appendChild(line11);

                line12.textContent = 
                '> Manuel Florez';
                anser.appendChild(line12);

                line13.textContent = 
                '> Luis Fernando Callisaya Surco';
                anser.appendChild(line13);
            
                seccionchat = document.querySelector(".chatbot-seccionchat");
                waitingBuble.after(anser);

            }, 3000);
        break;
    }

    document.getElementsByClassName('chatbot-seccionchoose')[0].setAttribute('style', 'background-color: white;');
    document.getElementsByClassName('chatbot-choosetext')[0].setAttribute('style', 'color: #B1AAAACC;');
    document.getElementsByClassName('mood')[0].setAttribute('style', 'display: inline-block;');
    document.getElementsByClassName('send')[0].setAttribute('style', 'display: inline-block;');

    setTimeout(function() {
        waitingBuble.attr('style', 'display: flex;');
    }, 700);

    setTimeout(function() {
        waitingBuble.attr('style', 'display: none;');
    }, 3000);
}