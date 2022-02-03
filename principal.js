
//CREATE OBJECT CALLED PRINCIPAL, schoolname instead of degree, teacherarray
//addstudenttoteacher given a sudent surname add to teacher
//bestteacher one with highest beststudent
class Principal extends Person {
    constructor(name, surname, age, gender, school) {
        super (name, surname, age, gender)
        this.school = school
        this.teachers = []
    }

    tostring() {
        let principaldesc = "PRINCIPAL:" + "\n" +
            "Name: " + this.name + "\n" +
            "Surname: " + this.surname + "\n" +
            "Age: " + this.age + "\n" +
            "School: " + this.school + "\n"
        if (this.teachers.length === 0) {
            principaldesc += "\n-----------------\nThe principal has no teachers assigned"
        } else {
            for (let i = 0; i < this.teachers.length; i++) {
                let teacherdesc = "\n-----------------\n" + "\n" + this.teachers[i].tostring() + "\n";
                principaldesc += teacherdesc;
            }
        }
        return principaldesc
    }



    addteacher(teachertoadd) {
        for (const teach of this.teachers) {
            if (teach === teachertoadd) {
                console.log("This teacher is already in the database");
                return
            }
        } this.teachers.push(teachertoadd)
    }

    addstudenttoteacher(teachersurname, studenttoadd) {
        for (const teacher of this.teachers) {
            if (teachersurname === teacher.surname) {
                teacher.addstudent(studenttoadd)
            }
        }
    }

    bestteacher() {
        if (this.teachers.length === 0) {
            return "none best"
        }
        // let bestteacher = this.teachers[0]
        // for (let i = 0; i < this.teachers.length; i++) {
        //     const teacher = this.teachers[i];
        //     if (bestteacher.beststudent().calculatemean() < teacher.beststudent().calculatemean()) {
        //         teacher = bestteacher
        //     }
            
        // } return bestteacher.name
        return this.teachers.reduce((p, c) => p.beststudent() > c.beststudent() ? p : c).tostring()
    }

    generatecode(){
        const code = super.generatecode() + this.school[0] //takes the one from parent and adds to it
        return code
    }
}