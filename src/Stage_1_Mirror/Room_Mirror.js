document.getElementById("face").addEventListener("click",Face_pop)
function Face_pop(){
    window.open("../../img/Room_Mirror/Room_Mirror_Face.jpeg","pop",
        "width=400,height=500,history=no,resizable=no,status=no,scrollbars=no,menubar=no,left=500,top=150");
}

document.getElementById("View_Lock_1").addEventListener("click",Lock_pop)
function Lock_pop(){
    window.open("Room_Mirror_Lock.html","pop",
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

let hammer = 1;
let State = 0;
document.getElementById("Destroy").addEventListener("click",destroy);
function destroy(){
    if(hammer === 1 && State === 0){
        document.getElementById("Back_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_back_destroying.jpeg";
        State = 1;
    }
    else if(hammer === 1 && State === 1){
        document.getElementById("Back_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_back_destroyed.jpeg";
        State = 2;
    }
    else if(State === 2){
        window.open("../../img/Room_Mirror/Room_Mirror_liver.jpeg","pop",
            "width=400,height=500,history=no,resizable=no,status=no,scrollbars=no,menubar=no,left=500,top=150");
    }
}