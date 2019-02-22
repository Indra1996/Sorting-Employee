import React from 'react'

 const  TaskList =  (props) => {
      let {task} = props;
      task = (task && task.length) ? task : [];
      let Tasklist = task.map((task, index) => {
          return (
              <div className="taskList" key={index}>
                <div>Name: {task.name}</div>
                <div>Estimation: {task.estimation}</div>
                <div>Company: {task.company}</div>
                <button onClick={() => {props.deleteTask(task.id)}}>Delete Task</button>
                <button onClick={() => {props.editTask(task)}}>Edit Task</button>
              </div>
          )
      })
    return (
      <div className="Tasklist">
        {Tasklist}
      </div>
    )
}
export default TaskList