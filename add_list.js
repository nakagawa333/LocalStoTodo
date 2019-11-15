$(function(){

  $(".Todo_body").empty();

  TodoList();
  
  $("#add_todo").off("click");
  $("#add_todo").on("click",function(){
    AddCheckTodo();

    $(".add_advice").empty();
    $(this).attr("disabled",true);

    let Todo_title = $.trim($("#Todo_title").val());
    let Todo_content  = $.trim($("#Todo_content").val());

    if(Todo_title.length == 0 || Todo_content.length == 0){
      $(".add_advice").append(`
      <h4 class="alert_comment">タイトルとコンテンツどちらも入力する必要があります。</h4>
     `)

      $(this).attr("disabled",false);

      return false;
    }

    let random_String = randomKey();

    let count_id = 0;

    if(localStorage.length != 0){
      count_id = localStorage.length;
    }

    let jsonVal = {title:Todo_title,content:Todo_content,id:count_id,check_delete:false};
    localStorage.setItem(random_String,JSON.stringify(jsonVal));

    TodoBodyAppend(count_id,Todo_title,Todo_content);

    //新規追加されたTodoにも適用
    clickcheck();

    Todo_count();

    //todoの数を計算
    checkTodoNum();

    //入力欄を初期状態に
    clearInputInfo();

    //再びボタンを押せるようにする
    $(this).attr("disabled",false);

    AllcheckSearch();
  })
})

//キーをランダム生成
function randomKey(){
  let col = 8;

  let random = "abcdefghijklmnopqrstuvwxyz0123456789909090909ed0w9ew0e9w0e9w0e9w0e9w0edfhedufheufe";

  let random_count = random.length;
  let random_String = "";
  
  for(var i = 0; i < col; i++){
    random_String += random[Math.floor(Math.random() * random_count)];
  }

  return random_String;
}

function TodoBodyAppend(count_id,Todo_title,Todo_content){
  $(".Todo_body").prepend(`
     <div class="card card_content" id="card_body${count_id}">
       <div class = "card-body">
         <input type="checkbox" class="checkbox_delete_confirm${count_id}" id=${count_id}>
         <h4>${Todo_title}</h4>
         <p>${Todo_content}</p>
         <i class="fa fa-trash delete_trash" id=${count_id}></i>
       </div>
     </div>
  `)

}