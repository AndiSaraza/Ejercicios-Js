/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: input: 15 , 3      Output: El 15 es el número más grande*/

let n1=parseInt(prompt('Ingrese el primer numero'));
let n2=parseInt(prompt('Ingrese el segundo numero'));

if (n1>=n2) {
    if (n1==n2) {
        document.write('Los numeros son iguales' )
    } else{
     document.write(n1, ' es mayor que ',n2 );   
    }    
}else{
    document.write(n2, ' es mayor que ',n1 );
}