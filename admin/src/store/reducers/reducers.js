const initialState = {
    products: [],
    lastProduct: null,
    users: [],
    productDetail: false,
    productDetailId: 0,
    userDetail: false,
    userDetailId: 0,
    edit: false,
    justProducts: false,
    justUsers: false
  }
  
function reducers(state = initialState, action) {
    switch (action.type) {
    case 'SET_PRODUCTS':
        return { ...state, products: action.payload }
    case 'SET_LAST_PRODUCT':
        return { ...state, lastProduct: action.payload }
    case 'SET_USERS':
        return { ...state, users: action.payload }
    case 'SET_PRODUCT_DETAIL':
        return { ...state, productDetail: action.payload }
    case 'SET_PRODUCT_DETAIL_ID':
        return { ...state, productDetailId: action.payload }
    case 'SET_USER_DETAIL':
        return { ...state, userDetail: action.payload }
    case 'SET_USER_DETAIL_ID':
        return { ...state, userDetailId: action.payload }
    case 'SET_EDIT':
        return { ...state, edit: action.payload }
    case 'SET_JUST_PRODUCTS':
        return { ...state, justProducts: action.payload }
    case 'SET_JUST_USERS':
        return { ...state, justUsers: action.payload }
    default:
        return state
        }
    }

export default reducers