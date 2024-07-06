import parseData from "./parser.js";
import { genDiff } from "./gendiff.js";
import format from "./formatters/index.js";

export default (filepath1, filepath2, formatType) => {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);
  return format(genDiff(data1, data2), formatType);
};
