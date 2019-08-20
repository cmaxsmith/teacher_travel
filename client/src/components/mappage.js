import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import bluedotradius from '../assets/blue-dot-radius.png';
import Survey from './survey';



let myIcon = L.icon({
  iconUrl: bluedotradius,
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50]
})


class MapPage extends Component {
  // state = {
  //   location: {
  //     lat: 51.505,
  //     lng: -0.09,
  //   },
  //   zoom: 3,
  //   haveUsersLocation: false
  // }

  componentDidMount() {
    const { handleLocation } = this.props
    navigator.geolocation.getCurrentPosition((position) => {
      handleLocation(position.coords.latitude, position.coords.longitude)
      // this.setState({
      //   location: {
      //     lat: position.coords.latitude,
      //     lng: position.coords.longitude
      //   },
      //   zoom: 13,
      //   haveUsersLocation: true
      // })
      console.log(position.coords.latitude, position.coords.longitude);
      console.log(this.props)
    })
  }

  render() {
    console.log(this.props)
    const position = [this.props.userLocation.lat, this.props.userLocation.lng]
    return (
      <div>
        <Map className="map" center={position} zoom={this.props.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.haveUsersLocation ?
            <Marker
              position={position}
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
      </div>
    )
  }
}

export default MapPage;