/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo            Output: oauo*/

let frase=prompt('Ingrese una frase');
let longitud= frase.length;
let n=0 , nuevaFrase , x;

for(n= 0; n<longitud ;n++ ) {
  
  x = frase.charAt(n) ;
    if (x== 'a' ||x == 'e'  || x == 'i'  || x == 'o'  || x == 'u' ) {
    document.write(x)  ; 
    nuevaFrase= nuevaFrase + x;
    
  }
}
