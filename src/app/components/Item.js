import React from 'react/addons';


class Item extends React.Component {
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  render () {
    return (
      <li className="item">
        <div>Description: { this.props.item.desc }</div>
        <div>Wt: { this.props.item.weight }</div>
        <div>Color: { this.props.item.color }</div>
      </li>
    );
  }

}

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default Item;
