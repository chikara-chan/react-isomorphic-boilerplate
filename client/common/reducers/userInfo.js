import types from '../constants/ActionTypes'

export default function userInfo(state = null, action) {
    switch (action.type) {
        case types.REPLACE_USER_INFO:
            return action.userInfo
        case types.CLEAR_USER_INFO:
            return null
        default:
            return state
    }
}
