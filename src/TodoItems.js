import React from 'react';

class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        };
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks( item ) {
        return <div className={'theList _' + item.priority } key={item.key}><li>{item.text}</li><button onClick={() => this.delete(item.key)}>Remove</button></div>
    }

  
     componentD
 
    render () {
        var todoEntries =this.props.entries;
        var newArr = todoEntries.sort(function(a, b){
            return a.priority-b.priority
        });
          console.log(newArr)
        var listItems =newArr.map(this.createTasks);

        return (
            <ul className="theList">
            {listItems}
            </ul>
        ) 
    }
}

export default TodoItems;