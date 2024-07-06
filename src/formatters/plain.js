import _ from "lodash";

const stringify = (value) => {
  if (_.isObject(value)) return "[complex value]";
  if (_.isString(value)) return `'${value}'`;
  return value;
};

const getPath = (node, current) => {
  if (current !== "") {
    return `${current}.${node.key}`;
  }
  return `${node.key}`;
};

export default (diffTree) => {
  const iter = (diff, path) =>
    diff
      .filter((node) => node.type !== "UNCHANGED")
      .map((node) => {
        const currentPath = getPath(node, path);
        switch (node.type) {
          case "ADDED":
            return `Property '${currentPath}' was added with value: ${stringify(
              node.value
            )}`;
          case "REMOVED":
            return `Property '${currentPath}' was removed`;
          case "CHANGED":
            return `Property '${currentPath}' was updated. From ${stringify(
              node.value1
            )} to ${stringify(node.value2)}`;
          case "NESTED":
            return iter(node.children, currentPath).join("\n");
          default:
            throw new Error("Wrong node type");
        }
      });
  return iter(diffTree, "").join("\n");
};
