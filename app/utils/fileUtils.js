const fs = require('fs');
const lockfile = require('proper-lockfile');
const path = require('path');
class FileUtils {
    constructor() {
        if (FileUtils.instance) {
            return FileUtils.instance;
        }
        FileUtils.instance = this;
        this.lockfilePath = 'textfile.txt';
    }

    async saveTextToFile(text) {
        if (!fs.existsSync(this.lockfilePath)) {
            path.join(__dirname, 'textfile.txt');
            fs.writeFileSync('textfile.txt', '');
        }
        const release = await lockfile.lock(this.lockfilePath);
        fs.writeFileSync('textfile.txt', text);
        release();
    }

    async updateTextInFile(text) {
        if (!fs.existsSync(this.lockfilePath)) {
            path.join(__dirname, 'textfile.txt');
            fs.writeFileSync('textfile.txt', '');
        }
        const release = await lockfile.lock(this.lockfilePath);
        fs.appendFileSync('textfile.txt', '\n' + text);
        release();
    }

    async deleteTextFile() {
        const release = await lockfile.lock(this.lockfilePath);
        fs.unlinkSync('textfile.txt');
        release();
    }
}

const fileUtils = new FileUtils();
Object.freeze(fileUtils);

module.exports = fileUtils;


