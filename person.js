class Person{
    constructor(name,surname, age, gender){
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
    }

    generatecode() {
        let now = new Date()      //prints current date and time
        let actualyear = now.getFullYear()  //prints current year
        let birthyear = actualyear - this.age
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthyear //+ this.gender (you can add other properties in the future and it'd work across all children)
        return code
    }
}