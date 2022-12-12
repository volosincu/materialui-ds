/**
 * copy-build-helper.mjs is a helper to replace copyFiles
 *
 * copyfiles -u does behave different depending the operating system in which runs
 */

import * as fs from 'fs-extra';
import { exit } from 'process';
import * as path from 'path';

const ARGS = process.argv.slice(2);
let DESTINATION_DIR = './dist';
let SOURCE_DIR = null;
const BASENAME = path.basename(process.argv[1]);

let DEBUG_FLAG = ARGS.includes('--v') || ARGS.includes('--verbose');

/**
 * Logs message to console only if the debug flag is set
 * @param {any} What to output to the console
 */
const debug = (...args) => DEBUG_FLAG && console.log(...args);

const EXEC_TIME = new Date().toLocaleString();

function parseOptions() {
  if (ARGS.length === 0 || ARGS.includes('--h') || ARGS.includes('--help')) {
    printHelp();
    if (ARGS.length === 0) {
      exit(1);
    } else {
      exit(0);
    }
  }

  if (!ARGS.includes('--in')) {
    printHelp();
    exit(1);
  }

  ARGS.forEach(async (option, index) => {
    const value = ARGS[index + 1] ?? '';
    switch (option) {
      case '--in':
        if (value.startsWith('-')) {
          console.error(`Invalid value for parameter --in: '${value}'.`);
          printHelp();
          exit(1);
        }
        SOURCE_DIR = value;
        debug('Parsing --in arg', SOURCE_DIR);
        break;

      case '--out':
        if (value.startsWith('-')) {
          console.error(`Invalid value for --out: '${value}'.`);
          printHelp();
          exit(1);
        }
        DESTINATION_DIR = value;
        debug('Parsing --out arg', DESTINATION_DIR);
        break;

      case '--v':
      case '--verbose':
        // already parsed
        // but added here to prevent going to the default case
        DEBUG_FLAG = true;
        break;

      default:
        option.startsWith('--') &&
          console.warn(`Ignoring unknown parameter '${option}'.`);
    }
  });
}

/**
 * Print the help message
 */
const printHelp = () => {
  const helpMessage = `
Usage:
node ${BASENAME} --in <path> [--out <path>] [--verbose]

  --in <path>
    REQUIRED
    Source path: ${SOURCE_DIR} 

  --out <path>
    OPTIONAL
    Destination path: ${DESTINATION_DIR}. Defaults to "./dist".

Example:
node ${BASENAME} --in ./src/some-path --out ./dist --verbose
`;

  console.log(helpMessage);
};

const main = async () => {
  debug('Execution started', EXEC_TIME);

  parseOptions();

  try {
    fs.copy(SOURCE_DIR, DESTINATION_DIR, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Copy ${SOURCE_DIR} ==> ${DESTINATION_DIR}: ✅`);
      }
    });
  } catch (err) {
    console.error(err.message);
    exit(1);
  }
};

main();
