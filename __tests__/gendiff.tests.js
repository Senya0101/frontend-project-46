import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');


test('Check diff for flat JSON file', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFixtureFile('expRes1.txt'));
  });

  test('Check diff for flat YAML file', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toEqual(readFixtureFile('expRes2.txt'));
  });

  test('Check diff for nested JSON file', () => {
    expect(genDiff(getFixturePath('nestfile1.json'), getFixturePath('nestfile2.json'), 'stylish')).toEqual(readFixtureFile('expRes3.txt'));
  });

  test('Check diff for nested YAML file', () => {
    expect(genDiff(getFixturePath('nestfile1.yaml'), getFixturePath('nestfile2.yaml'), 'stylish')).toEqual(readFixtureFile('expRes4.txt'));
  });