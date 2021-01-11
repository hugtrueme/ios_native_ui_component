import PropTypes from 'prop-types';
import React from 'react';
import { requireNativeComponent } from 'react-native';

class MapView extends React.Component {
  _onRegionChange = (event) => {
    if (!this.props.onRegionChange) {
      return;
    }

    this.props.onRegionChange(event.nativeEvent);
  }
  render() {
    return <RNTMap {...this.props} />;
  }
}

MapView.propTypes = {

  // 是否允許 Zoom In/Out
  zoomEnabled: PropTypes.bool,

  // 欲顯示的區域
  region: PropTypes.shape({

    // 中心點
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,

    // 跨度
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),

  onRegionChange: PropTypes.func,
};

var RNTMap = requireNativeComponent('RNTMap', MapView);

module.exports = MapView;
