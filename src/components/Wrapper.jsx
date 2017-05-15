import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import DirectionDisplay from './DirectionDisplay';
import DirectionControls from './DirectionControls';


export const Wrapper = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      <h1>Wrapper</h1>
      <DirectionDisplay {...this.props} />
      <DirectionControls {...this.props} />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    direction: state.get('direction')
  };
}

export const WrapperContainer = connect(mapStateToProps, actionCreators)(Wrapper);
