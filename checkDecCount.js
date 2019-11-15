$(function(){
  checkTodoNum();
})



function checkTodoNum(){
  let local_index = localStorage.length;

  let Search_checkbox = $(".card_content").find(`input[checked="checked"]`).length;

  let Subtracted = local_index - Search_checkbox;
  let String_Subtracted = toString(Subtracted);

  let Todo_counts = $(".Todo_count h3:nth-child(2)").text(Subtracted);
  
}