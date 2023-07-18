const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');

router.post('/save-text', textController.saveText);
router.put('/update-text', textController.updateText);
router.delete('/delete-text', textController.deleteText);

module.exports = router;
