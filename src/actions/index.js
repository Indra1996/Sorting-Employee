const addTaskAction = dispatch => ({
        updateTask: (task) => {
          if(task.id){
            dispatch({
              type: 'UPDATE_TASK',
              payload: { task },
            })
          }else {
            task.id = Math.floor(Math.random() * 10) + 3;
            dispatch({
              type: 'ADD_TASK',
              payload: { task },
            })
          }
    },
        deleteTask: (task) => {
            dispatch({
                type: 'DELETE',
                payload: { task }
            })
        },
        editTask: (task) => {
          dispatch({
            type: 'EDIT',
            payload: {task}
          })
        }
});

export default addTaskAction;
