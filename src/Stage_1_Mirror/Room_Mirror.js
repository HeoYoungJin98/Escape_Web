$(document).ready(function(){
  alert("정신을 차려보니 이상한 방에 갇혀있다. 내가 왜 여기 있는 거지?");
  alert("시간이 얼마나 지난걸까 배가 무척이나 고프다.");
})
/* ---------------------View Face--------------------- */
document.getElementById("face").addEventListener("click",Face_pop);
function Face_pop(){
    document.getElementById("Face_modal").style.display = "flex";
    $("#Front_Wall_IMG").css("filter","brightness(40%)");
    alert("섬뜩하게 생긴 얼굴이다.");
}
document.getElementById("Face_modal").addEventListener("click",Face_Remove);
function Face_Remove(){
    document.getElementById("Face_modal").style.display = "none";
    $("#Front_Wall_IMG").css("filter","brightness(100%)");
}
/* ---------------------View Face--------------------- */
/* ---------------------Room Change--------------------- */
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
/* ---------------------Room Change--------------------- */
/* ---------------------Room_Left View Post--------------------- */
document.getElementById("View_Post").addEventListener("click",Post_pop);
function Post_pop(){
    document.getElementById("Post_modal").style.display = "flex";
    $("#Left_Wall_IMG").css("filter","brightness(40%)");
    alert("이상한 문자들이 적힌 포스트잇이다.");
}
document.getElementById("Post_modal").addEventListener("click",Post_Remove);
function Post_Remove(){
    document.getElementById("Post_modal").style.display = "none";
    $("#Left_Wall_IMG").css("filter","brightness(100%)");
}
/* ---------------------Room_Left View Post--------------------- */
/* ---------------------Room_Back Destroy Picture Use Hammer--------------------- */
let hammer = 0;
let State = 0;
document.getElementById("Destroy").addEventListener("click",destroy);
function destroy(){
    if(hammer === 0){
      alert("단단한 물건으로 내리치면 깰 수 있을 듯한 유리이다.");
    }
    if(hammer === 1 && State === 0){
        document.getElementById("Back_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_back_destroying.jpeg";
        State = 1;
    }
    else if(hammer === 1 && State === 1){
        document.getElementById("Back_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_back_destroyed.jpeg";
        State = 2;
    }
    else if(State === 2){
        document.getElementById("destroy_modal").style.display = "flex";
        $("#Back_Wall_IMG").css("filter","brightness(40%)");
        alert("강가에 비친 풍경이다. 무엇을 의미하는 걸까");
        document.getElementById("destroy_modal").addEventListener("click",Face_Remove);
        function Face_Remove(){
            document.getElementById("destroy_modal").style.display = "none";
            $("#Back_Wall_IMG").css("filter","brightness(100%)");
        }
    }
}
/* ---------------------Room_Back Destroy Picture Use Hammer--------------------- */
/* ---------------------DoorLock--------------------- */
let Answer_Array = [4,4,6,9]
let Input_Array = [0,0,0,0];
let Previous_display = '';
let Present_display = '';
document.getElementById("View_Lock_1").addEventListener("click",DoorLock_pop);
function DoorLock_pop(){
    document.getElementById("DoorLock_modal").style.display = "flex";
    Input_Array.length = 0;
    alert("도어락 하단에 작게 *=clear 0=OK #=remove 라고 적혀 있다.");
    $("#Front_Wall_IMG").css("filter","brightness(40%)");
}
document.getElementById("DoorLock").addEventListener("click",DoorLock_Remove);
function DoorLock_Remove(){
    $("#Front_Wall_IMG").css("filter","brightness(100%)");
    document.getElementById("DoorLock_modal").style.display = "none";
    Input_Array.length = 0;
    document.getElementById("display").innerHTML = "";
    Present_display = "";
}

let Click = document.getElementsByClassName("btn");
for(let i = 0; i<Click.length; i++){
    Click[i].addEventListener("click",function(){Input_Value(this.value)});
}

function Input_Value(x){
    if(Input_Array.length>=4){
        Input_Array.length = 0;
        Present_display = "";
        Previous_display = "";
        document.getElementById("display").innerHTML = Present_display;
    }else{
        Input_Array.push(x);
        Previous_display = Present_display;
        Present_display += String(x);
        document.getElementById("display").innerHTML = Present_display;
    }
}
document.getElementById("clear").addEventListener("click",Clear);
function Clear(){
    Input_Array.length = 0;
    Present_display = "";
    Previous_display = "";
    document.getElementById("display").innerHTML = Present_display;
}
//배열의 길이를 0으로 설정시 값이 초기화된다. 그 후 공백 출력
document.getElementById("Cancel").addEventListener("click",Cancel);
function Cancel(){
    let New_display = '';
    Input_Array.pop();
    for(let i=0; i<Input_Array.length; i++){
        New_display += Input_Array[i];
    }
    Present_display = New_display;
    document.getElementById("display").innerHTML = Present_display;
}

document.getElementById("OK").addEventListener("click",Test);
function Test(){
    let result = 1;
    for(let x = 0; x < Answer_Array.length; x++){
        if(Answer_Array[x].toString() === Input_Array[x].toString()){
            result = 1;
        }else{
            Input_Array.length = 0;
            Present_display = "";
            Previous_display = "";
            document.getElementById("display").innerHTML = Present_display;
            result = 0;
            break;
        }
    }
    if(result === 1){
        document.getElementById("DoorLock_modal").style.display = "none";
        document.getElementById("Front_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_Door_Open.jpeg";
        document.getElementById("View_Lock_1").style.visibility = "hidden";
        document.getElementById("face").style.visibility = "hidden";
        document.getElementById("Escape").style.visibility = "visible";
        $("#Front_Wall_IMG").css("filter","brightness(100%)");
    }
}
/* ---------------------DoorLock--------------------- */
/* ---------------------SafeLock--------------------- */
let Safe_Answer_Array = [2,4,9,3];
let Safe_Input_Array = [0,0,0,0];
let Safe_Previous_display = '';
let Safe_Present_display = '';
document.getElementById("View_Lock_2").addEventListener("click",Safe_Lock_pop);
function Safe_Lock_pop(){
    document.getElementById("SafeLock_modal").style.display = "flex";
    Safe_Input_Array.length = 0;
}
document.getElementById("SafeLock").addEventListener("click",Safe_Lock_Remove);
function Safe_Lock_Remove(){
    document.getElementById("SafeLock_modal").style.display = "none";
    Safe_Input_Array.length = 0;
    Safe_Present_display = "";
}

let Safe_Click = document.getElementsByClassName("Safe_btn");
for(let i = 0; i<Safe_Click.length; i++){
    Safe_Click[i].addEventListener("click",function(){Safe_Input_Value(this.value)});
}

function Safe_Input_Value(x){
    if(Safe_Input_Array.length >= 4){
        let result = 1;
        for(let x = 0; x < Safe_Answer_Array.length; x++){
            if(Safe_Answer_Array[x].toString() === Safe_Input_Array[x].toString()){
                result = 1;
            }else{
                Safe_Input_Array.length = 0;
                Safe_Present_display = "";
                Safe_Previous_display = "";
                document.getElementById("display_Safe").innerHTML = Safe_Present_display;
                result = 0;
                break;
            }
        }
        if(result === 1){
            document.getElementById("SafeLock_modal").style.display = "none";
            document.getElementById("Left_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_Safe_Open.jpeg";
            document.getElementById("View_Post").style.visibility = "hidden";
            document.getElementById("View_Lock_2").style.visibility = "hidden";
            document.getElementById("Get_hammer").style.visibility = "visible";
            alert("금고를 열자 망치가 보인다. 어디에 쓸 수 있을까...");
        }
    }else{
        Safe_Input_Array.push(x);
        Safe_Previous_display = Safe_Present_display;
        Safe_Present_display += String(x);
        document.getElementById("display_Safe").innerHTML = Safe_Present_display;
    }
}
/* ---------------------SafeLock--------------------- */
/* ---------------------Get_Hammer---------------------*/
document.getElementById("Get_hammer").addEventListener("click",Get_Hammer)
function Get_Hammer(){
    document.getElementById("Left_Wall_IMG").src = "../../img/Room_Mirror/Room_Mirror_Safe_Get.jpeg";
    document.getElementById("Get_hammer").style.visibility = "hidden";
    hammer = 1;
}
/* ---------------------Get_Hammer---------------------*/
/* ---------------------Escape---------------------*/
document.getElementById("Escape").addEventListener("click", newPage)
function newPage() {
    window.location = "../Stage_2_HallWay/HallWay.html";
}
/* ---------------------Escape---------------------*/
