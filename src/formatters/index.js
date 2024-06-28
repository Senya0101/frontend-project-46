import formatStylish from './stylish'
import formatPlain from './plain'
import formatJSON from './json'

export default (diffTree, format) => {
    switch (format) {
        case 'stylish':
            return formatStylish(diffTree);
        case 'plain':
            return formatPlain(diffTree);
        case 'json':
            return formatJSON(diffTree);
        }
}