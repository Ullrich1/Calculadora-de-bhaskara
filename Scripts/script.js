function respostaBhask() {
  let A = document.getElementById("itemA").value;
  let B = document.getElementById("itemB").value;
  let C = document.getElementById("itemC").value;

  let delta = B * B - 4 * A * C; //Calculo do discriminante

  document.getElementById("resDelta").innerHTML = delta; //resultado na janela delta

  //calculo bhaskara dois resultados (final)
  document.getElementById("b").innerHTML = B;
  document.getElementById("a").innerHTML = A;

  let x1 = ((Number(-B) + Number(Math.sqrt(delta))) / 2) * Number(A); //Calc da Bhaskara +
  let x2 = ((Number(-B) - Number(Math.sqrt(delta))) / 2) * Number(A); //Calc da Bhaskara -

  if (delta < 0) {
    document.getElementById("resBhask1").innerHTML = "Erro"; //resultado na janela bhaskara
    document.getElementById("resBhask2").innerHTML = "Erro"; //resultado na janela bhaskara
    alert(
      "Não é possível realizar este calculo! O delta " +
        delta +
        " é um número negativo, é impossível fazer a raiz quadrada de um delta negativo."
    );
  } else {
    var conversor = (numerodecimal) => 
    String(Math.round(numerodecimal * 100) / 100).replace(".", ",");
    //
    document.getElementById("resBhask1").innerHTML = x1; //resultado na janela bhaskara
    document.getElementById("resBhask2").innerHTML = x2; //resultado na janela bhaskara
    resBhask1.innerHTML = conversor(x1); //arrendonda resultados decimais
    resBhask2.innerHTML = conversor(x2); //arrendonda resultados decimais
  }

  

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

//area de testes --ignorar


// A = -1
// B = 3
// C = -6

// testedelta = B * B - 4 * A * C;

// equacaoMais = (Number(-B) + Math.sqrt(Number(testedelta))) / 2 * Number(A);
// equacaoMenos = (Number(-B) - Math.sqrt(Number(testedelta))) / 2 * Number(A);

// if(testedelta < 0){
//   console.log("raiz negativa")
// }
// console.log(Math.sqrt(Number(testedelta)))
// console.log("delta = " + testedelta)
// //console.log("x+ = "+equacaoMais)
// console.log("x- = "+equacaoMenos)



//teste para arredondar números decimais e deixar eles bonitinhos

// x1 = 5.00
// x2 = 65.83998

// var conversor = (numerodecimal) => 
// String(Math.round(numerodecimal * 100) / 100).replace(".", ",");


// console.log(conversor(x1));
// console.log(conversor(x2));

