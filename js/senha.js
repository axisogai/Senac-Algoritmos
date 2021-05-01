var senha, repete, s;
do {
    senha = prompt ("Insira sua senha numérica de 6 dígitos");
} while (senha.lenght != 6);
repete = prompt ("Redigite sua senha para validação. Ela deve ser a mesma.");
 while (repete != senha) {
repete = prompt ("A senha não é a mesma. Insira novamente a senha para validação.");
}  
s = prompt ("Para acessar sua conta entre com sua senha");
for (var cont = 1; senha != s && cont < 3; cont++){
  alert ("A senha informada não confere. Insira novamente. Você tem mais " + (3-cont) + " tentativa (s).")
  s = prompt ("Para acessar sua conta entre com sua senha");
}
if (cont < 3){
  alert ("Sua senha está correta! Você pode acessar sua conta.");
} else {
  senha = 99;
  alert ("Sua senha foi bloqueada. Procure seu gerente");
}    