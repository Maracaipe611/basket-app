import React, { Component } from 'react';

class DeleteButton extends Component {
    render() { 
        return ( 
            <button className='delete-button' onClick={this.props.action}>
                -
            </button>
         );
    }
}
 
export default DeleteButton;