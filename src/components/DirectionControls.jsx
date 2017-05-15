import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],

  getDirections: function() {
    return ['left','right','up','down'];
  },
  render: function() {
    return <div>
      {this.getDirections().map(dir =>
        <button key={dir}
        className={dir}
        onClick={()=>(this.props.changeDirection(dir))}>
          {dir}
        </button>
        )}
    </div>;
  }
});
