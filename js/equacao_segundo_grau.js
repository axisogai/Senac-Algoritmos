var a,b,c,delta,x1,x2,raiz_delta;

a=prompt("Digite o valor de a");
b=prompt("Digite o valor de b");
c=prompt("Digite o valor de c");

alert("Os valores digitados foram: a="+a + " b= "+b + " c= "+c);

delta=(b**2) -(4*a*c);
if(delta<0){

alert("Sem resposta")
}

else{
raiz_delta=Math.sqrt(delta);
x1=(-(b)-(raiz_delta))/(2*a);
x2=(-(b)+(raiz_delta))/(2*a);

alert("Os valores de:" + "\n" + "a= "+a + "\n" +"b= "+b + "\n" + "c= "+c +"\n" +
    "delta= " + delta + "\n" + "x1= " + x1 + "\n" + "x2= " + x2);
}



