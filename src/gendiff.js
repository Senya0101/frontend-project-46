import _ from 'lodash';

export default(data1, data2) => {
    const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
    let res = ''
    keys.forEach(function(key) {
        if (_.has(data1, key) && _.has(data2, key) && data1[key] === data2[key]) {
            res += `    ${key}: ${data1[key]}\n`;
        } else {
            if (_.has(data1, key)) {
                res += `  - ${key}: ${data1[key]}\n`;
            } 
            if (_.has(data2, key)) {
                res += `  + ${key}: ${data2[key]}\n`;
            }
        }
    });
    return `\n{\n${res}}`;
}