const College = require('../models/College');

exports.createCollege = async (req, res) => {
    const college = new College({
        name: req.body.name,
        address: req.body.address
    });

    try {
        await college.save();
        res.status(201).json(college);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    // const result = await (req.body)
    // res.send(result)
};

exports.getColleges = async (req, res) => {
    try {
        const colleges = await College.find();
        res.json(colleges);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCollege = async (req, res) => {
    try {
        const college = await College.findById(req.params.id);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.json(college);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateCollege = async (req, res) => {
    try {
        const college = await College.findById(req.params.id);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        college.name = req.body.name;
        college.address = req.body.address;
        await college.save();
        res.json(college);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCollege = async (req, res) => {
    try {
        const college = await College.findById(req.params.id);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        await college.remove();
        res.json({ message: 'College deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
