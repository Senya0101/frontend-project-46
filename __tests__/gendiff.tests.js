import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('Check diff for flat JSON files with stylish output format', () => {
  expect(
    genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json'),
      'stylish',
    ),
  ).toEqual(readFixtureFile('expRes1.txt'));
});

test('Check diff for flat YAML files with stylish output format', () => {
  expect(
    genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish'),
  ).toEqual(readFixtureFile('expRes2.txt'));
});

test('Check diff for nested JSON files with stylish output format', () => {
  expect(
    genDiff(
      getFixturePath('nestfile1.json'),
      getFixturePath('nestfile2.json'),
      'stylish',
    ),
  ).toEqual(readFixtureFile('expRes3.txt'));
});

test('Check diff for nested YAML files with stylish output format', () => {
  expect(
    genDiff(
      getFixturePath('nestfile1.yaml'),
      getFixturePath('nestfile2.yaml'),
      'stylish',
    ),
  ).toEqual(readFixtureFile('expRes4.txt'));
});

test('Check diff for nested JSON files with plain output format', () => {
  expect(
    genDiff(
      getFixturePath('nestfile1.json'),
      getFixturePath('nestfile2.json'),
      'plain',
    ),
  ).toEqual(readFixtureFile('expRes5.txt'));
});

test('Check diff for nested YAML files with plain output format', () => {
  expect(
    genDiff(
      getFixturePath('nestfile1.yaml'),
      getFixturePath('nestfile2.yaml'),
      'plain',
    ),
  ).toEqual(readFixtureFile('expRes6.txt'));
});

test('Check diff for YAML and JSON files with JSON output format', () => {
  expect(
    genDiff(
      getFixturePath('nestfile1.yaml'),
      getFixturePath('nestfile2.yaml'),
      'json',
    ),
  ).toEqual(readFixtureFile('expRes7.txt'));
  expect(
    genDiff(
      getFixturePath('nestfile1.json'),
      getFixturePath('nestfile2.json'),
      'json',
    ),
  ).toEqual(readFixtureFile('expRes8.txt'));
});
