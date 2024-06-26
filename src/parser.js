import fs from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import yaml from 'js-yaml'

const getAbsolutePath = (filepath) => resolve(cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf8');
const getExtention = (filepath) => extname(filepath).substring(1);

export default(filepath) => {
    let data = readFile(getAbsolutePath(filepath));
    switch (getExtention(filepath)) {
        case 'json':
          return JSON.parse(data);
        case 'yml':
        case 'yaml':
          return yaml.load(data);
      }
}