const db = require("../database")

class StudentsContoller{

    async getStudents(req, res){
        const students = await db.query('SELECT * FROM students')
        res.end(JSON.stringify(students.rows))
    }

    async getStudent(req, res){
        const id = req.params.id
        const student = await db.query('SELECT * FROM students WHERE id = $1', [id]) 
        res.end(JSON.stringify(student.rows[0]))
    }

    async createStudent(req, res){
        const {firstName, lastName, groupName} = req.body
        const student = await db.query('INSERT INTO students (first_name, last_name, group_name) VALUES ($1, $2, $3) RETURNING *', [firstName, lastName, groupName])
        res.end(JSON.stringify(student.rows[0]))
    }

    async updateStudent(req, res){
        const {firstName, lastName, groupName, id} = req.body
        const student = await db.query('UPDATE students set first_name=$1, last_name=$2, group_name=$3, updated_at=Current_timestamp WHERE id=$4 RETURNING *', [firstName, lastName, groupName, id])
        res.end(JSON.stringify(student.rows[0]))
    }

    async deleteStudent(req, res) {
        const id = req.params.id
        const student = await db.query('DELETE FROM students WHERE id = $1', [id]) 
        res.end(JSON.stringify('Succesfully deleted'))
    }
}

module.exports = new StudentsContoller()