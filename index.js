// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const read = (filename) => fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });

fs.writeFile('test.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

try {
  const { dependencies } = JSON.parse(read('../package.json'));
  const lockFile = JSON.parse(read('../package-lock.json'));
  for (const key in dependencies) {
    if (dependencies[key] === 'latest') {
      delete lockFile.packages['node_modules/' + key];
    }
  }
  fs.writeFile('../package-lock.json', JSON.stringify(lockFile, undefined, 2) + '\n', 'utf8', () => null);
} catch (err) {
  console.error('Error:', err);
}
