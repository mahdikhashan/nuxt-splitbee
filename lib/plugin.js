import splitbee from '@splitbee/web';

export default async (ctx, inject) => {
    const runtimeConfig = ctx.$config && ctx.$config.splitbee || {}
    const moduleOptions = <%= serialize(options) %>

    splitbee.init(...options)

    ctx.$splitbee = splitbee
    inject('splitbee', splitbee)
}