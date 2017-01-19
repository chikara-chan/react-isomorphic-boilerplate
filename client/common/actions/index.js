import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceUserInfo(userInfo) {
    return {
        type: types.REPLACE_USER_INFO,
        userInfo
    }
}

function clearUserInfo() {
    return {type: types.CLEAR_USER_INFO}
}

function fetchUserInfo() {
    return dispatch => {
        utils.ajax({
            url: '/api/user/getUserInfo',
            type: 'get'
        }).then(res => {
            dispatch(replaceUserInfo(res))
        })
    }
}

export default {
    replaceUserInfo,
    fetchUserInfo,
    clearUserInfo
}
