const Answer_Array = [4,4,6,9]
let Input_Array = new Array();
let Previous_display = '';
let Present_display = '';

function Display(x){
    document.getElementById('display').innerHTML = Present_display;
}

function Input_Value(x){
     Input_Array.push(x);
     Previous_display = Present_display;
     Present_display += String(x);
     Display(Present_display);
}

function Clear(){
    Input_Array.length = 0;
    document.getElementById("Result").innerHTML = "&nbsp;";
}
//배열의 길이를 0으로 설정시 값이 초기화된다. 그 후 공백 출력

function Cancel(){
    Input_Array.pop();
    Display(Previous_display);
}


