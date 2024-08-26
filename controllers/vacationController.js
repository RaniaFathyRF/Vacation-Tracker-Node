const Vacation = require('../models/Vacation');

exports.requestVacation = async (req, res) => {
    const { startDate, endDate } = req.body;

    try {
        const vacation = new Vacation({
            user: req.user.id,
            startDate,
            endDate,
        });
        await vacation.save();

        res.status(201).json({ success: true, vacation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getVacations = async (req, res) => {
    try {
        const vacations = await Vacation.find({ user: req.user.id });
        res.status(200).json({ success: true, vacations });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getVacation= async (req, res) =>{
    try{
        const vacation = await Vacation.findById(req.params.id);
        if (!vacation) {
            return res.status(404).json({ success: false, message: 'Vacation not found' });
        }
        res.status(200).json({ success: true, vacation });
    }catch(error){
        res.status(500).json({ success: false, error: error.message });
    }
}
exports.deleteVacation = async (req,res) =>{
    try{
        const vacation = await Vacation.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Vacation Deleted Successfully',vacation });
    }catch(error){
        res.status(500).json({ success: false, error: error.message });
    }
}
exports.approveVacation = async (req, res) => {
    try {
        const vacation = await Vacation.findById(req.params.id);
        if (!vacation) {
            return res.status(404).json({ success: false, message: 'Vacation not found' });
        }

        vacation.status = 'approved';
        await vacation.save();

        res.status(200).json({ success: true, vacation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
