/*
    ===== Código de TypeScript =====
*/

/*
interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        pais: string,
        ciudad: string
    },
    mostrarDireccion: () => string
}
*/

interface SuperHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    poder: Poder,
    mostrarDireccion: () => string
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

interface Poder {
    tipo: string,
    nivel: number
}

const superHeroe: SuperHeroe = {
    nombre: 'Batman',
    edad: 25,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    poder: {
        tipo: 'fuego',
        nivel: 10
    },
    mostrarDireccion() {
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais; 
    }
} 

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

console.log(superHeroe.poder.nivel)
