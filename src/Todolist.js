import React, { Component } from 'react';
import TodoItems from './TodoItems'
import "./TodoList.css";

export default class todolist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items :[]
        };

        this.addItem= this.addItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
    }
    
    addItem (e) {
        if (this._textElement.value !== "") {
            var newItem ={
                text : this._textElement.value,
                priority : this._priorityElement.value,
                key : Date.now()
            };


            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem)
                };
            });
            
        }
        
        this._textElement.value="";
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems= this.state.items.filter(function (item) {
            return ( item.key !== key)
        }); 
    
        this.setState({
            items: filteredItems
        });
    }



    render() {

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref= {(a) => this._textElement = a } placeholder="enter task">
                        </input>
                        <select ref={(b) => this._priorityElement = b }>
                            <option value="1">High</option>
                            <option value="2">Major</option>
                            <option value="3">Medium</option>
                            <option value="4">Low</option>
                        </select>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items}
                            delete = {this.deleteItem} 
                            onClick={() => this.sortBy('priority')}/>
            </div>
        );
    }
}