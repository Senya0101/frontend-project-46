import fs from "fs";
import { resolve, extname, isAbsolute } from "path";
import { cwd } from "process";
import yaml from "js-yaml";

const getAbsolutePath = (filepath) => {
  if (isAbsolute(filepath)) {
    return filepath;
  }
  return resolve(cwd(), filepath);
};
const readFile = (filepath) =>
  fs.readFileSync(getAbsolutePath(filepath), "utf8");
const getExtention = (filepath) => extname(filepath).substring(1);

export default (filepath) => {
  let data = readFile(getAbsolutePath(filepath));
  switch (getExtention(filepath)) {
    case "json":
      return JSON.parse(data);
    case "yml":
    case "yaml":
      return yaml.load(data);
    default:
      throw new Error(`Wrong format: '${getExtention(filepath)}'`);
  }
};
