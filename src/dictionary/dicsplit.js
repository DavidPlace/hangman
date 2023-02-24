// Converts dictionary file to JSON array.

const fs = require('fs');

fs.readFile('../dictionary/dictionary.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const wordsArray = data.split('\n');
  fs.writeFile('../dictionary/words.json', JSON.stringify(wordsArray), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File saved successfully');
  });
});
