const { resolve } = require('path')

function nuxtSplitbee(options) {

    this.addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        fieldName: 'splitbee.js',
        options,
        ssr: false
    })
}

module.exports = nuxtSplitbee
module.exports.meta = require('../package.json')