function deleteTodoButton(){
	$(".delete_todo_button").off("click");
	$(".delete_todo_button").on("click",function(){
		deleteTodoButtonClick();
	})
}

function deleteTodoButtonClick(){
	deleteCheckTodo();
	//localStorageから削除
	deleteLocal();
	//Todoリストの数
	Todo_count();

	//Todoがない場合
	AlldeleteNone();
}