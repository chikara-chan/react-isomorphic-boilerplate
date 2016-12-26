import types from '../constants/ActionTypes'
import utils from '../../shared/utils'

function replaceUserInfo(userInfo) {
    return {
        type: types.REPLACE_USER_INFO,
        userInfo
    }
}

function fetchUserInfo() {
    return dispatch => {
        utils.ajax({url: '/api/user/getUserInfo'}).then(res => {
            dispatch(replaceUserInfo(res))
        })
    }
}

export default {
    replaceUserInfo,
    fetchUserInfo,
    clearUserInfo
}
