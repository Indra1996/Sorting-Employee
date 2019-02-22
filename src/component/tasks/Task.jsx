import React, { Component } from 'react'
import TaskList from './TaskList.jsx'
import AddTask from './AddTask.jsx'
import AddTaskAction  from '../../actions/index'
import {connect} from 'react-redux';


class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTaskValue: {}
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }
    addTask(task1){
      this.props.updateTask(task1);  
    } 
    deleteTask(id){
      this.props.deleteTask(id);
    }
    editTask(task){
      this.setState({editTaskValue:task});
    }
  render() {
    let { tasks } = this.props;
    let { editTaskValue } = this.state;
    return (
      <div className="task">
        <TaskList task={tasks} deleteTask={this.deleteTask} editTask={this.editTask}/>
        <AddTask addTask={this.addTask} editTask={this.editTask} editTaskValue={editTaskValue}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => (AddTaskAction(dispatch))
const mapStateToProps = ({tasks}) => ({tasks})

export default connect(mapStateToProps, mapDispatchToProps)(Task);