import React from 'react';
import { StackNavigator } from 'react-navigation';

import Menu from "./components/Menu";
import VsIA from "./components/VsIA";
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
  LocalscreenIA: {
    screen: VsIA,
  },
  Multiscreen: {
    screen: Multi,
  }
},{
  initialRouteName: 'Menuscreen',
});