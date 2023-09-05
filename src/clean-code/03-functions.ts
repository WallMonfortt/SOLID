(() => {

    // función para obtener información de una película por Id
    function getAllMoviesById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastFromMovieById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorInfoById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createNewActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continue

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3500 : 4500; 
    }
    


})();
