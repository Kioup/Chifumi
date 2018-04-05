import React from 'react';
import { Text, View } from 'react-native';

export default class Local extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Local Screen</Text>
      </View>
    );
  }
}