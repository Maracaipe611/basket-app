import React, { Component } from 'react';

class BasketListItem extends Component {
    render() { 
        const { name, id, editing } = this.props.item;
        return <li className="list-item" key={id}>
            <div className="checkbox-wrapper">
                <input type='checkbox' />
            </div>
            <div className="list-item-details">
                { 
                    !editing ? 
                        name : 
                        <input 
                            type='text' 
                            value={name} 
                            onChange={(e) => this.props.onChange(e, id)}
                            onKeyUp={(e) => this.props.onKeyUp(e, id)} />
                }
            </div>
        </li>;
    }
}
 
export default BasketListItem;