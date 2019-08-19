const initialState = {
  dataSent: false
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return {
        ...state,
        dataSent: true
      }
    default:
      return state
  }
}

export default formReducer