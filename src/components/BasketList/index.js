import React from "react";
import { v4 as uuid } from "uuid";
import BasketListItem from "../BasketListItem";
import AddButton from "../AddButton";

class BasketList extends React.Component {
    state = {
        items: [
            {
                'id': uuid(),
                'name': 'sabao',
                'editing': false
            },
            {
                'id': uuid(),
                'name': 'sucrilhos',
                'editing': false
            },
        ]
    }

    constructor() {
        super();
        
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(event, id) {

        var items = this.state.items.map(product => {
            if (product.id === id) {
                product.name = event.target.value;
            }

            return product;
        });

        this.setState({
            items
        })
    }

    handleKeyUp(event, id) {
        if (event.keyCode !== 13) return false;

        var items = this.state.items.map(product => {
            if (product.id === id) {
                product.editing = !product.editing;
            }

            return product;
        });

        this.setState({
            items
        })
    }

    addItem() {
        this.setState({
            items: [
                ...this.state.items,
                {
                    "id": uuid(),
                    "name": '',
                    "editing": true
                }
            ]
        })
    }

    render () {
        return <div className='basket'>
            <ul>
                {
                    this.state.items.map(product => {
                        return <BasketListItem item={product} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
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