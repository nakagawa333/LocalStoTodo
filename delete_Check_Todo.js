function deleteCheckTodo(){
  let find_check_input = $(`div[id^="card_body"]`).find(`input[checked="checked"]`);

  for(var i = 0; i < find_check_input.length; i++){
    let num = find_check_input.eq(i).attr("id");
    
    let find_check_parents = $(`div[id~="card_body${num}"]`);

    find_check_parents.remove();

    $(".check_count").empty();
    
  }
}

function deleteLocal(){
  let local_delete_list = [];

  let localStorage_num = localStorage.length;

  for(var i = 0; i < localStorage_num; i++){
    let local_storage_key = localStorage.key(i);
    
    let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));
    
    if(local_storage_val["check_delete"] == true){
        local_delete_list.push(local_storage_key);
    }

  }
  for(var list in local_delete_list){
    localStorage.removeItem(local_delete_list[list]);
  }

  
}
