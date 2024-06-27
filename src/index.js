import parseData from './parser.js'
import gendiff from './gendiff.js';

export default (filepath1, filepath2) => {
    const data1 = parseData(filepath1);
    const data2 = parseData(filepath2);
    return gendiff(data1, data2);
  };
  