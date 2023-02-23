/*
PSEUDOCÓDIGO
-- identificar arrays de entrada (enrollment / students / courses)
-- iterar sobre enrollments
-- primera iteración: iterar sobre los arrays student & courses y traer información relevante
-- iteración posterior: tomar id del student para buscar las relaciones del primer estudiante (nos interesa ? traer : nada)
-- revisar caso (hicimos la validación del estudiante ? que no se repita )
-- imprimir info en el estilo requerido (la información puede ser acumulada en un array) 
*/

const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]

students.map(item =>{
    console.log(`- ${item.name}, tiene las siguientes clases: `);
    enrollments.map((element) => {
        Number(element.student_id)  === Number(item._id)  ? courses.map(index => {
            Number(element.course_id) === Number(index._id) ? console.log("*", index.title) : null
        }): null;
    })
});

console.log("---------------------------------");

courses.map(item =>{
    console.log(`El curso de ${item.title}, tiene los siguientes estudiantes: `);
    enrollments.map((element) => {
        Number(element.course_id)  === Number(item._id)  ? students.map(index => {
            Number(element.student_id) === Number(index._id) ? console.log("*", index.name) : null
        }): null;
    })
});

// console.log("---------------------------------");
// console.log("---------------------------------");

// students.map(x =>{
//       console.log(`- ${x.name}, tiene las siguientes clases: `);
//     enrollments.map(y => {
//         if(y.student_id === x._id) {
//             courses.map(z => {
//                 if (z._id === y.course_id) {
//                        console.log("*", z.title)
//                 }
//             })
//         }
//     })
// })
// console.log("---------------------------------");
// courses.map(x =>{
//     console.log(`El curso ${x.title}, tiene los siguientes estudiantes: `);
//     enrollments.map(y => {
//         if(y.course_id === x._id) {
//             students.map(z => {
//                 if (z._id === y.student_id) {
//                     console.log("*", z.name)
//                 }
//             })
//         }
//     })
// })
// console.log("---------------------------------");
// console.log("---------------------------------");


/////////////////////////////////////

//   - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
//   - Maria Gomez
//   * HTML y CSS I

/////////////////////////////////////

//   - JavaScript I
//   * Pedro Perez
//   - HTML y CSS I
//   * Pedro Perez
//   * Maria Gomez