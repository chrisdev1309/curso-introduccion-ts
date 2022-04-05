/*
    ===== Código de TypeScript =====
*/

/* funcion estandar */
function sumar(a: number, b: number): number {
    return (a + b);
}


/* Funcion flecha o Arrow Function */
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}


const restarFlecha = (a: number, b: number): number => {
    return a - b;
}


const concaternar = (a: string, b: string): string => {
    return a + b;
}


/* Funciones con argumentos o parametros opcionales
    === El orden es => Primero los argumentos obligatorios
                       Segundo los argumentos opcionales
                       Tercero o ultimo los argumentos con valores por defecto 
*/

const multiplicar = (numero: number, otroNumero?: number, base: number = 4): number => {
    return numero * base;
}

const resultado = sumar(8,3);
const resultadoFlecha = sumarFlecha(5,4);
const resultadoRestarFlecha = restarFlecha(5,4);
const resultadoConcatena = concaternar('Hola', ' Christiam');

/* La funcion se puede usar o llmar de 3 formas distintas*/
//const resultadoMultiplicacion = multiplicar(3);
//const resultadoMultiplicacion = multiplicar(3,5);
const resultadoMultiplicacion = multiplicar(3,0,5);

console.log(resultado);
console.log(resultadoFlecha);
console.log(resultadoRestarFlecha);
console.log(resultadoConcatena);
console.log(resultadoMultiplicacion);