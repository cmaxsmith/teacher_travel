import { connect } from 'react-redux';
import MapPage from '../components/mappage';
import { submitForm } from '../actions/formActions';
import { updateLocation } from '../actions/mapActions'

const mapStateToProps = state => ({
  dataSent: state.formReducer.dataSent,
  city: state.formReducer.city,
  country: state.formReducer.country,
  userLocation: {
    lat: state.mapReducer.userLocation.lat,
    lng: state.mapReducer.userLocation.lng
  },
  zoom: state.mapReducer.zoom,
  haveUsersLocation: state.mapReducer.haveUsersLocation

})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (city, country) => {
    dispatch(submitForm(city, country));
  },

  handleLocation: (lat, lng) => {
    dispatch(updateLocation(lat, lng))
  }

});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage)

export default MapContainer;