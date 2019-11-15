function TodoList(){
  let Sort_Todolist = [];
  for(var i = 0; i < localStorage.length; i++){
    
    for(var j = 0; j < localStorage.length; j++){
      let local_storage_key = localStorage.key(j);
       let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));

       if(i == local_storage_val["id"]){
         Sort_Todolist.push(local_storage_val);
       }
       
    }
  }

  for(var list in Sort_Todolist){

    let Todo_title = Sort_Todolist[list]["title"];
    let Todo_content = Sort_Todolist[list]["content"];
    let count_id = Sort_Todolist[list]["id"];

    TodoBodyAppend(count_id,Todo_title,Todo_content);
  }
}

function Todo_count(){
  $(".Todo_count").empty();

  if(localStorage.length != 0){
    let localStorage_length = localStorage.length;
     $(".Todo_count").append(`
      <h3 class="Todos_num">Todoの数</h3>
      <h3>${localStorage_length}</h3>
    `)
  }
}
