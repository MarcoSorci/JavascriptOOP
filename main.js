let student1 = new Student("pippo", "de paolis", 13, "m")

student1.addgrade(7)
student1.addgrade(9)
student1.addgrade(10)
student1.addgrade(3)
student1.addgrade(2.5)

let student2 = new Student("paperino", "duck", 13, "m")

console.log(student1.calculatemean()); //calls function in the other js
console.log(student1.generatecode());
console.log(student1.tostring());
console.log(student2.tostring());

let teacher = new Teacher("paperone","duck", 80, "m", "terza media")

teacher.addstudent(student1)
teacher.addstudent(student2)
teacher.addgrade("padu2009", 7)
teacher.addgrade("padu2009", 3)

//CREATE OBJECT CALLED PRINCIPAL, schoolname instead of degree, teacherarray
//addteacher
//addstudenttoteacher given a sudent surname add to teacher
//bestteacher one with highest beststudent







// student1.calculatemean()

// function calculategrademean(student) {   //media voti
//     let sum = student.grades.reduce((p, c) => p + c)
//     // let sum = 0
//     // for (const grade of student.grades) {
//     //     sum += grade
//     // }
//     let mean = sum / student.grades.length
//     return mean
// }

// console.log(calculategrademean(student1));

// function generatestudentcode(student) {
//     let now = new Date()      //prints current date and time
//     let actualyear = now.getFullYear()  //prints current year
//     let birthyear = actualyear - student.age
//     let code = student.name[0] + student.name[1] + student.surname[0] + student.surname[1] + birthyear
//     return code
// }

// console.log(generatestudentcode(student1)); 

