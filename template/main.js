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
  // inputText変数に入力したテキストを代入する
  var inputText = document.getElementById('chat-input');
  var message = inputText.value
  //自分が入力したテキストを送信
  output(message, 'me');
  // 返事ができるようにしよう
  replyToMessage(message)
}


// チャットボットが返信する処理
function replyToMessage(message){
  // 例
  //送信メッセージに応じて返信を指定
  if ( message == "jack" ) {
    output("ようこそ", "chat_bot")
  }
  if ( message == "名古屋大学" ) {
    output("よく燃える", "chat_bot")
  }
  if ( message != "jack" && message != "名古屋大学" ) {
    output("すみませんよくわかりませんでした", "chat_bot")
  }
}

// 難しいので見なくていいよ！(興味あったら調べてね！)
document.addEventListener("DOMContentLoaded", function(event) {
  //チャットボットの返信の合計回数（最初は0）
  chatCount=0;
  //最初にチャットボットから話しかけられる
  output('Hello ! Welcome to AI chat !', 'chat_bot');
  //チャットボットのトークの合計数に1足す
  chatCount = chatCount + 1;
  setTimeout( ()=> {
    output('What is your name ?', 'chat_bot');
    chatCount = chatCount + 1;
  }, 2000);

});
