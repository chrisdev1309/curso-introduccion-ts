/*
    ===== Código de TypeScript =====
*/

interface Jugador {
    nombre: string,
    edad: number,
    pais: string,
    posicion: string,
    detalle: Detalle,
    mostrarDatos: () => String
}

interface Detalle {
    habiliades: string,
    club: string,
    titulos: number
}

const jugador: Jugador = {
    nombre: 'Juan de Jesus',
    edad: 25,
    pais: 'Brasil',
    posicion: 'Delantero',
    detalle: {
        habiliades: 'Buen golpe de cabeza',
        club: 'Flamengo',
        titulos: 3
    },
    mostrarDatos() {
        return 'Nombre: ' + this.nombre + ' Edad: ' + this.edad
    } 
}

const { pais, posicion, detalle } = jugador;
const { club, titulos } = detalle 

console.log(jugador.mostrarDatos());
console.log('El pais es: ', pais);
console.log('La posicion en la que juega es: ', posicion);
console.log('Su habilidad es: ', detalle.habiliades);
console.log('El club en el que juega es: ', club);
console.log('El Nro. de titulos es: ', titulos);

