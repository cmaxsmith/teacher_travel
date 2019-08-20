function setUserLocation(lat, lng) {
  return {
    type: 'SET_USER_LOCATION',
    userLocation: {
      lat,
      lng
    },
    zoom: 13,
    haveUsersLocation: true
  };
};

function setViewLocation(lat, lng) {
  return {
    type: 'SET_VIEW_LOCATION',
    viewLocation: {
      lat,
      lng
    },
    zoom: 13
  }
}

export {
  setUserLocation,
  setViewLocation
};

