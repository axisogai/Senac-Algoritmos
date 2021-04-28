var num, chute;

num = Math.floor(Math.random() * 10);

do{
chute = prompt("Insira um número entre 1 e 9");
} while (chute < 0 || chute > 9);

for (var cont = 1; chute != num; cont++){

    do{
        chute = prompt("Insira um número entre 1 e 9");
        } while (chute < 0 || chute > 9);  

}


alert ("Você acertou na sua tentativa");