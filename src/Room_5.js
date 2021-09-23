function First_compare(){
    let value = document.getElementById('answer').value;
    if(value == "airplane"||value == "비행기"){
        document.getElementById("Room_5_rainbow").style.visibility = "visible";
        document.getElementById("buttons").style.visibility = "visible";
        document.getElementById("final").style.visibility = "visible";
        document.getElementById("Room_5_airplane").style.display = "none";
        document.getElementById("Password").style.visibility = "visible";
    }
}

const Final_answer = [4,2,6,1,3,5,7];
let Input_answer = new Array();

function change_1(){
    document.getElementById("button_1").style.backgroundColor = "gray";
    Input_answer.push(1);
}

function change_2(){
    document.getElementById("button_2").style.backgroundColor = "gray";
    Input_answer.push(2);
}

function change_3(){
    document.getElementById("button_3").style.backgroundColor = "gray";
    Input_answer.push(3);
}

function change_4(){
    document.getElementById("button_4").style.backgroundColor = "gray";
    Input_answer.push(4);
}

function change_5(){
    document.getElementById("button_5").style.backgroundColor = "gray";
    Input_answer.push(5);
}

function change_6(){
    document.getElementById("button_6").style.backgroundColor = "gray";
    Input_answer.push(6);
}

function change_7(){
    document.getElementById("button_7").style.backgroundColor = "gray";
    Input_answer.push(7);
}

function Reset(){
    Input_answer.length = 0;
    document.getElementById("button_1").style.backgroundColor = "transparent";
    document.getElementById("button_2").style.backgroundColor = "transparent";
    document.getElementById("button_3").style.backgroundColor = "transparent";
    document.getElementById("button_4").style.backgroundColor = "transparent";
    document.getElementById("button_5").style.backgroundColor = "transparent";
    document.getElementById("button_6").style.backgroundColor = "transparent";
    document.getElementById("button_7").style.backgroundColor = "transparent";
}

function Escape(){
    let result = 1;
    for(let x = 0; x<7; x++){
        if(Final_answer[x] != Input_answer[x]){
            result = 0;
        }
    }
    if(result == 0){
        Input_answer.length = 0;
        document.getElementById("buttons").style.backgroundColor = "transparent";
    }else if(result == 1){
        document.getElementById("Escape_button").style.visibility = "visible";
    }
}