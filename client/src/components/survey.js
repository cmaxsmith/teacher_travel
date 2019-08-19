import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

class Survey extends Component {
  state = {
    city: '',
    country: ''
  }

  formSubmitted = (event) => {
    event.preventDefault()
    console.log(this.state)
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
          <Form onSubmit={this.formSubmitted}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input onChange={this.valueChanged} type="text" name="city" id="city" placeholder="enter a city" />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input onChange={this.valueChanged} type="text" name="country" id="country" placeholder="enter a country" />
            </FormGroup>
            <Button outline color="primary" type="submit" >Submit</Button>
          </Form>
        </Card>
      </div >
    )
  }
};

export default Survey;