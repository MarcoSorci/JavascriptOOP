class Student extends Person {  //extends takes the properties from person into here, can only have one parent
    constructor(name, surname, age, gender) {
        // this.name = name  //this indicates the object that gets created by the constructor
        super (name, surname, age, gender) //calls the needed properties
        this._grades = []  //underscore asks not to touch basically
    }

    set grade(value) {
        if (value >= 0 && value <= 10) {
            this._grades.push(value)
        }
    }

    // addgrade(grade) {
    //     if (grade >= 0 && grade <= 10) {
    //         this._grades.push(grade)
    //     }
    // }


    // get grades(){   //get makes it so it can't be changed, named the value with _ only without it
    //     return this._grades
    // }

    get yob() {
        let now = new Date()
        let yob = now.getFullYear - this.age
        return yob
    }

    set yob(value) {                     //they calculate things on runtime, so it's best to do with age rather than year of birth as it changes
        let now = new Date()
        this.age = now.getFullYear() - value
    }




    calculatemean() {
        if (this._grades.length === 0) {
            return -1
        }
        let sum = this._grades.reduce((p, c) => p + c, 0)
        let mean = sum / this._grades.length
        return mean
    }

    tostring() {
        let mean = this.calculatemean()
        if (mean === -1) {
            mean = "N/C"
        }

        let studentdesc = "STUDENT: \n" +
            "Name: " + this.name + "\n" +
            "Surname: " + this.surname + "\n" +
            "Age: " + this.age + "\n" +
            "Grade Median: " + mean + "\n"
        return studentdesc
    }
}

//create teacher class (name surname age gender degree)
//array di students
//tostring() that prints teacher data, then using student tostring cycles, print the student data
//addstudent(student) only if student not already in, add to array (same studentcode)
//addgrade(studentcode, grade)
//beststudent(), print the data of the student with highest grade median 
