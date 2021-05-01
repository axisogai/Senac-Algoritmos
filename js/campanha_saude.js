

var sexo=prompt("Digite seu sexo");
var idade=prompt("Digite sua idade");
var idade = parseInt(idade);
var estado_civil=prompt("Digite seu estado_civil");



if ((sexo == "F") && (idade >= 16)) {
    alert ("Venha participar da nossa campanha de saúde!");
} else if (sexo == 'M'){
    if (estado_civil == "casado"){
        alert ("Venha participar da nossa campanha para casais.");
    } else {
        alert ("Venha participar da nossa campanha de doação de sangue.");
    }
}