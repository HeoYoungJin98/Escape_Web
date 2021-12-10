$(document).ready(function(){
  alert("계단을 따라 내려오니 또 다른 방에 도착했다. 다른 방과는 다르게 문이 열려있다.");
  alert("체력적으로 한계가 온 것 같다. 시간이 얼마나 흐른 걸까");
  let Answer_1 = [0,4,2,5,4,4,0,9,0,9];
  let Answer_2 = [1,1,2];
  let Input_arr = [];

  $("#Ring").on("click",function(){
    $("#Ring_Modal").css("display","flex");
    $("#Main_Img").css("filter","brightness(40%)");
  });

  $("#Ring_Modal_Img").on("click",function(){
    $("#Ring_Modal").css("display","none");
    $("#Main_Img").css("filter","brightness(100%)");
    Input_arr.length = 0;
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

  $("#Dish").on("click",function(){
    alert("누군가 먹고 난 그릇이다. 사람이 있었던 걸까?");
  });

  $("#leaflet").on("click",function(){
    alert("전단지가 놓여있다.");
    $("#leaflet_Modal_Img").css("display","flex");
    $("#HallWay_Img").css("filter","brightness(40%)");
  });

  $("#leaflet_Modal_Img").on("click",function(){
    $("#leaflet_Modal_Img").css("display","none");
    $("#HallWay_Img").css("filter","brightness(100%)");
  });

  $("#GotoMain").on("click",function(){
    $("#Ring_HallWay").css("display","none");
    $("#Ring_main").css("display","flex");
  });

  let Is_Correct = 0;
  $(".btn").on("click",function(){
    Input_arr.push($(this).val());
    if(Input_arr.length == 10){
      Check_1();
    }else if(Input_arr.length == 3){
      Check_2();
    };

    if(Input_arr.length > 10){
      $("#Ring_Modal").css("display","none");
      $("#Main_Img").css("filter","brightness(100%)");
      Input_arr.length = 0;
      alert("전화가 걸리지 않는다.");
    };
  });

  function Check_1(){
    for(let i = 0; i<10; i++){
      if(Answer_1[i].toString() == Input_arr[i].toString()){
        Is_Correct = 1;
      }else{
        Is_Correct = 0;
      };
    };

    if(Is_Correct == 1){
      alert("큰 소리와 함께 건물이 흔들린다. 무슨 일이 일어난 거지?");
      $("#Ring_Modal").css("display","none");
      $("#Main_Img").css("filter","brightness(100%)");
    }
  };

  function Check_2(){
    for(let i = 0; i<3; i++){
      if(Answer_2[i].toString() == Input_arr[i].toString()){
        Is_Correct = 2;
      }else{
        Is_Correct = 0;
        break;
      };
    };

    if(Is_Correct == 2){
        alert("사이렌 소리가 들린다. 경찰들이 도착한 것 같다.");
        alert("무슨 이유로 여기에 끌려온 건지는 모르겠다. 실험을 하는 걸까?");
        alert("머릿속이 복잡하지만 상관없다 드디어 이 지긋지긋한 곳에서 탈출이다!");
        $("#Ring_Modal").css("display","none");
        $("#Ring_main").css("filter","brightness(100%)");
    }
  };

  $("#Next_Room").on("click",function(){
    if(Is_Correct == 0){
      $("#Ring_main").css("display","none");
      $("#Ring_HallWay").css("display","flex");
    }else if(Is_Correct == 1){
      window.location = "../Stage_5_Stairs/Stairs.html";
    }else if(Is_Correct == 2){
      window.location = "../Success_Page/Success_2.html";
    }
  });
});
