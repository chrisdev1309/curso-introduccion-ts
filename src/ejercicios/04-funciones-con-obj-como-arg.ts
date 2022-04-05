/*
    ===== Código de TypeScript =====
*/

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarPv: () => void
}

const curar = (personaje: PersonajeLOR, curarX: number): void => {
    personaje.pv += curarX;  
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Christiam',
    pv: 80,
    mostrarPv () {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPv();