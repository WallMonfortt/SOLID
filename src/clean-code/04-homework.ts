(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const fruits = {
            Red : ['manzana','cereza','ciruela'],
        }

        return ( fruits.Red.includes( fruit ) );
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor( color: FruitColor ): string[] {

        const fruitsbyColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas'],
        }

        if (!Object.keys( fruitsbyColor ).includes( color )) throw Error('the color must be: red, yellow, purple');
        return fruitsbyColor[ color ];

        // switch (color) {
        //     case 'red':
        //         return ['manzana','fresa'];
        //     case 'yellow':
        //         return ['piña','banana'];
        //     case 'purple':
        //         return ['moras','uvas'];
        //     default:
        //         throw Error('the color must be: red, yellow, purple');
        // }
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if (isFirstStepWorking  === false) console.log('First step broken.');
        if (isSecondStepWorking === false) console.log('Second step broken.');
        if (isThirdStepWorking  === false) console.log('Third step broken.');
        if (isFourthStepWorking === false) console.log('Fourth step broken.');
        return 'Working properly!';  
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
