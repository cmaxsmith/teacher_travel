const initialState = {
  dataSent: false,
  city: '',
  country: '',

}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return {
        ...state,
        dataSent: true,
        city: action.city,
        country: action.country
      }
    default:
      return state
  }
}

export default formReducer