'use strict'

const { resolve } = require('path')

export default function nuxtSplitbee(moduleOptions) {

    const options = {
        ...moduleOptions,
        ...this.options.splitbee
    }

    if (options.dev && process.env.NODE_ENV !== 'production') {
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

module.exports.meta = require('../package.json')