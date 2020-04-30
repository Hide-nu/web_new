window.addEventListener('DOMContentLoaded',()=>{
  //- イベントリスナー登録
  document.getElementById('input-field').addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
      handler_request_reply();
    }
  });
});

function scroll_bottom(){
  field = document.getElementById('field');
  var y = field.scrollHeight;
  var h = field.clientHeight;
  field.scroll({
    top: y-h
  });
}

/*---------------------------------------*/
/* 返答をリクエスト */
/*---------------------------------------*/
function handler_request_reply(ev){
  /*---------------------------------------*/
  /* コメント取得 */
  /*---------------------------------------*/
  let comment = document.getElementById('chat-input').value;
  var ul = document.getElementById('chat-ul');
  var li = document.createElement('li');
  //このdivにテキストを指定
  var div = document.createElement('div');
  div.textContent = comment;
  li.classList.add('chat-right');
  ul.appendChild(li);
  li.appendChild(div);

　scroll_bottom();
  /*---------------------------------------*/
  /* レクエストデータ */
  /*---------------------------------------*/
  let formdata = new FormData();
  //- apikeyパラメーター
  formdata.append('apikey','APIキーを入れてください');
  //- コメント
  formdata.append('query',comment);

  document.getElementById('chat-input').value  = '';
  /*---------------------------------------*/
  /* リクエスト */
  /*---------------------------------------*/
  fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
    method: 'post',
    body: formdata,
  }).then(response => {
    //- レスポンス取得
    response.json().then(data => {

      //- 返答取得
      const reply = data.results[0].reply;
      //- 出力
      var ul = document.getElementById('chat-ul');
      var li = document.createElement('li');
      //このdivにテキストを指定
      var div = document.createElement('div');
      div.textContent = reply;
      li.classList.add('chat-left');
      ul.appendChild(li);
      li.appendChild(div);

      scroll_bottom();

    });
  });

}
