/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 50,
    segundo: 2,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

/* 
    DESESTRUCTURACION, Forma recomendada de escribirla, para que sea mas legible, 
    notese que se le esta asignando un alias a la propiedad autor, 
    para el ejemplo el alias es 'autorDetalle', y este alias es el que se usa 
    al momento de acceder a la propiedad
*/

const { volumen, segundo, cancion, detalles } = reproductor;
const { anio, autor: autorDetalle } = detalles;

/* 
    DESESTRUCTURACION, otra forma de escribirla, pero a mi parecer es un poco mas confusa, 
    note que a la propiedad 'autor' se le esta asignando un nombre de alias 'autorDetalle'
*/

/*
const autor = 'FULANO';

const { volumen, segundo, cancion, detalles: { autor: autorDetalle, anio } } = reproductor;
*/

/* Primera forma de acceder a las propiedades de una interface u objeto */
/*
console.log('El volumen actual es de: ', reproductor.volumen);
console.log('El segundo actual es de: ', reproductor.segundo);
console.log('La cancion es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);
*/

/* Segunda forma de acceder a las propiedades de una interface u objeto, con DESESTRUCTURACION */
console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es de: ', segundo);
console.log('La cancion es: ', cancion);
console.log('El autor es: ', autorDetalle);
console.log('La cancion es del año: ', anio);