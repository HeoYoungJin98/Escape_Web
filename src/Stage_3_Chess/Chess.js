$(document).ready(function(){
  alert("알 수 없는 방에 또 들어왔다. 여긴 대체 어디인 걸까...");

  $("#window").on("click",function(){
    alert("굳게 닫혀 열리지 않는 문이다. 첫 방처럼 암호가 있는 걸까?");
  });

  $("#Pawn").on("dragstart", function(evt){
    evt.originalEvent.dataTransfer.setData('Text',evt.target.id);
  });
  $("#King").on("dragstart", function(evt){
    evt.originalEvent.dataTransfer.setData('Text',evt.target.id);
  });
  $("#Knight").on("dragstart", function(evt){
    evt.originalEvent.dataTransfer.setData('Text',evt.target.id);
  });
  $("#Bishop").on("dragstart", function(evt){
    evt.originalEvent.dataTransfer.setData('Text',evt.target.id);
  });
  $("#Rook").on("dragstart", function(evt){
    evt.originalEvent.dataTransfer.setData('Text',evt.target.id);
  });
  $("#Queen").on("dragstart", function(evt){
    evt.originalEvent.dataTransfer.setData('Text',evt.target.id);
  });

  $("td").on("dragover", function(e){
    e.preventDefault();
  });

  let Answer_Array = [0,0,0,0,0,0,0,0,0,0,0,0];

  $("td").on("drop",function(e){
    e.preventDefault();
    let text = e.target.toString();
    let temp = JSON.stringify(text);
    let temp2 = JSON.parse(temp);
    let id = e.target.id;
    let regex = /[^0-9]/g;
    let result = id.replace(regex,"");
    if(temp2.indexOf("Image") == -1){
      let data = e.originalEvent.dataTransfer.getData("text");//data는 체스말의 id
      let img = document.getElementById(data);
      img.setAttribute("width","90px");
      img.setAttribute("height","60px");
      e.target.appendChild(img);
      Answer_Array[result] = data;
      check();
    }
  });

  function check(){
    if(Answer_Array[1] == "Bishop" && Answer_Array[2] == "King" && Answer_Array[3] == "Knight" && Answer_Array[7] == "Pawn"
        && Answer_Array[9] == "Queen" && Answer_Array[10] == "Rook"){
          alert("큰 소리와 함께 문이 열렸다.");
          $("#Chess_Modal").css("display","none");
          $("#Chess_Clear").css("display","flex");
          $("#Chess_default").css("display","flex");
        };
  }

  $("#Chess_Modal").on("click",function(){
    $(this).css("display","none");
  });

  $("#View_Chess").on("click",function(){
    $("#Chess_Modal").css("display","flex");
  });

  $("#Next_Room").on("click",function(){
    window.location = "../Success_Page/Success_page.html";
  })
})
