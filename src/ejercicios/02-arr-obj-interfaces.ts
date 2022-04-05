/*
    ===== Código de TypeScript =====
*/

/* Array */
let habilidades: string[] = ['Cantar','Bailar','Correr'];

/* Interface 
    === ? => Indica es una propiedad opcional
*/
interface Persona {
    nombre: string,
    edad: number,
    skils: string[], 
    ciudad?: string
}

/*Objeto */
const persona: Persona = {
    nombre: 'Juan',
    edad: 45,
    skils: ['Cantar','Bailar','Correr']
}

persona.ciudad = 'Huaraz';

console.table(persona);