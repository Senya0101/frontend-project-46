import fs from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

const getAbsolutePath = (filepath) => resolve(cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf8');

export default(filepath) => {
    return JSON.parse(readFile(getAbsolutePath(filepath)))
}