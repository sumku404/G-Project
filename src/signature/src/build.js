const mjml2html = require("mjml");

const fs = require("fs");

const path = require("path");

const rootFile = __dirname + path.sep + "index.mjml";

const buildDir = "../build/"


fs.readFile(rootFile, "utf-8", (err, data) => {
    if (err) {
        console.error("Read Source File Error:" + err);
        return;
    }
    htmlCompiledOutput = mjml2html(data);

    fs.readdir(buildDir, 'utf-8', (err, files) => {
        if (err) {
            console.error("Clean build folder faild:" + err)
            return
        }

        files.forEach(item => {
            fs.unlinkSync(buildDir + item)
        })

        // fs.writeFile(path.basename(rootFile, '.mjml') + '.html', htmlCompiledOutput.html, err => {
        //     if (err) {
        //         console.error('Export faild:' + err)
        //         return
        //     }
        // })

        console.log(renameExportedFile(rootFile + buildDir))
    })
});

function renameExportedFile(filepath) {
    return __dirname + path.basename(filepath, '.mjml') + '.html';
}
