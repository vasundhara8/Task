const Text = require('../models/Text');
const fileUtils = require('../utils/fileUtils');

exports.saveText = (req, res) => {
    const text = req.body.text;
    const newText = new Text(text);

    fileUtils.saveTextToFile(newText.value);
    res.status(200).json({ message: 'Text saved successfully.' });
};

exports.updateText = (req, res) => {
    const text = req.body.text;
    const newText = new Text(text);

    fileUtils.updateTextInFile(newText.value);
    res.status(200).json({ message: 'Text updated successfully.' });
};

exports.deleteText = (req, res) => {
    const exists = fileUtils.deleteTextFile();

    res.status(200).json({ message: 'Text file deleted successfully.' });


};
