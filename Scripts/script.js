function resposta() {
  let inputA = document.getElementById("itemA").value;
  let inputB = document.getElementById("itemB").value;
  let inputC = document.getElementById("itemC").value;

  let delta = inputB * inputB - 4 * inputA * inputC; //Calculo do discriminante

  document.getElementById("res").innerHTML = delta;
}

function limpar() {
    document.getElementById("res").innerHTML = "Resultado";
    itemA.value = " ";
    itemB.value = " ";
    itemC.value = " ";
}
