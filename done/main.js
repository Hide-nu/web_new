//相手の返答内容
var chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    [['Alright !'], ['Oh really!'], ['Ok!']],
    ['Yeah', 'I think so', 'fuck corona']
];


let chatCount = 0;


function output(val, person) {
  var chatBtn = document.getElementById('chat-button');
    var ul = document.getElementById('chat-ul');
    var li = document.createElement('li');

    var div = document.createElement('div');
    div.textContent = val;

    if (person === 'me') {
        li.classList.add('chat-right');
        ul.appendChild(li);
        li.appendChild(div);
    }else if (person === 'other') {

        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);

            chatCount++;
        }, 2000);
    }
}


function btnFunc() {
    var inputText = document.getElementById('chat-input');
    if (!inputText.value) return false;

    output(inputText.value, 'me');

    setTimeout( ()=> {

        inputText.value = '';
    }, 1);

    switch(chatCount) {

        case 2:
            output('Hi, ' + inputText.value + ' !', 'other');
            setTimeout( ()=> {
                output(chat[2], 'other');
            }, 2000);
            break;


        case 4:
            output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
            break;
    }

    if(chatCount>4){
      output(chat[4][Math.floor(Math.random() * chat[4].length)],'other')
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
  
  output(chat[0], 'other');
  setTimeout( ()=> {
    output(chat[1], 'other');
  }, 2000);

});
