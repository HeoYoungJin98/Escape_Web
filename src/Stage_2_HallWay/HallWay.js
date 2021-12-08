$(document).ready(function(){
  $("#View_Elevator").on("click",function(){
    alert("엘리베이터의 줄이 보인다.");
  });

  $("#View_Button").on("click",function(){
    alert("엘리베이터의 버튼이 부서져 있다. 사용할 수 없을 듯하다.");
  });

  $("#Enter_Room").on("click",function(){
    window.location = "../Stage_3_Chess/Chess.html";
  });
})
