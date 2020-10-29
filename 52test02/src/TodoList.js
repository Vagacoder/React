// import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            newTask: '',
            tasks: [],
            isDone: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClickOnItem = this.handleClickOnItem.bind(this);
        this.getRemainedTask = this.getRemainedTask.bind(this);
    }
    
    handleChange(event) {    
        this.setState({newTask: event.target.value});  
    }

    onSubmit(event){
        event.preventDefault();
        let tasks = this.state.tasks.slice();
        let newTask = this.state.newTask;
        let isDone = this.state.isDone.slice();

        tasks.push(newTask);
        isDone.push(false);
        this.setState({newTask:'', tasks: tasks, isDone: isDone });
    }

    handleClickOnItem(event){
        let index = event.target.id;
        let isDone = this.state.isDone.slice();
        isDone[index] = !isDone[index];
        this.setState({isDone});
        event.target.classList.toggle("is-done")
    }

    getRemainedTask(){
        let sum = 0;
        for (let isTaskDone in this.state.isDone){
            console.log(isTaskDone);
            if(!isTaskDone){
                sum++;
            }
        }
        return sum;
    }
    
    render() {

        const todoList = this.state.tasks.map((task, index) => {
            return (
                <li key={task + index} id={index} onClick={this.handleClickOnItem}>
                    {task}
                </li>
            );
        })

        const sum = this.state.isDone.length - this.state.isDone.filter(Boolean).length;


        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='task' value={this.state.newTask} onChange={this.handleChange} />
                    <button type='submit' value='Add'>Add</button>
                </form>
                <div className='task-counter'>{`${sum} remaining out of ${this.state.tasks.length} tasks`}</div>
                {this.state.tasks.length===0?null:<ul>{todoList}</ul>}
                {/* <ul>{this.state.tasks.length===0?null:todoList}</ul> */}
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}
