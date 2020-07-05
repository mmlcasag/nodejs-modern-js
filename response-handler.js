// this is the old syntax
// const fs = require('fs');

// this is the new syntax
import fs from 'fs';
import path, { dirname } from 'path'; // you can import multiple functions inline by using ","
import { fileURLToPath } from 'url';

// using this new syntax we don't have acess to global files anymore
// therefore, __dirname does not work anymore
// so this a way to make __dirname work again
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const resHandler = (req, res, next) => {
  // fs.readFile('my-page.html', 'utf8', (err, data) => {
  //   res.send(data);
  // });
  res.sendFile(path.join(__dirname, 'my-page.html'));
};

// this is the old syntax
// module.exports = resHandler;

// this is the new syntax
// but this is used when exporting only one function per file
// otherwise you have to "add" export in the beginning of the function
// export default resHandler;