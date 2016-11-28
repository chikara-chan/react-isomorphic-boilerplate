/**
 * Created at 16/5/16.
 * @Author Ling.
 * @Email i@zeroling.com
 */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment () {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement () {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd () {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }
    dispatch(increment())
  }
}

export function incrementAsync () {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, 1000)
  }
}