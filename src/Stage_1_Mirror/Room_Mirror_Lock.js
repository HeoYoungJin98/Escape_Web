const Answer_Array = [4,4,6,9]
let Input_Array = new Array();
let Previous_display = '';
let Present_display = '';

let Click = document.getElementsByClassName("btn");
for(let i = 0; i<Click.length; i++){
    Click[i].addEventListener("click",function(){Input_Value(this.value)});
    console.log(Click[i]);
}
document.getElementById("clear").addEventListener("click",Clear);
document.getElementById("Cancel").addEventListener("click",Cancel);
document.getElementById("OK").addEventListener("click",Test);


function Input_Value(x){
     Input_Array.push(x);
     Previous_display = Present_display;
     Present_display += String(x);
     document.getElementById("display").innerHTML = Present_display;
}

function Clear(){
    Input_Array.length = 0;
    Present_display = "";
    Previous_display = "";
    document.getElementById("display").innerHTML = Present_display;
}
//배열의 길이를 0으로 설정시 값이 초기화된다. 그 후 공백 출력

function Cancel(){
    Input_Array.pop();
    Present_display = Previous_display;
    document.getElementById("display").innerHTML = Present_display;
}

function Test(){
    let result = 1;
    for(let x = 0; x<7; x++){
        if(Answer_Array[x] != Input_Array[x]){
            result = 0;
        }
    }
}
