/**
 * @param {String} string
 * @param {Number} targetLength
 * @return {String}             Return convert result
 */
function addZeros(str, targetLength = 2) {
    while (str.length < targetLength) {
        str = `0${str}`
    }

    return str
}

/**
 * @param  {Number} timestamp
 * @param  {String} format
 * @return {String}           Return format result
 */
function formatDate(timestamp, format = 'YYYY-MM-DD hh:mm:ss') {
    const date = new Date(timestamp),
        year = `${date.getFullYear()}`,
        month = `${date.getMonth() + 1}`,
        day = `${date.getDate()}`,
        hours = `${date.getHours()}`,
        minutes = `${date.getMinutes()}`,
        seconds = `${date.getSeconds()}`,
        rMatch = /Y+|M+|D+|h+|m+|s+|S+/g

    return format.replace(rMatch, match => {
        const len = match.length

        switch (match[0]) {
            case 'Y':
                return year.slice(-len)
            case 'M':
                return addZeros(month).slice(-len)
            case 'D':
                return addZeros(day).slice(-len)
            case 'h':
                return addZeros(hours).slice(-len)
            case 'm':
                return addZeros(minutes).slice(-len)
            case 's':
                return addZeros(seconds).slice(-len)
        }
    })
}

/**
 * @param  {String} dateStr
 * @return {Number}         Return timestamp
 */
function parseDate(dateStr) {
    const rShortMatch = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/,
        rLongMatch = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/
    let match

    if (match = dateStr.match(rShortMatch)) {
        return +new Date(+match[1], +match[2] - 1, +match[3])
    } else if (match = dateStr.match(rLongMatch)) {
        return +new Date(+match[1], +match[2] - 1, +match[3], +match[4], +match[5], +match[6])
    }
}

export default {
    formatDate,
    parseDate
}
