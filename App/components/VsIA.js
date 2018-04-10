import React from 'react';
import { Text, View } from 'react-native';
import Deck from './Deck';

export default class VsIA extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        vue : (
        <View style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
          }}>
            <View>
              <Text>Player VS IA</Text>
            </View>
            <View>
    
              <Deck highlight="1" />
            </View>
          </View>
        
        
        
        )
      }
    }
  
  
  render() {
    return this.state.vue
  }
}
