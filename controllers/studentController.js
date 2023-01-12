const Student = require('../models/Student')

exports.createStudent = async (req, res) => {
    try {
        const newStudent = new Student({
            name: req.body.name,
            email: req.body.email,
            class: req.body.class
        });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('class');
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('class');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const studentToUpdate = await Student.findById(req.params.id);
        if (!studentToUpdate) {
            return res.status(404).json({ message: 'Student not found' });
        }
        studentToUpdate.name = req.body.name;
        studentToUpdate.email = req.body.email;
        studentToUpdate.class = req.body.class;
        await studentToUpdate.save();
        res.json(studentToUpdate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const studentToDelete = await Student.findById(req.params.id);
        if (!studentToDelete) {
            return res.status(404).json({ message: 'Student not found' });
        }
        await studentToDelete.remove();
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
