const initialState = {
    products: false,
    users: false,
  }
  
function reducers(state = initialState, action) {
    switch (action.type) {
    case 'SET_PRODUCTS':
        return { ...state, products: action.payload }
    case 'SET_USERS':
        return { ...state, users: action.payload }
    default:
        return state
        }
    }

export default reducers