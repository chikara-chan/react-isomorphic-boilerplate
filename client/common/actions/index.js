import { REPLACE_USER_INFO } from '../constants/ActionTypes'
import utils from '../../shared/utils'

export function replaceUserInfo(userInfo) {
    return {
        type: REPLACE_USER_INFO,
        userInfo
    }
}

export function fetchUserInfo() {
    return dispatch => {
        utils.ajax({
            url: '/api/user/getUserInfo'
        }).then(res => {
            dispatch(replaceUserInfo(res))
        })
    }
}

