const fs = require('fs');
const fs_extra = require('fs-extra')

const path = require('path');
const basePath = path.resolve('.', 'src', 'modules');
if (process.argv.length < 3) {
    throw 'filename not specified.';
}
const filename = process.argv[process.argv.length - 1];
if (/^[A-Za-z][A-Za-z0-9]+$/.test(filename) === false) {
    throw 'filename must only contain alphabets and numbers';
}
const lowerCase = filename.toLowerCase();
const camelCase = lowerCase[0].toUpperCase() + lowerCase.slice(1);
const folderPath = path.join(basePath, camelCase);

try {
    fs.mkdirSync(folderPath, { recursive: true });

    // Read tsx file and replace the content and move to destination
    fs.readFile(path.resolve('scripts/module_boilerplate/Module.tsx'), 'utf-8', function (err, data) {
        if (err) throw err;
        var newValue = data.replace(/Module/gim, camelCase);
        fs.writeFile(path.join(folderPath, `${camelCase}.tsx`), newValue, 'utf-8', function (err, data) {
            if (err) throw err;
            console.log('Done!');
        })
    })
    fs.readFile(path.resolve('scripts/module_boilerplate/index.tsx'), 'utf-8', function (err, data) {
        if (err) throw err;
        var newValue = data.replace(/Module/gim, camelCase);
        fs.writeFile(path.join(folderPath, `index.tsx`), newValue, 'utf-8', function (err, data) {
            if (err) throw err;
            console.log('Done!');
        })
    })
    fs_extra.copySync(path.resolve('scripts/module_boilerplate/duck'), path.join(folderPath, 'duck'));
} catch (error) {
    throw error;
}