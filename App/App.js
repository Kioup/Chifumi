import React from 'react';
import { StackNavigator } from 'react-navigation';

import Menu from "./components/Menu";
import Local from "./components/Local";
import Multi from "./components/Multi";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
  Menuscreen: {
    screen: Menu,
  },
  Localscreen: {
    screen: Local,
  },
  Multiscreen: {
    screen: Multi,
  }
},{
  initialRouteName: 'Menuscreen',
});