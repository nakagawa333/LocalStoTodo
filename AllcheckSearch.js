/*
  Todoリストのチェックボックスが全て選択されていた場合
*/

function AllcheckSearch(){
	let count = 0;
	let localStorageNum = localStorage.length;
	for(var i = 0; i < localStorageNum; i++){
		let local_storage_key = localStorage.key(i);


		let local_storage_val = JSON.parse(localStorage.getItem(local_storage_key));

		if(local_storage_val["check_delete"] == true){
			count += 1
		}

	}

	let checkbox_all = $(".checkbox_all");
	//全てチェックボックスにチェックされていた場合
	if(count === localStorageNum){
		checkbox_all.prop("checked",true);
	} else if(count !== localStorageNum){
		checkbox_all.prop("checked",false);
	}
	
}