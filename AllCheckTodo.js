$(function(){
  AllCheckTodo();

  AlldeleteNone();

  //ゴミ箱アイコン押下
  deleteTrash();
  
  //clearCount押下
  deleteTodoButton();

  //全てのTodoがチェックされていた場合
  AllcheckSearch();
})

function AllCheckTodo(){
  let check_box = $(".checkbox_all");

  if(localStorage.length != 0 && check_box.length == 0){
    $("#todo_all_check").append(`
       <input type="checkbox" class="checkbox_all">
        <p class="p_all_delete">All delete</p>
    `)
  }

  AllDeleteClick(check_box);
}

function AddCheckTodo(){
  let check_box = $(".checkbox_all");

  if(check_box.length == 0){
    $("#todo_all_check").append(`
       <input type="checkbox" class="checkbox_all">
        <p class="p_all_delete">All delete</p>
    `)
  }

  AllDeleteClick(check_box);
}


function AllDeleteClick(check_box){
  $(check_box).off("click");
  $(check_box).on("click",function(){
    let check_delete_confirm = $(`input[class^="checkbox_delete_confirm"]`);

    let delete_trash = $(".delete_trash");
    let card_title = $(".card_content").find("h4");

    let card_content = $(".card_content").find("p");

    if($(this).prop("checked")){
      check_delete_confirm.prop("checked",true);
      check_delete_confirm.attr("checked",true);

      delete_trash.css("display","block");
      card_title.addClass("change_decoration");
      card_content.addClass("change_decoration");
      
      //選択されたTodoの数を再計算
      checkTodoNum();

      //削除ボタン
      searchCheckCount();

      AllcheckTrue();

      //ゴミ箱アイコン押下
      deleteTrash();


      //clearCount押下
      deleteTodoButton();

    } else if(!$(this).prop("checked")){
      check_delete_confirm.prop("checked",false);
      check_delete_confirm.attr("checked",false);
      delete_trash.css("display","none");
      card_title.removeClass("change_decoration");
      card_content.removeClass("change_decoration");

      //選択されたTodoの数を再計算
      checkTodoNum();

      //削除ボタン
      searchCheckCount();

      AllcheckFalse();
    }
  })
}

function AlldeleteNone(){
  let localStorage_count = localStorage.length;

  if(localStorage_count == 0){
     $("#todo_all_check").empty("");
  }
}

