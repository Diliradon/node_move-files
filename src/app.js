const fs = require('fs');

const file = process.argv[2];
const moveToFile = process.argv[3];

try {
  fs.renameSync(file, moveToFile);
} catch (err) {
  global.console.error(err);
}
