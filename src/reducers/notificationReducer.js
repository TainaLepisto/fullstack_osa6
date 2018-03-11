
/*
 * action types
 */

export const SET = 'SET'
export const CLEAR = 'CLEAR'

/*
 * action creators
 */

export const setNote = (note) => {
  console.log(note)
  return {
    type: SET,
    content: note
  }
}
export const clearNote = () => {
  return {
    type: CLEAR,
    content: ''
  }
}




const initialState =  { content: 'render here something.' }

const notificationReducer = (store = initialState, action) => {
  console.log('notificationReducer')
  console.log(action)
  console.log(action.content)

  if (action.type===SET) {
    return { content: action.content }
  }
  if (action.type === CLEAR) {
    return { content: '' }
  }

  return store
}


export default notificationReducer