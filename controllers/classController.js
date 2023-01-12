const Class = require("../models/Class")

exports.createClass = async (req, res) => {
    try {
        const newClass = new Class({
            name: req.body.name,
            college: req.body.college,
            students: req.body.students
        });
        await newClass.save();
        res.status(201).json(newClass);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('college').populate('students');
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getClass = async (req, res) => {
    try {
        const oneClass = await Class.findById(req.params.id).populate('college').populate('students');
        if (!oneClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.json(oneClass);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateClass = async (req, res) => {
    try {
        const classToUpdate = await Class.findById(req.params.id);
        if (!classToUpdate) {
            return res.status(404).json({ message: 'Class not found' });
        }
        classToUpdate.name = req.body.name;
        classToUpdate.college = req.body.college;
        classToUpdate.students = req.body.students;
        await classToUpdate.save();
        res.json(classToUpdate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteClass = async (req, res) => {
    try {
        const classToDelete = await Class.findById(req.params.id);
        if (!classToDelete) {
            return res.status(404).json({ message: 'Class not found' });
        }
        await classToDelete.remove();
        res.json({ message: 'Class deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
