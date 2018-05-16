import React, {Component} from 'react';

import MapView from './MapView.jsx';
import PlayerSprite from './PlayerSprite.jsx';

require("./styles/sin.scss");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobs: [
        {type: 'Player', loc: [5, 7]},
        {type: 'Player', loc: [6, 9]},
      ],
    }
  }

  render() {
    return (
      <div>
        <MapView dim={[12, 12]} sprites={this.state.mobs}>
        </MapView>
      </div>
    );
  }
}


