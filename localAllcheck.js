//
function AllcheckTrue(){
	let localStoNum = localStorage.length;

	for(var i = 0; i < localStoNum; i++){
		if(localStoNum != 0){
			let localKey = localStorage.key(i);
			let GetLocalVal = JSON.parse(localStorage.getItem(localKey));
			let jsonVal = {title:GetLocalVal["title"],content:GetLocalVal["content"],
		                   id:GetLocalVal["id"],check_delete:true};
			localStorage.setItem(localKey,JSON.stringify(jsonVal));
		}
	}
}

function AllcheckFalse(){
	let localStoNum = localStorage.length;

	for(var i = 0; i < localStoNum; i++){
		if(localStoNum != 0){
			let localKey = localStorage.key(i);
			let GetLocalVal = JSON.parse(localStorage.getItem(localKey));
			let jsonVal = {title:GetLocalVal["title"],content:GetLocalVal["content"],
		                   id:GetLocalVal["id"],check_delete:false};
		    localStorage.setItem(localKey,JSON.stringify(jsonVal));               
		}
	}
}

