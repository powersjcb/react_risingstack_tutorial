import React from 'react/addons';
import Item from './Item'

/*
*
*
*/

class User extends React.Component {

  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  render () {
    console.log(this.props.item)

    return (
      <div className="user">
        <h2>{this.props.item.name}</h2>
        <ul>
          {this.props.item.items.map(function (item, key) {
            return <Item key={key} item={item} />;
          })}
        </ul>
      </div>
    );
  }

}



Item.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default User;
