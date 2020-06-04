import React from "react";
import BasketListItem from "../BasketListItem";
import AddButton from "../AddButton";

class BasketList extends React.Component {
    state = {
        items: [
            'sabao',
            'sucrilhos'
        ]
    }

    constructor() {
        super();
        
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        this.setState({
            items: [
                ...this.state.items,
                <input type="Text"></input>
            ]
        })
    }

    render () {
        return <div className='basket'>
            <ul>
                {
                    this.state.items.map(product => {
                        return <BasketListItem item={product} />
                    })
                }
            </ul>

            <AddButton action={this.addItem} />
        </div>
    }

    deleteitem(){
        return <div className='basket'>
            
        </div>
    }
}

export default BasketList;