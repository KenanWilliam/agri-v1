const fs = require('fs');
const https = require('https');

const countries = ['KE', 'UG', 'TZ', 'RW', 'ET', 'SS', 'BI', 'MW', 'ZM', 'ZW', 'MZ', 'ZA', 'SN', 'BF', 'ML', 'GH', 'NG', 'LR', 'SL', 'CM', 'CD'];

async function downloadSequentially() {
  for (const code of countries) {
    const hex = code.toUpperCase().split('').map(char => (char.charCodeAt(0) + 127397).toString(16)).join('-');
    const url = `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${hex}.png`;
    const path = `./public/flags/${code.toLowerCase()}.png`;

    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(path);
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        } else {
          console.error(`Failed to download ${code}: ${res.statusCode}`);
          resolve();
        }
      }).on('error', (err) => {
        console.error(`Error downloading ${code}:`, err);
        resolve();
      });
    });
  }
}
downloadSequentially().then(() => console.log('Done!'));
