import React from 'react/addons';
import User from './User'

import config from '../../../config/app';

/*
* @class AppRoot
* @extends React.Component
*/
class AppRoot extends React.Component {

  /*
  * AppRootly PureRenderMixin
  * Mixin workaround for ES6
  *
  * @method shouldComponentUpdate
  * @returns {Boolean}
  */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
  * @method render
  * @returns {JSX}
  */
  render() {
    return (
      <div className="appRoot">
        <h1>{config.title}</h1>
        <div className="user">
          {this.props.state.users.map(function(item, key) {
            return <User key={key} item={item} />;
          })}
        </div>
      </div>
    );
  }

}

// Prop types validation
AppRoot.propTypes = {
  state: React.PropTypes.object.isRequired,
};


export default AppRoot;
