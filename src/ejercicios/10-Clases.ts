/*
    private => Solo es visible dentro de la clase
    public => Es visible despues de instanciarse
    static  => Es visible fuera de la clase incluso sin instanciarla
 */

    class PersonaNormal {
        constructor(
            public nombre: string,
            public direccion: string
        ){}
    }

    class Heroe extends PersonaNormal {
        /*alterEgo: string;
        edad: number;
        nombreReal: string;*/

        constructor (
            public alterEgo: string, 
            public edad: number, 
            public nombreReal: string
        ) { 
            super( nombreReal, 'New York, USA' );
        }
    }

    const ironman = new Heroe('Iroman',45,'Tony');

    console.log(ironman);