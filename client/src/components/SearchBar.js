import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';
// import Joi from 'joi';

// const schema = Joi.object().keys({
//   location: {
//     // lat: Joi.number().min(-90).max(90).required(),
//     // lng: Joi.number().min(-180).max(180).required(),
//     lat: Joi.number().required(),
//     lng: Joi.number().required(),
//   }
// });

class SearchBar extends Component {
  state = {
    lat: '',
    lng: ''
  }
  valueChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  // formIsValid = () => {
  //   const cityData = {
  //     city: this.state.city,
  //     country: this.state.country
  //   }
  //   const result = Joi.validate(cityData, schema);

  //   return result.error ? false : true;
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    const { lat, lng } = this.state;
    const { handleViewLocation } = this.props;
    handleViewLocation(lat, lng)
  }

  render() {
    return (
      <div>
        <Card body>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input onChange={this.valueChanged} type="text" name="lat" id="lat" placeholder="Latitude" />
            </FormGroup>
            <FormGroup>
              <Input onChange={this.valueChanged} type="text" name="lng" id="lng" placeholder="Longitude" />
            </FormGroup>
            <Button
              outline color="primary"
              type="submit"
            // disabled={!this.formIsValid()}
            >Search</Button>
          </Form>
        </Card>
      </div >
    )
  }
}

export default SearchBar