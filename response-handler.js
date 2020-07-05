// this is the old syntax
// const fs = require('fs');
// you can use core api with promises now
// in the case of the fs package in the old syntax, you have to call it like this
// const fs = require('fs').promises;

// this is the new syntax
// you can use core api with promises now
// in the case of the fs package in the new syntax, you have to call it like this
import fs from 'fs/promises';
import path, { dirname } from 'path'; // you can import multiple functions inline by using ","
import { fileURLToPath } from 'url';

// using this new syntax we don't have acess to global files anymore
// therefore, __dirname does not work anymore
// so this a way to make __dirname work again
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const resHandler = (req, res, next) => {
    // now, instead of using the old approach
    // using callbacks
    // you can switch to this approach
    // using promises
    fs.readFile('my-page.html', 'utf8')
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
        });
    // res.sendFile(path.join(__dirname, 'my-page.html'));
};

// this is the old syntax
// module.exports = resHandler;

// this is the new syntax
// but this is used when exporting only one function per file
// otherwise you have to "add" export in the beginning of the function
// export default resHandler;