

var nota1= prompt("Insira a primeira nota");
var nota1 = parseInt(nota1);
var nota2= prompt("Insira a segunda nota");
var nota2 = parseInt(nota2);

var media=(nota1 + nota2)/2;
alert("A sua média é " + media);

if (media>=7){
    alert("Aprovado")
}else{
    alert("Reprovado")
}