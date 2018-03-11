
/*
 * action types
 */

export const SET = 'SET_FILTER'

/*
 * action creators
 */

export const setFilter = (filter) => {
  return {
    type: SET,
    content: filter
  }
}

const initialState =  { content: '' }


const filterReducer = (store = initialState, action) => {
  switch (action.type) {
  case SET:
    return { content: action.content }
  default:
    return store
  }

}



export default filterReducer