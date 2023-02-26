const fs = require('fs');
let sigs = new Map();
let clashes = new Map();
fs.readFileSync('./openchainSigs.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    let sl = line.split(',');
    if (sl[0].length == 10) {
        let signature = sl[0];
        if (sigs.has(signature)) {
            if (!clashes.has(signature)) {
                clashes.set(signature);
                fs.appendFile('./clashes.txt', signature + "\r\n", err => {
                    if (err) {
                        console.error(err);
                    }
                })
            }
        }
        else {
            sigs.set(signature, true);
        }

    }
})