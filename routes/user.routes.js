const Router = require('express')
const router = new Router()
const userController = require('../controllers/students.controller')

router.get('/student', userController.getStudents)
router.get('/student/:id', userController.getStudent)
router.post('/student', userController.createStudent)
router.put('/student', userController.updateStudent)
router.delete('/student/:id', userController.deleteStudent)

module.exports = router