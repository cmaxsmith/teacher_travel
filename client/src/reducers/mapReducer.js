const initialState = {
  userLocation: {
    lat: 51.505,
    lng: -0.09,
  },
  zoom: 3,
  haveUsersLocation: false,
  viewLocation: {
    lat: 51.505,
    lng: -0.09
  }
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
    case 'SET_VIEW_LOCATION':
      return {
        ...state,
        viewLocation: {
          lat: action.viewLocation.lat,
          lng: action.viewLocation.lng
        },
        zoom: 13,
      }
    default:
      return state
  }
}

export default mapReducer