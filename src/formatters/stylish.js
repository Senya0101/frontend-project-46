import _ from 'lodash';

const indent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const lines = _.entries(data).map(([key, value]) => `${indent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return ['{', ...lines, `  ${indent(depth)}}`].join('\n');
};

const getStylishDiff = (node, depth, iter) => {
  switch (node.type) {
    case 'ADDED':
      return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
    case 'REMOVED':
      return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
    case 'UNCHANGED':
      return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
    case 'CHANGED':
      return [
        `${indent(depth)}- ${node.key}: ${stringify(node.value1, depth)}`,
        `${indent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`,
      ].join('\n');
    case 'NESTED':
      return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1)}\n  ${indent(depth)}}`;
    default:
      throw new Error('Wrong node type');
  }
};

export default(diffTree) => {
    const iter = (nodes, depth = 1) => {
        const newNodes = nodes.map((node) => getStylishDiff(node, depth, iter));
        return newNodes.join('\n');
      };
      return `{\n${iter(diffTree)}\n}`;
}