import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
export default class extends React.Component {
  
  render() {
    let style = [{
        touch : {
          width: 1,
          height: 120,
          flexGrow: 1,
        },
        image : {
          width: "100%",
          height: "100%",
        }
      }];
    
    
    if (this.props.highlight == 1) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={style[0].touch}>
          <Image source={require('../assets/Rock.jpg')} style={style[0].image}  />
          </TouchableOpacity>
           <TouchableOpacity style={style[0].touch}>
          <Image source={require('../assets/Paper.jpg')} style={style[0].image} />
          </TouchableOpacity>
           <TouchableOpacity style={style[0].touch}>
          <Image source={require('../assets/Scissors.jpg')} style={style[0].image} />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/Rock.jpg')} style={style[0].touch} />
          <Image source={require('../assets/Paper.jpg')} style={style[0].touch} />
          <Image source={require('../assets/Scissors.jpg')} style={style[0].touch} />
      </View>
    );
  }
}
