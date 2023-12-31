/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo:  input: 15 , 3, 9        Output: El 15 es el número más grande*/

let n1=parseInt(prompt('Ingrese el primer numero'));
let n2=parseInt(prompt('Ingrese el segundo numero'));
let n3=parseInt(prompt('Ingrese el tercer numero'));

if (n1>=n2) {
    if (n1==n2) {
        document.write('El primer y segundo numero son iguales y poseen el mayor valor = ', n1)
    } else{
        if (n1>=n3) {
            if (n1>n3) {
             document.write('El primer numero= ',n1, ' es el mayor numero' );    
            }else{
              document.write('El primer y tercer numero son iguales y poseen el mayor valor = ', n1)  
            }
        }else{
            document.write('El tercer numero= ',n3, ' es el mayor numero' );
        }       
    }    
}else if(n2>=n3){
    if(n2==n3){
        document.write(' El segundo y tercer numero son iguales y poseen el mayor valor = ', n2)   
    }else{
        document.write('El segundo numero= ',n2, ' es el mayor numero' )
    }       
}else{
    document.write('El tercer numero= ',n3, ' es el mayor numero' );}