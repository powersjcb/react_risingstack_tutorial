import React from 'react/addons';

import config from '../../../config/app';

class AppRoot extends React.Component {


  render() {
    return (
      <div className="appRoot">
      <h1>{config.title}</h1>
      </div>
    );
  }

}

// Prop types validation
AppRoot.propTypes = {
  state: React.PropTypes.object.isRequired,
};


export default AppRoot;
