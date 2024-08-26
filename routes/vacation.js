const express = require('express');
const { protect } = require('../middleware/auth');
const { requestVacation, getVacations, getVacation,deleteVacation,approveVacation } = require('../controllers/vacationController');

const router = express.Router();

router.post('/', protect, requestVacation);
router.get('/', protect, getVacations);
router.get('/:id', protect, getVacation);
router.delete('/:id/delete', protect, deleteVacation); // Only admin should have access to this route
router.put('/:id/approve', protect, approveVacation); // Only admin should have access to this route

module.exports = router;
