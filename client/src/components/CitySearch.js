import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';
import cityFinder from '../services/searchService'

class CitySearch extends Component {
  state = {
    city: ''
  }
  valueChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const { city } = this.state;
    const { handleViewLocation } = this.props;
    cityFinder(city).then(searchData => {
      let lat = searchData.results[0].geometry.lat;
      let lng = searchData.results[0].geometry.lng;
      handleViewLocation(lat, lng)
    })

  }

  render() {
    return (
      <div>
        <Card body>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input onChange={this.valueChanged} type="text" name="city" id="city" placeholder="City" />
            </FormGroup>

            <Button
              outline color="primary"
              type="submit"
            // disabled={!this.formIsValid()}
            >Search City</Button>
          </Form>
        </Card>
      </div >
    )
  }
}

export default CitySearch