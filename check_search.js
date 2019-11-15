function checkSearch(){
  for(var i = 0; i < localStorage.length; i++){
    let local_storage_key = localStorage.key(i);
    
    let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));

    if(local_storage_val["check_delete"] == true){
      let num = local_storage_val["id"];
      
      let find_h4 = $(`div[id~="card_body${num}"]`).find("h4");
      let find_p = $(`div[id~="card_body${num}"]`).find("p");
      let find_input = $(`div[id~="card_body${num}"]`).find("input");
      let find_deleteTrash = $(`div[id~="card_body${num}"]`).find(".delete_trash");

      find_h4.addClass("change_decoration");
      find_p.addClass("change_decoration");
      find_input.attr("checked",true);
      find_deleteTrash.css("display","block");

      //チェックボックスにチェックされているものを確認
      searchCheckCount();
    } 
  }
}
