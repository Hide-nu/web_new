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


let chatCount;

//送信ボタンを押した時の処理
function sendMyMessage() {
  //messageに入力した値を代入しよう！



  //下のoutputの引数を修正して入力された値を表示させよう！
  output('jack', 'me')

  // 返事ができるようにしよう
  //replyToMessage(message)
}


// チャットボットが返信する処理
function replyToMessage(message){
  // 例
  //送信メッセージに応じて返信を指定
  if ( message == "jack" ) {
    output("ようこそ", "chat_bot")
  }
}

// 難しいので見なくていいよ！(興味あったら調べてね！)
document.addEventListener("DOMContentLoaded", function(event) {
  //チャットボットの返信の合計回数（最初は0）
  chatCount=0;
  //最初にチャットボットから話しかけられる
  output('こんにちは! jackの新歓へようこそ!', 'chat_bot');
  //チャットボットのトークの合計数に1足す
  chatCount = chatCount + 1;
  setTimeout( ()=> {
    output('名前を教えてください', 'chat_bot');
    chatCount = chatCount + 1;
  }, 2000);

});
