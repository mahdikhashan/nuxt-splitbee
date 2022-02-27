'use strict'

const { resolve } = require('path')

function nuxtSplitbee(options) {

    if (this.options.dev && process.env.NODE_ENV !== 'production') {
        return
    }

    this.options.head.script.push({
        src: 'https://cdn.splitbee.io/sb.js',
        async: true
    })

    this.addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        fieldName: 'splitbee.js',
        options,
        ssr: false
    })
}

module.exports = nuxtSplitbee
module.exports.meta = require('../package.json')