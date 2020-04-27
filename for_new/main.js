//チャットボットの返答内容
var chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    'Oh really!'
];


//画面への出力
//valはメッセージ内容，personはどちらが話しているか
function output(val, person) {
  var chatBtn = document.getElementById('chat-button');
    var ul = document.getElementById('chat-ul');
    var li = document.createElement('li');
    //このdivにテキストを指定
    var div = document.createElement('div');
    div.textContent = val;

    //自分が送信したとき（me=自分）
    if (person === 'me') {
        li.classList.add('chat-right');
        ul.appendChild(li);
        li.appendChild(div);
    }else if (person === 'chat_bot') { //チャットボットが送信したとき
        //チャットボットが返信している最中は自分が送信できないようにする
        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);
        }, 2000);
    }
}


//チャットボットの返信の合計回数（最初は0）
//これを利用して、自分が送信ボタンを押したときのチャットボットの返答を上のchat配列から指定する
let chatCount = 0;

//送信ボタンを押した時の処理
function btnFunc() {
  // inputText変数に入力したテキストを代入する
    var inputText = document.getElementById('');
    // 入力が空ならここで終了する
    if (!inputText.value) return false;
    //自分が入力したテキストを送信
    output( , 'me');

    setTimeout( ()=> {
        //入力内を空欄にする
        inputText.value = '';
    }, 1);

    // チャットボットが返信する処理
    //チャットボットの送信の合計回数に応じて次の返信を指定
    switch(chatCount) {
        //もしチャットボットのトーク数が2個の時に送信ボタンが押されたら、
        //名前のやまびこと、chat配列の2（3個目）が返信
        case 2:
            output('Hi, ' + inputText.value + ' !\n' + chat[2], 'chat_bot');
            chatCount = chatCount + 1;
            break;

        //もしチャットボットのトーク数が4個の時に送信ボタンが押されたら、
        //chat配列の3（4個目）のランダム番目が返信
        case 3:
            output( , 'chat_bot');
            chatCount = chatCount + 1;
            break;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
  //最初にチャットボットから話しかけられる
  output(chat[0], 'chat_bot');
  //チャットボットのトークの合計数に1足す
  chatCount = chatCount + 1;
  setTimeout( ()=> {
    output(chat[1], 'chat_bot');
    chatCount = chatCount + 1;
  }, 2000);

});
