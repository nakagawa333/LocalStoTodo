function deleteTrash(){
	$(".delete_trash").off("click");
	$(".delete_trash").on("click",function(){
		let id = $(this).attr("id");

		deleteTrashClick(id);

		return id;
	})
}

function deleteTrashClick(id){
  let delete_todo = search_delete_todo(id);
  
  delete_todo.remove();

  deleteTodo(id);

  Todo_count();
  searchCheckCount();

  //Todoがない場合
  AlldeleteNone();
}