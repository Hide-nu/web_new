//相手の返答内容
var chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    [['Alright !'], ['Oh really!'], ['Ok!']]//ランダムな返答
];


//相手の返信の合計回数（最初は0）
//これを利用して、自分が送信ボタンを押したときの相手の返答を配列から指定する
let chatCount = 0;


//画面への出力
//valはメッセージ内容，personは誰が話しているか
function output(val, person) {
  var chatBtn = document.getElementById('chat-button');
    var ul = document.getElementById('chat-ul');
    var li = document.createElement('li');
    //このdivにテキストを指定
    var div = document.createElement('div');
    div.textContent = val;

    //もしどこかでoutput('Hello', me)が実行されたらこれ
    if (person === 'me') { //自分
        li.classList.add('chat-right');
        ul.appendChild(li);
        li.appendChild(div);
    }else if (person === 'other') { //相手
        //相手が2個連続で返信してくる時、その間は返信不可にする
        //なぜなら、自分の返信を複数受け取ったことになり、その全てに返信してきてしまうから
        //例："Hi!〇〇!"を複数など
        //（今回の相手の連続返信は2個以内とする）
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
    var inputText = document.getElementById('chat-input');
    if (!inputText.value) return false;
    //自分のテキストを送信
    output(inputText.value, 'me');

    setTimeout( ()=> {
        //入力内を空欄にする
        //一瞬の間でvalueを取得し、相手の"Hi!〇〇!"の返信に利用
        //送信ボタンを押した瞬間にvalueを消したら、やまびこに失敗した
        inputText.value = '';
    }, 1);

    //相手の送信の合計回数に応じて次の返信を指定
    switch(chatCount) {
        //もし相手のトーク数が2個の時に送信ボタンが押されたら、
        //名前のやまびこと、chat配列の2（3個目）が返信
        case 2:
            output('Hi, ' + inputText.value + ' !', 'other');
            setTimeout( ()=> {
                output(chat[2], 'other');
            }, 2000);
            break;

        //もし相手のトーク数が4個の時に送信ボタンが押されたら、
        //chat配列の3（4個目）のランダム番目が返信
        case 4:
            output(chat[3][Math.floor(Math.random() * chat[3].length)], 'other');
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
