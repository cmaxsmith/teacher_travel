import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap';

class SearchBar extends Component {

  render() {
    return (
      <div>
        <Card body>
          <Form onSubmit={this.searchSubmitted}>
            <FormGroup>
              <Input onChange={this.valueChanged} type="text" name="city" id="city" placeholder="Search the Map" />
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