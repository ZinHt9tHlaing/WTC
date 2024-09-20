const disk = require('diskusage');
const path = require('path');

// Get disk usage for the current drive (e.g., C: on Windows)
const currentDrive = path.parse(process.cwd()).root;

disk.check(currentDrive, (err, info) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Disk usage for ${currentDrive}:`);
    console.log(`Free: ${info.free}`);
    console.log(`Total: ${info.total}`);
    console.log(`Available: ${info.available}`);
  }
});

