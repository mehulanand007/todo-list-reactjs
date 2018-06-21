import React,{Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {
        constructor(props){
        super(props);

        this.state={
            inputValue: '',
            items:[]
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }
    componentDidMount() {
        this._inputElement.focus();
    }
    addItem(e){
        if(this.state.inputValue !== ""){
            var newItem = {
                text: this.state.inputValue,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem),
                    inputValue: ''
                };
            });
        }

        console.log(this.state.items);

        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
    render(){
        return(            
            <div className="todoListMain">
                <div className="header">
                <h1>MY TODO LIST</h1>
                    <form onSubmit={this.addItem}>
                        <input 
                            value={this.state.inputValue} 
                            onChange={e => this.setState({inputValue: e.target.value})} 
                            ref={(a) => this._inputElement = a}
                             placeholder="Enter task">
                        </input>
                        <button type="submit">ADD</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                delete={this.deleteItem}/>
            </div>
        );
    }
}


export default TodoList;