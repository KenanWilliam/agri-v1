const fs = require('fs');

const { publicDownloads } = require('./lib/public-downloads.ts_compiled.js'); // wait, I can't require TS directly easily without ts-node.

// Let's just read and regex or just write it explicitly.
