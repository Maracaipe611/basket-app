import React, { Component } from 'react';

class BasketListItem extends Component {
    render() { 
        return <li className="list-item">
            <div className="checkbox-wrapper">
                <input type='checkbox' />
            </div>
            <div className="list-item-details">
                { this.props.item }
            </div>
        </li>;
    }
}
 
export default BasketListItem;