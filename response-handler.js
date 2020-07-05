// this is the old syntax
// const fs = require('fs');

// this is the new syntax
import fs from 'fs';

export const resHandler = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8', (err, data) => {
    res.send(data);
  });
};

// this is how we used to do
// module.exports = resHandler;

// this works only when there's only one thing to export
// otherwise you have to put "export" in the front of the function you want to export
// export default resHandler;