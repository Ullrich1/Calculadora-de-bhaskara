function respostaDelta() {
  let A = document.getElementById("itemA").value;
  let B = document.getElementById("itemB").value;
  let C = document.getElementById("itemC").value;

  let delta = B * B - 4 * A * C; //Calculo do discriminante

  document.getElementById("resDelta").innerHTML = delta;
}

function limparDelta() {
  document.getElementById("resDelta").innerHTML = "Resultado";
  itemA.value = " ";
  itemB.value = " ";
  itemC.value = " ";
}



function respostaBhask() {
  let aBhask = document.getElementById("itemB-bhask").value;
  let bBhask = document.getElementById("itemA-bhask").value;

  let x1 = -bBhask + (Math.sqrt(delta) / 2) * aBhask; //Calc da Bhaskara +
  let x2 = -bBhask - (Math.sqrt(delta) / 2) * aBhask; //Calc da Bhaskara -

  document.getElementById("resBhask1").innerHTML = x1;
  document.getElementById("resBhask2").innerHTML = x2;
}

//Por algum motivo o a resposta da bhaskara não é mostrada
//resolver amanhã