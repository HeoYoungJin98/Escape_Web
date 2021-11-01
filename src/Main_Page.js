$(document).ready(function(){
  $("#Theme_1").on("click",function(){//테마 1 버튼 클릭 시 테마1 방으로 이동
    location.href = "Stage_1_Mirror/Room_Mirror.html";
  });
  $("#Notice_button").on("click",function(){
    console.log("Notice");
  });
  $("#Event_button").on("click",function(){
    console.log("Event");
  });
  $("#Free_button").on("click",function(){
    console.log("Free");
  });
});
