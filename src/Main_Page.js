$(document).ready(function(){
  $("#Stage_1").on("click",function(){//테마 1 버튼 클릭 시 테마1 방으로 이동
    location.href = "Stage_1_Mirror/Room_Mirror.html";
    alert("집으로 돌아가던 길, 의문의 사람들이 날 차에 납치했다.");
  });
  $("#Stage_2").on("click",function(){
    location.href = "Stage_2_HallWay/HallWay.html";
  });
  $("#Stage_3").on("click",function(){
    location.href = "Stage_3_Chess/Chess.html";
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
