(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps{
        name: string, 
        gender: Gender, 
        birthdate: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name , gender, birthdate }: PersonProps
        ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        name: string;
        birthdate: Date;
        gender: Gender;
        email: string;
        role: string;
    }

    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            {email,
            role,
            name,
            gender,
            birthdate }: UserProps
        ) {
            super({name,gender,birthdate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            console.log('Checking credentials...');
            return true;
        }
    }

    interface UserSettingsProps {
        name: string;
        birthdate: Date;
        gender: Gender;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;
    }
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthdate 
            }: UserSettingsProps
        ) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings(
        {
            workingDirectory:'/usr/home',
            lastOpenFolder:'/home',
            email:'jose@google.com',
            role:'Admin',
            name:'Jose',
            gender:'M',
            birthdate: new Date('1985-10-21')
        }
    );

    console.log({ userSettings });


})();