function clickcheck(){
  $(`input[class^="checkbox_delete_confirm"]`).off("click");
  $(`input[class^="checkbox_delete_confirm"]`).on("click",function(){
    let find_this = $(this);
    let find_h4_class = find_this.parent().find("h4");
    let find_p_class = find_this.parent().find("p");
    let find_deleteNone_class = find_this.parent().find(".delete_trash");
    let check_id = find_this.attr("id");

    AllcheckSearch();
    if(find_this.prop("checked")){

      find_h4_class.addClass("change_decoration");
      find_p_class.addClass("change_decoration");
      find_deleteNone_class.css("display","block");
      // $(this).parent().find("h4").addClass("change_decoration");
      // $(this).parent().find("p").addClass("change_decoration");
      find_this.attr("checked",true);
      // let check_id = $(this).attr("id");
      
      for(var i = 0; i < localStorage.length; i++){
        let local_storage_key = localStorage.key(i);

        let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));

        if(check_id == local_storage_val["id"]){
          //local_storage_val["check_delete"] == true;

          let jsonVal = {title:local_storage_val["title"],content:local_storage_val["content"],
          id:local_storage_val["id"],
          check_delete:true};

          localStorage.setItem(local_storage_key, JSON.stringify(jsonVal));

          //Todoの数を再計算
          checkTodoNum();
        }
      }

    } else if(!find_this.prop("checked")){
      find_h4_class.removeClass("change_decoration");
      find_p_class.removeClass("change_decoration");
      find_deleteNone_class.css("display","none");

      find_this.attr("checked",false);
      
       AllcheckSearch();
      // let check_id = $(this).attr("id");
      
      for(var i = 0; i < localStorage.length; i++){
        let local_storage_key = localStorage.key(i);

        let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));

        if(check_id == local_storage_val["id"]){
          
          //local_storage_val["check_delete"] == true;

          let jsonVal = {title:local_storage_val["title"],content:local_storage_val["content"],
          id:local_storage_val["id"],
          check_delete:false};

          localStorage.setItem(local_storage_key, JSON.stringify(jsonVal));

          //Todoの数を再計算
          checkTodoNum();
        }
      }
    }

    searchCheckCount();

    //ゴミ箱アイコン押下
    deleteTrash();

    //clearCount押下
    deleteTodoButton();

    //All delete check
    AllcheckSearch();
  })
}

//削除する親要素の検索
function search_delete_todo(id){
  let same_id = id;

  let find_parensts = $(`div[id~="card_body${same_id}"]`);
  return find_parensts;
}

//クリックしたTodoを削除する
function deleteTodo(id){
  let check_id = id;
  let localStorage_num = localStorage.length;

  let deleteLocal_array = [];

  for(var i = 0; i < localStorage_num; i++){
    let local_storage_key = localStorage.key(i);
    
    let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));

    let local_storage_id = local_storage_val["id"];

    if(check_id == local_storage_id){
      deleteLocal_array.push(local_storage_key);
    }
  }

  for(var i = 0; i < deleteLocal_array.length; i++){
    localStorage.removeItem(deleteLocal_array[i]);
  }
}

