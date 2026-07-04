const button = document.getElementById("converter");
const moedaDe = document.getElementById("moedaDe");
const moedaPara = document.getElementById("moedaPara");
const resultado = document.getElementById("resultado");

function converterMoeda(){
  const inputValor = document.getElementById("valor").value;
  const valorConvert = document.getElementById("convert");
  const valorConverted = document.getElementById("converted");

  const valorDolar = 5.2;

  const resultado = inputValor / valorDolar;
  valorConvert.innerHTML = inputValor;

  console.log(valorConverted);
}





converter.addEventListener("click", converterMoeda);
