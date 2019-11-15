function searchCheckCount(){
  $(".check_count").empty();
  
  let find_input = $(`div[id^="card_body"]`).find(`input[checked="checked"]`);

  let find_input_length = find_input.length; 
  
  if(find_input_length != 0){
    $(".check_count").append(`
       <button type="submit" class="btn btn-primary delete_todo_button">clearCount: ${find_input_length}削除</button>
    `
    )
  }
}


