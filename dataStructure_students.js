const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
/* ------------ Más cursos de prueba -------------- */
    { _id: 3, title: "JavaScript II" },
    { _id: 4, title: "HTML y CSS II" },
]

    const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
/* --------- Más estudiantes de prueba ----------- */
    { _id: 3, name: "Jeffeson Vásquez" },
    { _id: 4, name: "Edinael Sanguino" },
    { _id: 5, name: "Jaimito Sanchez" },
]

    const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 },
/* -------- Más asignaciones de prueba ----------- */
    { course_id: 3, student_id: 3 },
    { course_id: 4, student_id: 4 },
    { course_id: 4, student_id: 5 },
    { course_id: 3, student_id: 1 },
    { course_id: 1, student_id: 3 },
]

// - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
// - Maria Gomez
//   * HTML y CSS I

const Cursos = []
let obj = {student: '', curso: []}


students.map(student => {
    courses.map(course => {
        enrollments.map(enrollment => {

            if(enrollment.course_id ===  course._id  && enrollment.student_id === student._id){

                let finder = Cursos.find(item => item.student === student.name)

                if(finder === undefined){
                    obj.student = student.name
                    obj.curso.push(course.title)
                    Cursos.push(obj)
                    obj = {student: '', curso: []}
                } 
                else {
                    finder.curso.push(course.title)
                    Cursos.splice((Cursos.length-1), 1, finder)
                    obj = {student: '', curso: []}
                }
            }
        })
    })
})

const formatter = Cursos.map(item => {
    let value = `${item.curso}`

    console.log(`- ${item.student} \n * ${value = value.search(',') ? value.replace(/,/g, "\n * ") : value}`)
})