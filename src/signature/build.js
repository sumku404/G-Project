const mjml2html = require('mjml');

const fs = require('fs');

const path = require('path');

const sourceDir = './src';

const buildDir = './build';

const isFile = fileName => {
    //return Extend name ending with .mjml
    return fs.lstatSync(fileName).isFile() && path.extname(fileName) == '.mjml';
}

let sourceFiles = fs.readdirSync(sourceDir).map(fileName => {
    return path.join(sourceDir, fileName)
}).filter(isFile);

cleanBuildDirectory();

sourceFiles.forEach(item => {

    let fileBaseName = path.basename(item, '.mjml');
    
    fs.readFile(item, 'utf-8', (err, data) => {
        if (err) {
            console.error('Read file faild: ' + err)
            return
        }
        
        //Compile template to raw HTML document
        let htmlCompiledOutput = mjml2html(data); //return an [object], not a string

        fs.writeFile(buildDir.concat(path.sep, fileBaseName, '.html'), htmlCompiledOutput.html, err => {
            if (err) {
                console.error('Write file faild: ' + err)
                return
            }
        })

    })
});



/**
 * Clean build caches
 */
function cleanBuildDirectory() {
    let caches = fs.readdirSync(buildDir, 'utf-8')
    caches.forEach(item => {
        fs.unlinkSync(buildDir + path.sep + item)
    })
}
