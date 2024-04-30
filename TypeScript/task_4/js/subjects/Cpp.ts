namespace Subjects {
    declare module './Teacher' {
        export interface Teacher {
            experienceTeachingC?: number;
        }
    }

    class Cpp extends Subject {
        public getRequirements(): string {
            return ('Here is the list of requirements for Cpp')
        }

    }
}
