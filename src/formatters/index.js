import formatStylish from './stylish'
import formatPlain from './plain'

export default (diffTree, format) => {
    switch (format) {
        case 'stylish':
            return formatStylish(diffTree);
        case 'plain':
            return formatPlain(diffTree);
        }
}