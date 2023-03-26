'use strict';

/**
 * read env file , eg: env.sh xxx.env
 *
 * @param filename path env file
 * @param logObj default: false
 * @returns {{}}
 */
function readEnvFile(filename, logObj = false) {
  const fs = require('fs');
  const path = require('path');
  const buffer = fs.readFileSync(path.join(filename));
  const textContent = buffer.toString();

  const split = textContent.split('\n');

  const reduce = split.filter((value) => {
    return value.trim().length > 0;
  }).reduce((map, value) => {
    const regexpKey = /.+(?=\=)/;
    const envKey = value.match(regexpKey)[0];
    const regexpVal = /(?<=\=).+/;
    const envVal = value.match(regexpVal)[0].replace(/\"/g, '');

    if (logObj) {
      console.log(`key=${envKey}\nvalue=${envVal}\n`);
    }

    map[envKey] = envVal;
    return map;
  }, {});

  if (logObj) {
    console.log('\nenvObject=\n', reduce);
  }

  return reduce;
}

module.exports = {
  readEnvFile: readEnvFile,
};