/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView from './MapView.js';

function onRegionChange(event) {
  console.log('changed!')
}

const App: () => React$Node = () => {
  // 五倍紅寶石的經緯度座標
  var region = {
    latitude: 25.04279517892524,
    longitude: 121.51393610883859,

    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  };

  return <MapView region={region}
                  zoomEnabled={false}
                  onRegionChange={onRegionChange}
                  style={{flex: 1}}/>;
};


export default App;
