/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo:  
input: 20    Output: El 20 es divisible por 2.  */

let n1=parseInt(prompt('Ingrese un numero'));
let n2=parseInt(prompt('Elija una opcion:  2,3, 5 o 7 '))

if(n2=='2'|| n2=='3'|| n2=='5'|| n2=='7'){
   let resultado= (n1% n2);

if (resultado==0) {
  document.write('El numero ', n1,' es divisible por ',n2)  
}else{
    document.write('El numero ', n1,' no es divisible por ',n2)   
} 
}else{
    document.write('Opcion invalida ')
}
