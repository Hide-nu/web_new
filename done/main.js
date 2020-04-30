
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
function btnFunc() {
  // inputText変数に入力したテキストを代入する
  var inputText = document.getElementById('');
  // 入力が空ならここで終了する
  if (!inputText.value) return false;
  //自分が入力したテキストを送信
  output(inputText.value, 'me');

  setTimeout( ()=> {
    //入力内を空欄にする
    inputText.value = '';
  }, 1);

  // チャットボットが返信する処理
  //チャットボットの送信の合計回数に応じて次の返信を指定
  if(chatCount==2) {
    output('', 'chat_bot');
    chatCount = chatCount + 1;
  }else if(chatCount==3){
    output('', 'chat_bot');
    chatCount = chatCount + 1;
  }
}

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
