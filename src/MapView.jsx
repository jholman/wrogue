import React, {Component} from 'react';
import PlayerSprite from './PlayerSprite.jsx';

import _ from 'lodash';

function spriteToReactElement(sprite) {
  var known_types = {
    Player:   (s) => <PlayerSprite key='2' loc={s.loc} />,
  };
  if (known_types[sprite.type]) return known_types[sprite.type](sprite);
}

let MapViewCell = (props) => {
  let sprites = props.sprites.map(spriteToReactElement);
  return (
    <td key={"cell_"+props.row+"_"+props.col} id={"cell_"+props.row+"_"+props.col} className='cell'>
      {sprites}
    </td>
  )
}

let MapViewRow = (props) => {
  let cells = _.range(props.rowLength).map(col => (
    <MapViewCell
      key={`cell_${props.row}_${col}`}
      row={props.row}
      col={col}
      sprites={props.sprites.filter(sprite => (sprite.loc[1] === props.row && sprite.loc[0] === col))}
    ></MapViewCell>
  ));
  return (
    <tr key={"row_"+props.row} id={"row_"+props.row}>
      {cells}
    </tr>
  );
}



export default class MapView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lines = _.range(this.props.dim[1]).map(row => (
      <MapViewRow
        key={'row_'+row}
        row={row}
        rowLength={this.props.dim[0]}
        sprites={this.props.sprites.filter(sprite => (sprite.loc[1] === row))}
        fuck={[]}
      ></MapViewRow> 
    ));
    return (
      <table>
        <tbody>
          {lines}
        </tbody>
      </table>
    );
  }
}
