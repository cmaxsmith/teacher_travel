const initialState = {
  userLocation: {
    lat: 51.505,
    lng: -0.09,
  },
  zoom: 3,
  haveUsersLocation: false,

}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LOCATION':
      return {
        ...state,
        userLocation: {
          lat: action.userLocation.lat,
          lng: action.userLocation.lng
        },
        zoom: 13,
        haveUsersLocation: true
      }
    default:
      return state
  }
}

export default mapReducer