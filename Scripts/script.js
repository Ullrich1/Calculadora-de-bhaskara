let inputA = document.getElementById("itemA").value;
let inputB = document.getElementById("itemB").value;
let inputC = document.getElementById("itemC").value;


let delta = (inputB*inputB) - (4 * inputA * inputC);

function clique(){
    document.getElementById("res").innerHTML = delta;
}