function updateLocation(lat, lng) {
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

export {
  updateLocation
};

