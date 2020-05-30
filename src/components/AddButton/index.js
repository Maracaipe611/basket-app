import React, { Component } from 'react';

class AddButton extends Component {
    render() { 
        return ( 
            <button className='add-button' onClick={this.props.action}>
                +
            </button>
         );
    }
}
 
export default AddButton;