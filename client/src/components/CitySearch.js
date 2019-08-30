import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';
import cityFinder from '../services/searchService'

class CitySearch extends Component {
  state = {
    city: '',
    formatted: '',
    index: 0,
    search_results: null,
    search_results_number: null
  }

  valueChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { city, index } = this.state;
    cityFinder(city)
      .then(searchData => {
        this.setState({
          index: 0,
          search_results: searchData.results,
          formatted: searchData.results[index].formatted,
          search_results_number: searchData.results.length
        })
        console.log('state', this.state)
      })
      .then(() => {
        this.locateCity()
      })
  }

  locateCity = () => {
    const { index, search_results } = this.state;
    const { handleViewLocation } = this.props;
    let lat = search_results[index].geometry.lat;
    let lng = search_results[index].geometry.lng;
    handleViewLocation(lat, lng)
  }

  handleNext = (amount) => {
    const { index, search_results } = this.state;
    const { handleViewLocation } = this.props;
    let lat = search_results[index + amount].geometry.lat;
    let lng = search_results[index + amount].geometry.lng;
    this.setState({
      index: index + amount,
      formatted: search_results[index + amount].formatted
    })
    handleViewLocation(lat, lng)
  }

  render() {
    return (
      <div>
        <Card body>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input onChange={this.valueChanged} type="text" name="city" id="city" placeholder="City" />
            </FormGroup>
            <CardText>Location: {this.state.formatted}
              Results: {this.state.search_results_number}
            </CardText>
            <Button
              outline color="primary"
              type="submit"
            // disabled={true}
            >Search City</Button>
          </Form>
          <Button onClick={() => {
            this.handleNext(-1)
          }}
            outline color="primary"
            type="submit"
          >Previous</Button>
          <Button onClick={() => {
            this.handleNext(1)
          }}
            outline color="primary"
            type="submit"
          >Next</Button>
        </Card>
      </div >
    )
  }
}

export default CitySearch