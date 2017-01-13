import request from 'superagent'

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
    const defaults = {
        url: null,
        type: 'post',
        data: {},
        'Content-Type': 'application/json'
    }
    let promise

    options = Object.assign({}, defaults, options)
    promise = request[options.type](options.url).withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key])
        }
    })

    return new Promise(resolve => {
        promise.send(options.data).then(res => {
            resolve(res.body)
        }).catch(err => {
            console.log(err)
        })
    })
}

/**
 * @return {Object} Return url params
 */
function getURLParams() {
    const search = location.search.slice(1),
        rParam = /([^&]*)=([^&]*)/g
    let ret = {},
        param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

export default {
    ajax,
    getURLParams
}
