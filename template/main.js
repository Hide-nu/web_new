//チャットボットの返答内容
var chat = [
    'Hello ! Welcome to AI chat !',
    'What is your name ?',
    'How are you today ?',
    [['Alright !'], ['Oh really!'], ['Ok!']]//配列の中に配列がある
];


//チャットボットの返信の合計回数（最初は0）
//これを利用して、送信ボタンを押したときのチャットボットの返答を配列から指定する
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

    //もし会話主が自分だったら（送信ボタンを押したら）
    if (person === 'me') { //自分
        li.classList.add('chat-right');
        ul.appendChild(li);
        li.appendChild(div);
    }else if (person === 'other') { //もし会話主がチャットボットだったら
      // チャットボットが話してるときはボタンを押せなくする
        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);
            //チャットボットのトークの合計数に1足す
            chatCount++;
        }, 2000);
    }
}



// ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//送信ボタンを押した時の処理（ここから下を完成させよう）
function btnFunc() {
    // idが'chat-input'の要素を取ってくるためにイコールの右側を考えて埋めよう
    var inputText =

    // もし入力フィールドの中身が空っぽなら実行しない
    if (!inputText.value) return false;

    //もし入力フィールドの中身があるなら自分のテキストを送信するためにoutput関数のカッコ内を埋めよう
    output(,);

    setTimeout( ()=> {
        //入力フィールド内を空欄にする
        inputText.value = '';
    }, 1);

    //チャットボットの返信の合計回数に応じて返信内容を指定
    // 下のカッコ内に入る変数を考えて埋めよう
    switch() {
        //もし相手のトーク数が2個の時に送信ボタンが押されたら、
        //名前のやまびこと、chat配列の2（3個目）が返信
        // 下のcaseの横につく数字を考えて埋めよう
        case :
            output('Hi, ' + inputText.value + ' !', 'other');
            setTimeout( ()=> {
                output(chat[2], 'other');
            }, 2000);
            break;

        //もし相手のトーク数が4個の時に送信ボタンが押されたら、
        //chat配列の3（4個目）のランダム番目が返信
        // 下のcaseの横につく数字を考えて埋めよう
        case :
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
