//相手の返答内容
var chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    'Alright !'
];


//チャットボットの返信の合計回数（最初は0）
//これを利用して、自分が送信ボタンを押したときの相手の返答を上のchat配列から指定する
let chatCount = 0;


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
    }else if (person === 'other') { //相手が送信したとき（other=相手)
        //相手が返信している最中は自分が送信できないようにする
        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);
            //相手のトークの合計数に1足す
            chatCount++;
        }, 2000);
    }
}




//送信ボタンを押した時の処理
function btnFunc() {
    // chat-inputのタグを取得しよう---------------------------------------------------------------


    var inputText = document.getElementById('chat-input');
    // 何も入力されていなかったら何もしない
    if (!inputText.value) return false;
    //自分が入力したテキストを送信しよう------------------------------------------------------------


    output(inputText.value, 'me');

    setTimeout( ()=> {
        //入力内を空欄にする
        //一瞬の間でvalueを取得し、相手の"Hi!〇〇!"の返信に利用
        inputText.value = '';
    }, 1);

    //相手の送信の合計回数に応じて次の返信を指定
    switch(chatCount) {
        // 条件分岐させて、名前をやまびこさせよう
        // 相手のトーク数が２のときは？
        case 2:
            // ここで（ Hi, ~~入力名前~~ ! ）と表示--------------------------------------------------------


            setTimeout( ()=> {
                // ここで、chat[2]を表示-------------------------------------------------------------------

                
            }, 2000);
            break;

        //もし相手のトーク数が4個の時は？
        case 4:
            // ここでchat[3]を表示--------------------------------------------------------------------


            break;
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
  //最初に相手から話しかけられる
  output(chat[0], 'other');
  setTimeout( ()=> {
    output(chat[1], 'other');
  }, 2000);

});
