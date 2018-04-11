import React from 'react';
import { Form, Label, Input, View } from 'react-native';

export default class ChangeName extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {value: ""}
  }

  handleSubmit(event) {
    alert('Votre pseudo a bien été enregistré')
    global.LoginUser = this.state.value
    event.preventDefault()
  }

  render() {
    return (
      <View>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Change your pseudo :
            <Input type="text" value={this.state.value} onChangeText={(value) => this.setState({value})} />
          </Label>
          <Input type="submit" value="Submit" />
        </Form>
      </View>
    )
  }
}