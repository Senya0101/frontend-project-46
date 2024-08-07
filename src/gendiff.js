import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return keys.map((key) => {
    if (!_.has(data2, key)) {
      return { key, type: 'REMOVED', value: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { key, type: 'ADDED', value: data2[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        children: genDiff(data1[key], data2[key]),
        type: 'NESTED',
      };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'CHANGED',
        value1: data1[key],
        value2: data2[key],
      };
    }
    return { key, type: 'UNCHANGED', value: data1[key] };
  });
};

export default genDiff;
