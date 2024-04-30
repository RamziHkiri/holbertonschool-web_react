

namespace Subjects {
    export class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        public setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
