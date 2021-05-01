var preco_arroz_T1, preco_arroz_T2, preco_feijao_branco, preco_feijao_preto,
    preco_linguica, preco_lentilha, resposta, total_compras;

preco_arroz_T1 = prompt("Insira o preço do kilo do arroz Tipo1:");
preco_arroz_T2 = prompt("Insira o preço do kilo do arroz Tipo2:");
preco_feijao_branco = prompt("Insira o preço do kilo do feijão branco:");
preco_feijao_preto = prompt("Insira o preço do kilo do feijão preto:");
preco_linguica = prompt("Insira o preço do kilo da linguiça defumada:");
preco_lentilha = prompt("Insira o preço do kilo da lentilha:");

resposta = prompt("Tem arroz tipo 1? \n Responda S para SIM ou N para NÃO");

if (resposta == 'S') {
    preco_arroz_T1 = parseInt(preco_arroz_T1);
    preco_feijao_preto = parseInt(preco_feijao_preto);
    total_compras = preco_arroz_T1 + (preco_feijao_preto * 2);
} else {
    resposta = prompt("Tem arroz tipo 2? \n Responda S para SIM ou N para NÃO");
    if (resposta == 'S') {
        preco_arroz_T2 = parseInt(preco_arroz_T2);
        preco_feijao_branco = parseInt(preco_feijao_branco);
        total_compras = (preco_arroz_T2 * 3) + (preco_feijao_branco);
    } else {
        preco_linguica = parseInt(preco_linguica);
        preco_lentilha = parseInt(preco_lentilha);
        total_compras = (preco_lentilha * 2) + preco_linguica;
    }
}

alert("O preço da sua compra foi R$" + total_compras);