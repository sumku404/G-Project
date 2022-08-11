const mjml2html = require("mjml");

const fs = require("fs");

const path = require("path");


/**
 * For there's only one source file, just linking it directly.
 */
const rootFile = __dirname + path.sep + "index.mjml";


// Export directory
const buildDir = "../build/"


fs.readFile(rootFile, "utf-8", (err, data) => {
    if (err) {
        console.error("Read Source File Error:" + err);
        return;
    }
    htmlCompiledOutput = mjml2html(data);

    fs.readdir(buildDir, 'utf-8', (err, files) => {
        if (err) {
            console.error("Clean build folder faild:" + err);
            return
        }

        files.forEach(item => {
            fs.unlinkSync(buildDir + item);
        })

        fs.writeFile(renameExportedFile(rootFile), htmlCompiledOutput.html, err => {
            if (err) {
                console.error('Export faild:' + err)
                return
            }
        })

    })
});

/**
 * 
 * @param {path} filepath 1 given for source file path
 * @returns modified file name
 */
function renameExportedFile(filepath) {
    return __dirname +
        path.sep +
        buildDir +
        path.basename(filepath, '.mjml').concat('.html');
}
