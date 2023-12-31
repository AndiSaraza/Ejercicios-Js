/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo:  
input: 10   input: 15
Output: El 10 es divisible por 2.    Output: El 15 no es divisible por 2. */

let n1=parseInt(prompt('Ingrese un numero'));
let resultado= (n1%2);

if (resultado==0) {
  document.write('El numero ', n1,' es divisible por 2')  
}else{
    document.write('El numero ', n1,' no es divisible por 2')   
}

