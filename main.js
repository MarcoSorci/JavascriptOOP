let student1 = new Student("pippo", "de paolis", 13, "m")

//student1.addgrade(3)
student1.grade = 3 //this calls on the "set"
student1.grade = 6
student1.grade = 6
student1.grade = 3
student1.grade = 2.5

let student2 = new Student("paperino", "duck", 13, "m")
let student3 = new Student("oparina", "mack", 14, "f")
let student4 = new Student("gogarino", "kack", 14, "m")
let student5 = new Student("aperina", "dack", 14, "f")

// console.log(student1.calculatemean()); //calls function in the other js
// console.log(student1.generatecode());
// console.log(student1.tostring());
// console.log(student2.tostring());

let teacher = new Teacher("paperone", "duck", 80, "m", "quarta media")
let teacher2 = new Teacher("tina", "duckiana", 30, "f", "quinta media")

teacher.addstudent(student1)
teacher.addstudent(student2)
teacher.addgrade("padu2009", 2)
teacher.addgrade("padu2009", 3)
teacher2.addstudent(student3)
teacher2.addstudent(student4)
teacher2.addgrade("opma2008", 4)
teacher2.addgrade("opma2008", 5)
teacher2.addgrade("goka2008", 8)
teacher2.addgrade("goka2008", 6)
// console.log(teacher.tostring());
// console.log(teacher2.tostring());

let principal = new Principal("pino", "taldeitali", 81, "f", "the worst school ever")

principal.addteacher(teacher)
principal.addteacher(teacher2)
console.log(principal.generatecode()); 
student5.grade = 8
principal.addstudenttoteacher("duckiana", student5)
console.log(principal.tostring()+"\n");
console.log("\nBEST TEACHER \n\n" + principal.bestteacher()+"\n");









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

