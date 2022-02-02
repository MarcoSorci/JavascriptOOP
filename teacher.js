class Teacher {
    constructor(name, surname, age, gender, degree) {
        this.student
    }


    tostring() {
        let teacherdesc = "Name: " + this.name + "\n" +
            "Surname: " + this.surname + "\n" +
            "Age: " + this.age + "\n" +
            "Degree: " + this.degree
        return studentdesc
    }



    addstudent(student) {
        // let hasstudent = false
        // for (const stud of this.students) {
        //     if (stud.generatecode() === student.generatecode()){
        //         hasstudent = true
        //     }
        // }
        // if (hasstudent === false) {
        //     this.students.push(student)
        // }

        for (const stud of this.students) {
            if (stud.generatecode() === student.generatecode()) {
                console.log("This student is already in the database");
                return  //break would still enter 
            }
        } this.students.push(student)

        // let hasstudent = this.student.some(stud => stud.generatecode() === student.generatecode())
        // if (hasstudent === false) {
        //     this.students.push(student)
        // }
    }


    addgrade(studentcode, grade) {
        // for (const stud of this.students) {
        //     if (stud.generatecode() === studentcode){
        //         stud.addgrade(grade)
        //     }
        // return stud
        // }
        // this.students=this.students.map((stud) =>{
        //     if (stud.generatecode()===studentcode) {
        //         stud.addgrade(grade)
        //     }
        //     return stud
        // })

        this.students.forEach(stud => {
            if (stud.generatecode() === studentcode) {
                stud.addgrade(grade)
            }
        });
    }

    beststudent() {
        if (this.students.length === 0) {
            return "none best"
        }   
        // let beststudent=this.students[0]
        // for (let i = 1; i < this.students.length; i++) {
        //     const stud = this.students[i];
        //     if (stud.calculatemean()>beststudent.calculatemean()) {
        //         beststudent = stud
        //     }
        // } return beststudent.tostring()
        return this.students.reduce((p, c) => p.calculatemean() > c.calculatemean() ? p : c).tostring


    }


}