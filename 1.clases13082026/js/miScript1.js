a=5
b=6
if(b%2==0)
{
    console.log(b,"es numero par");
}
if(a%2==0)
{
    console.log(a,"es numero par");
}
else{
    console.log("a,es numero limpiar");
}
/**Realizar un programa psara sumar los primero 10 numero
 * ejemplo:0+1+2+3+4+5+6+7+8+9=45
 */
let suma=0;
for (let i=0; i <10; i++) {
    suma +=i;
}
console.log ("la suma es :",suma)
/**Realizar un programa para generar los numeros pares
 * de n numeros, n es introducido  por teclado.
 */
let n=parseInt(prompt("Int. n:"));
for(let i=1;i<n;i++)
{
    console.log(i*2);
}

