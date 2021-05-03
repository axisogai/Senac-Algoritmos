var nome = [], email = [], tel = [];
var resp = 's';
for (i=0; resp == 's'; i++){
nome[i] = prompt ("Digite o nome da " + (i+1) + "a pessoa");
email[i] = prompt ("Digite o email da " + (i+1) + "a pessoa");
tel[i] = prompt ("Digite o telefone da " + (i+1) + "a pessoa");
//alert ("\n");
resp = prompt ("Deseja continuar? s/n");
//alert ("\n");
}

alert ("Essas são as pessoas cadastradas em nosso sistema:\n");
for (i=0; nome.length > i; i++){
alert ("O(A) sr(a) " + nome[i] + " possui o telefone: " + tel[i] +
" e email: " + email[i] + "\n");
}