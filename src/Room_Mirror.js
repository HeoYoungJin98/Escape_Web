document.getElementById("face").addEventListener("click",Face_pop)
function Face_pop(){
    window.open("../img/Room_Mirror/Room_Mirror_Face.jpeg","pop",
        "width=400,height=500,history=no,resizable=no,status=no,scrollbars=no,menubar=no,left=500,top=150");
}

let Front = document.getElementsByClassName("View_Front");
for(let i = 0; i<Front.length; i++){
    Front[i].addEventListener("click",View_Front);
}
//class 별로 함수 설정

let Left = document.getElementsByClassName("View_Left");
for(let i = 0; i<Left.length; i++){
    Left[i].addEventListener("click",View_Left);
}

let Right = document.getElementsByClassName("View_Right");
for(let i = 0; i<Right.length; i++){
    Right[i].addEventListener("click",View_Right);
}

let Back = document.getElementsByClassName("View_Back");
for(let i = 0; i<Back.length; i++){
    Back[i].addEventListener("click",View_Back);
}

function View_Left(){
    document.getElementById("Front_Wall").style.visibility = "hidden";//정면 비활성화
    document.getElementById("Left_Wall").style.visibility = "visible";//왼쪽 활성화
    document.getElementById("Right_Wall").style.visibility = "hidden";//우측 비활성화
    document.getElementById("Back_Wall").style.visibility = "hidden";//후면 비활성화
}

function View_Front(){
    document.getElementById("Front_Wall").style.visibility = "visible";//정면 활성화
    document.getElementById("Left_Wall").style.visibility = "hidden";//왼쪽 비활성화
    document.getElementById("Right_Wall").style.visibility = "hidden";//우측 비활성화
    document.getElementById("Back_Wall").style.visibility = "hidden";//후면 비활성화
}

function View_Right(){
    document.getElementById("Front_Wall").style.visibility = "hidden";//정면 비활성화
    document.getElementById("Left_Wall").style.visibility = "hidden";//왼쪽 비활성화
    document.getElementById("Right_Wall").style.visibility = "visible";//우측 활성화
    document.getElementById("Back_Wall").style.visibility = "hidden";//후면 비활성화
}

function View_Back(){
    document.getElementById("Front_Wall").style.visibility = "hidden";//정면 비활성화
    document.getElementById("Left_Wall").style.visibility = "hidden";//왼쪽 비활성화
    document.getElementById("Right_Wall").style.visibility = "hidden";//우측 활성화
    document.getElementById("Back_Wall").style.visibility = "visible";//후면 비활성화
}