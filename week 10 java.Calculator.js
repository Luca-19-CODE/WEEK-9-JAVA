let screen = documant.getElementById('result').value;

function display(newValue){
document.getElementByIdId('result').value +=
newValue;
}

function clearscreen(){
document.getElementById('result').value = "";
}

function calculate(){
let sum = document.getElementById('result').value
let answer = eval(sum);
document.getElementById('result').value = answer;
}   

