import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import bluedotradius from '../assets/blue-dot-radius.png';
import Survey from './survey';
import SearchBar from './SearchBar';
import { ReactLeafletSearch } from 'react-leaflet-search';
import CitySearch from './CitySearch';



let myIcon = L.icon({
  iconUrl: bluedotradius,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
})


class MapPage extends Component {

  componentDidMount() {
    const { handleUserLocation, handleViewLocation } = this.props
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      handleUserLocation(latitude, longitude)
      handleViewLocation(latitude, longitude)
      console.log(position.coords.latitude, position.coords.longitude);
    })
  }

  render() {
    const userLocation = [this.props.userLocation.lat, this.props.userLocation.lng]
    const viewLocation = [this.props.viewLocation.lat, this.props.viewLocation.lng]

    return (
      <div>
        <Map className="map" center={viewLocation} zoom={this.props.zoom}>

          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.haveUsersLocation ?
            <Marker
              position={userLocation}
              icon={myIcon}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
            </Marker> : ''
          }
        </Map>
        <div className="message-form">
          <Survey handleSubmit={this.props.handleSubmit} city={this.props.city} country={this.props.country} />
        </div>
        <div className="search-bar">
          <CitySearch handleViewLocation={this.props.handleViewLocation} />
        </div>
      </div>
    )
  }
}

export default MapPage;