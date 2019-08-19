import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';
import Joi from 'joi';
import yellowSpinner from '../assets/yellow-spinner.svg'

const schema = Joi.object().keys({
  city: Joi.string().required(),
  country: Joi.string().required(),
  // regex(/^[A-zÀ-ÿ ]{1, 100}$/)
  // latitude: Joi.number().min(-90).max(90).required(),
  // longitude: Joi.number().min(-180).max(180).required(),
  // date: Joi.date(),
});

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/v1/citydata' : 'production-url-here'

class Survey extends Component {
  state = {
    city: '',
    country: '',
    sendingData: false,
    sentData: false,
  }

  formIsValid = () => {
    const cityData = {
      city: this.state.city,
      country: this.state.country
    }
    const result = Joi.validate(cityData, schema);

    return result.error ? false : true;

  }

  formSubmitted = (event) => {
    this.setState({
      sendingData: true
    })
    event.preventDefault()
    console.log(this.state)
    if (this.formIsValid()) {
      fetch(API_URL, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          city: this.state.city,
          country: this.state.country
          // latitude: this.state.location.lat,
          // longitude: this.state.location.lng
        })
      }).then(res => res.json())
        .then(message => {
          console.log(message)
          setTimeout(() => {
            this.setState({
              sendingData: false,
              sentData: true
            })
          }, 1000)
        })
    }
  }

  valueChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <div>
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          {!this.state.sendingData && !this.state.sentData ?
            <Form onSubmit={this.formSubmitted}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input onChange={this.valueChanged} type="text" name="city" id="city" placeholder="enter a city" />
              </FormGroup>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input onChange={this.valueChanged} type="text" name="country" id="country" placeholder="enter a country" />
              </FormGroup>
              <Button outline color="primary" type="submit" disabled={!this.formIsValid()}>Submit</Button>
            </Form> :
            this.state.sendingData ?
              <img src={yellowSpinner} /> :
              <CardText> Thanks for submitting </CardText>
          }
        </Card>
      </div >
    )
  }
};

export default Survey;