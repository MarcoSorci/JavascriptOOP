class Student {
    constructor(name, surname, age, gender) {
        this.name = name  //this indicates the object that gets created by the constructor
        this.surname = surname
        this.age = age
        this.gender = gender
        this.grades = []
    }
    addgrade(grade) {
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade)
        }
    }
    calculatemean() {
        if (this.grades.length === 0) {
            return -1
        }
        let sum = this.grades.reduce((p, c) => p + c, 0)
        let mean = sum / this.grades.length
        return mean
    }
    generatecode() {
        let now = new Date()      //prints current date and time
        let actualyear = now.getFullYear()  //prints current year
        let birthyear = actualyear - this.age
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthyear
        return code
    }
    tostring() {
        let mean = this.calculatemean()
        if (mean === -1) {
            mean = "N/C"
        }

        let studentdesc = "Name: " + this.name + "\n" +
        "Surname: " + this.surname + "\n" +
        "Age: " + this.age + "\n" +
        "Grade Median: " + mean
        return studentdesc
    }
}

//create teacher class (name surname age gender degree)
//array di students
//tostring() that prints teacher data, then using student tostring cycles, print the student data
//addstudent(student) only if student not already in, add to array (same studentcode)
//addgrade(studentcode, grade) 
//beststudent(), print the data of the student with highest grade median 
