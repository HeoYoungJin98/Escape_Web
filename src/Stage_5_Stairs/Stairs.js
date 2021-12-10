$(document).ready(function(){
  //alert("복도였던 곳이 계단이 되었다. 무슨 건물인 걸까?");
  let count = 0;
  $("#Up").on("click",function(){
    count += 1;
    if(count == 1){
      alert("계단을 따라 계속 올라가보자.");
    }else if(count == 2){
      alert("계단이 계속 이어져 있다. 건물의 규모가 어느 정도일까?");
    }else if(count == 4){
      $("#Main").css("display","none");
      $("#arrive").css("display","flex");
    }
  });

  $("#Elevator_btn").on("click",function(){
    alert("부서진 엘리베이터 버튼이다. 이곳에서는 누를 수 없을 듯하다.");
  });

  let E_count = 0;
  $("#Elevator").on("click",function(){
    E_count += 1;
    if(E_count == 1){
      alert("엘리베이터가 동작하는 소리가 들린다.");
    }else if(E_count == 2){
      alert("띵!");
      $("#Main").css("display","none");
      $("#Deliver").css("display","flex");
    }
  })

  $("#Delieveryman").on("click",function(){
    alert("배달왔습니다! 맛있게 드세요!");
    alert("일단 밥부터 먹고 봐야겠다.");
    window.location = "../Success_Page/Success_page.html";
  })
})
