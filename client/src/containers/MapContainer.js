import { connect } from 'react-redux';
import MapPage from '../components/mappage';
import { submitForm } from '../actions/formActions';

const mapStateToProps = state => ({
  dataSent: state.formReducer.dataSent
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: () => {
    dispatch(submitForm());
  },
});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage)

export default MapContainer;