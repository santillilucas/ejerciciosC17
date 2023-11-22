/* Ejercicios de repaso:

 1. Programa para Calcular Media Aritmética:
   - Implementa una función que pida al usuario que ingrese 4 números por parámetro y calcule la media aritmética de esos números. 
   Media arimetica(es la suma de valores y division por la cantidad de valores)
*/

// function calcularMedia(a, b, c, d) {
//     let suma = a + b + c + d
//     return suma / 4
// }
// console.log(calcularMedia(2, 5, 7, 6))

/*2. Generar Listado de Números Primos:
   - Crea una función que pida al usuario un número límite y utilice un bucle for para generar un listado de números primos hasta el valor ingresado.*/

function esPrimo(numero) {
    if(numero < 2){
        return false
    }
    for(i = 2; i <= numero / 2; i++){
        if(numero % i  === 0){  //Digo que division no tiene resto, trabaje con numero par
            return false
        }
    }
    return true
}
function listar(limite) {
    let primos = []
    for (let index = 2; index < limite; index++) {
        if(esPrimo(index)){
            primos.push(index)
        }
        
    }
    return primos
}
console.log(listar(100))


/*3. Encontrar Divisores de un Número:
   - Implementa una función que tome un número ingresado por el usuario y, mediante un bucle for, encuentre todos sus divisores y los muestre en una lista.*/

function encontrarDivisores(numero) {
    let divisores = []
    for(let i = 1; i <= numero; i++ ){
        if(numero % i === 0){
            divisores.push(i)
        }
    }
    console.log(divisores)
    return divisores
}

encontrarDivisores(100)

/*4. Calcular Factorial de un Número:
   - Crea una función para calcular el factorial de un número dado.
5! = 1 */

function calcularFactorial(numero) {
  if(numero === 0){
    return 1;
  }else{
    return numero * calcularFactorial(numero - 1);

  }
    
}
console.log(calcularFactorial(5));


/*5. Calcular Área de un Triángulo:
   - Crea una función para calcular el área de un triángulo dado su base y altura.*/


function calcularArea(base, altura) {
    let area = (base * altura) /2;
    return area
    
 
}
console.log(calcularArea(4 ,8))

/*6. Encontrar el Número Mayor entre Tres Números o Determinar si Son Iguales:
   - Implementa una función que solicite al usuario tres números y, mediante un bucle for y un condicional, determine y retorne el número mayor entre ellos o muestre "Son iguales" si los tres números son iguales.*/

function numMayorIgual(n1, n2, n3) {
    for (let i = 0; i < 3; i++) {
        if(n1 === n2 && n2 === n3){
            return 'Los tres numeros son iguales'
        }else if(n1 > n2 && n1 > n3){
            return ' El numero mayor es:' +n1;

        }else if(n2 > n1 && n2 > n3){
            return 'El numero mayor es:' +n2;
        } else{
            return 'El numero mayor es:' +n3;
        }
        
        
    }
    
}
console.log(numMayorIgual(5, 5 ,5))
 


  /* 7. Calificar una Nota:
   - Crea una función que pida al usuario una nota (número) y, mediante un condicional, muestre la calificación correspondiente según los rangos establecidos.*/

   function usuario(nota) {
    if(nota >= 7){
        return 'Aprobaste la evaluacion con: ' +nota
    }else{
        return 'Desaprobaste con: ' +nota
    }
   }

   console.log(usuario(6))

   /* 8. Usar `filter` para Obtener Números Pares de un Array:
   - Utiliza el método `filter` para obtener solo los números pares de un array. */

   let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let resultado 

   resultado = numerosPares.filter(numerosPares => numerosPares % 2 === 0);

   console.log(resultado);


   /*9. Usar `map` para Convertir un Array de Palabras a un Array de sus Longitudes:
   - Utiliza el método `map` para convertir un array de palabras a un array de sus longitudes.*/

   let arr = ['hola', 'chau', 'persona', 'humano']
   let longitudes

   longitudes = arr.map(arr => arr.length);

   console.log(longitudes)


   /*10. Variables y Mensaje Concatenado:
    - Declara dos variables, `nombre` y `edad`, asigna valores y muestra un mensaje concatenando ambas variables.*/

    let nombre = 'Lucas '
    let edad = 33
   

    console.log('Mi nombre es: '+nombre, 'y tengo: '+edad, 'años')


    /*11. Función de Saludo:
    - Crea una función llamada `saludar` que acepte un parámetro `nombre` y muestre un mensaje de saludo.*/

    function saludar(nombre) {
        
        return  `Hola ${nombre} como estas?`        
        
    }

    console.log(saludar('lucas'))


    /*12. Condicionales para Determinar Positivo, Negativo o Cero:
    - Escribe una función llamada `esPositivo` que tome un número como parámetro y muestre un mensaje indicando si el número es positivo, negativo o cero.*/

    function esPositivo(num) {
        if(num >= 1){
            return 'Es positivo'
        }else if(num < 0){
            return 'Es negativo'
        }else if( num === 0){
            return 'Es cero'
        }else{
            return 'Por favor ingrese una opcion valida'
        }
        
        
    }
    console.log(esPositivo(0))


    /*13. Retorno de Valores al Calcular el Cuadrado de un Número:
    - Crea una función llamada `calcularCuadrado` que tome un número como parámetro y devuelva el cuadrado de ese número.*/

    function calcularCuadrado(numero) {

        let calcu = (numero * numero);
        return calcu;
        
        
    }
    console.log(calcularCuadrado(3))


    /*14. Arrays y Bucle para Mostrar Nombres:
    - Declara un array de nombres y utiliza un bucle para mostrar cada nombre en la consola.*/

    let nombres = ['Lucas', 'Erica', 'Mia', 'Airam', 'Benicio', 'Valentina']
    for (let i = 0; i < nombres.length; i++) 
    
        
    console.log(nombres)





   
