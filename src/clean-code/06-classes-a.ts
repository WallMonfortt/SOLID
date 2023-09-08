(()=>{

    type Gender = 'M' | 'F';

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthday: Date;

        // constructor (name:string, gender:Gender, birthdate:Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthday = birthdate;
        // }
        constructor(
            public name: string,
            public gender : Gender,
            public birthday: Date
        ){}

    }
    const newPerson = new Person('John', 'M', new Date('1990-01-01'));
    console.log(newPerson);
})();