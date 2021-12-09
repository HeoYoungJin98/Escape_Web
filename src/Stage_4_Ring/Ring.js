$(document).ready(function(){
  alert("계단을 따라 내려오니 또 다른 방에 도착했다. 다른 방과는 다르게 문이 열려있다.");
  $("#Next_Room").on("click",function(){

  });

  $("#Ring").on("click",function(){
    $("#Ring_Modal").css("display","flex");
    $("#Main_Img").css("filter","brightness(40%)");
  });

  $("#Ring_Modal_Img").on("click",function(){
    $("#Ring_Modal").css("display","none");
    $("#Main_Img").css("filter","brightness(100%)");
  })

  $("#Post").on("click",function(){
    $("#Post_Modal").css("display","flex");
    $("#Main_Img").css("filter","brightness(40%)");
    alert("이곳의 위치가 적힌 우편이 놓여있다.");
  });

  $("#Post_Modal_Img").on("click",function(){
    $("#Post_Modal_Img").css("display","none");
    $("#Main_Img").css("filter","brightness(100%)");
  });
});
