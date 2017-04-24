import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'nectarine';

import Spot from './Spot';

class SpotsMap extends Component {
  static defaultProps = {
    center: {lat: 36.111669, lng: -115.141018},
    zoom: 19
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDBvguT8pFWdDPHafS-vRjHiFEWgYNSkQ8'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Spot
          lat={36.111669}
          lng={-115.141018}
        />
      </GoogleMapReact>
    )
  }
}

const mapProps = (store) => {
  return {}
}

export default connect({
  component: SpotsMap,
  mapProps
});