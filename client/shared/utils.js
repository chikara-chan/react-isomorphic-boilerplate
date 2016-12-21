import request from 'superagent'

function ajax(options) {
    const defaults = {
        'type': 'post',
        'url': null,
        'data': {},
        'Content-Type': 'application/json'
    }
    let promise

    options = Object.assign({}, defaults, options)
    promise = request[options['type']](options['url']).withCredentials()
    Object.keys(options).forEach(key => {
        if (!key.match(/type|url|data/)) {
            promise.set(key, options[key])
        }
    })

    return new Promise(resolve => {
        promise.send(options['data']).then(res => {
            resolve(res)
        }).catch(err => {
            console.log(err)
        })
    })
}

function formatDate(timestamp, format) {
    const date = new Date(timestamp)
    const years = date.getFullYear().toString()
    const month = date.getMonth().toString()
    const day = date.getDate().toString()
    const hours = date.getMonth().toString()
    const minutes = date.getMinutes().toString()
    const seconds = date.getSeconds().toString()

    return format.replace(/y+|M+|d+|h+|m+|s+/g, match => {
        const length = match.length

        switch (match.charAt(0)) {
            case 'y':
                return years.substr(-length)
            case 'M':
                return (month.length == 1 ? '0' + month : month).substr(-length)
            case 'd':
                return (day.length == 1 ? '0' + day : day).substr(-length)
            case 'h':
                return (hours.length == 1 ? '0' + hours : hours).substr(-length)
            case 'm':
                return (minutes.length == 1 ? '0' + minutes : minutes).substr(-length)
            case 's':
                return (seconds.length == 1 ? '0' + seconds : seconds).substr(-length)
        }
    })
}

function parseDate(str) {
    let results

    if (results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) *$/)) {
        return new Date(parseInt(results[1]), parseInt(results[2]) - 1, parseInt(results[3]))
    } else if (results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/)) {
        return new Date(parseInt(results[1]), parseInt(results[2]) - 1, parseInt(results[3]), parseInt(results[4]), parseInt(results[5]), parseInt(results[6]))
    }
}

function getUrlParams() {
    const search = location.search.slice(1)
    const rParam = /([^&]*)=([^&]*)/g
    let ret = {}
    let param

    while (param = rParam.exec(search)) {
        ret[param[1]] = param[2]
    }

    return ret
}

export default {
    ajax,
    formatDate,
    parseDate,
    getUrlParams
}
