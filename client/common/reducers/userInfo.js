import {REPLACE_USER_INFO} from '../constants/ActionTypes'

export default function userInfo(state = null, action) {
    switch (action.type) {
        case REPLACE_USER_INFO:
            return action.userInfo
        default:
            return state
    }
}
