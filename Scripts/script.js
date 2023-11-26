
function respostaBhask() {
  let A = document.getElementById("itemA").value;
  let B = document.getElementById("itemB").value;
  let C = document.getElementById("itemC").value;

  let delta = B * B - 4 * A * C; //Calculo do discriminante

  document.getElementById("resDelta").innerHTML = delta; //resultado na janela delta

  //calculo bhaskara dois resultados (final)
  document.getElementById("b").innerHTML = B;
  document.getElementById("a").innerHTML = A;

  let x1 = (Number(-B) + Number(Math.sqrt(delta))) / 2 * Number(A); //Calc da Bhaskara +
  let x2 = (Number(-B) - Number(Math.sqrt(delta))) / 2 * Number(A); //Calc da Bhaskara -

  document.getElementById("resBhask1").innerHTML = x1; //resultado na janela bhaskara
  document.getElementById("resBhask2").innerHTML = x2; //resultado na janela bhaskara

  resBhask1.innerHTML = x1.toFixed(1); //arrendonda resultados decimais
  resBhask2.innerHTML = x2.toFixed(1); //arrendonda resultados decimais
}

function limparPaineis() {
  document.getElementById("resDelta").innerHTML = "Resultado";
  document.getElementById("resBhask1").innerHTML = "Resultado";
  document.getElementById("resBhask2").innerHTML = "Resultado";
  document.getElementById("a").innerHTML = "a";
  document.getElementById("b").innerHTML = "b";

  itemA.value = " ";
  itemB.value = " ";
  itemC.value = " ";
}
