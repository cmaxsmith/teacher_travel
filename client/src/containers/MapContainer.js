import { connect } from 'react-redux';
import MapPage from '../components/mappage';
import { submitForm } from '../actions/formActions';
import { setUserLocation, setViewLocation } from '../actions/mapActions'

const mapStateToProps = state => ({
  dataSent: state.formReducer.dataSent,
  city: state.formReducer.city,
  country: state.formReducer.country,
  userLocation: {
    lat: state.mapReducer.userLocation.lat,
    lng: state.mapReducer.userLocation.lng
  },
  viewLocation: {
    lat: state.mapReducer.viewLocation.lat,
    lng: state.mapReducer.viewLocation.lng
  },
  zoom: state.mapReducer.zoom,
  haveUsersLocation: state.mapReducer.haveUsersLocation

})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (city, country) => {
    dispatch(submitForm(city, country));
  },

  handleUserLocation: (lat, lng) => {
    dispatch(setUserLocation(lat, lng))
  },
  
  handleViewLocation: (lat, lng) => {
    dispatch(setViewLocation(lat, lng))
  }

});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage)

export default MapContainer;