import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJSON from './json.js'

export default (diffTree, format) => {
    switch (format) {
        case 'stylish':
            return formatStylish(diffTree);
        case 'plain':
            return formatPlain(diffTree);
        case 'json':
            return formatJSON(diffTree);
        default:
            throw new Error(`Wrong format ${format}`)
        }
}