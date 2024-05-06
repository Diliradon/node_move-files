const fs = require('fs');

const moveToFile = process.argv[3];
const file = process.argv[2];

try {
  fs.renameSync(file, moveToFile);
} catch (err) {
  global.console.error(err);
}
