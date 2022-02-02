
//CREATE OBJECT CALLED PRINCIPAL, schoolname instead of degree, teacherarray
//addstudenttoteacher given a sudent surname add to teacher
//bestteacher one with highest beststudent
class Principal {
    constructor(name, surname, age, gender, school) {
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
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
                let teacherdesc = "\n-----------------\nTEACHER " + (i + 1) + "\n" + this.teachers[i].tostring();
                principaldesc += teacherdesc;
            }
        }
        return principaldesc
    }



    addteacher(teacher) {
        for (const teach of this.teachers) {
            if (teach === teacher) {
                console.log("This teacher is already in the database");
                return
            }
        } this.teachers.push(teacher)
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
        return this.teachers.reduce((p, c) => p.beststudent() > c.beststudent() ? p : c).tostring()
    }

}