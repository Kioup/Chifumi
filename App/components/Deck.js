import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
export default class extends React.Component {
  
  
    constructor(props) {
      super(props)
      this.state = { count: "" }
    }
  
    _onPressButton = {
        rock : () => {
          this.setState({
            count: "Pierre"
          })
        },
        paper :  () => {
          this.setState({
            count: "Papier"
          })
        },
        scissors : () => {
          this.setState({
            count: "Ciseaux"
          })
        }
    }
  
  
  render() {
    
    let style = StyleSheet.create({
        touch : {
          width: 1,
          height: 120,
          flexGrow: 1,
        },
        image : {
          width: "100%",
          height: "100%",
        }
      })
    
    
    if (this.props.highlight == 1) {
      return (
        <View>
          <View>
            <Text>{this.state.count}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={style.touch} onPress={this._onPressButton.rock}>
            <Image source={require('../assets/Rock.jpg')} style={style.image}  />
            </TouchableOpacity>
             <TouchableOpacity style={style.touch} onPress={this._onPressButton.paper}>
            <Image source={require('../assets/Paper.jpg')} style={style.image} />
            </TouchableOpacity>
             <TouchableOpacity style={style.touch} onPress={this._onPressButton.scissors}>
            <Image source={require('../assets/Scissors.jpg')} style={style.image} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/Rock.jpg')} style={style.touch} />
          <Image source={require('../assets/Paper.jpg')} style={style.touch} />
          <Image source={require('../assets/Scissors.jpg')} style={style.touch} />
      </View>
    );
  }
}
