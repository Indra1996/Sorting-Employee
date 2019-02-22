const addEmployeeAction = dispatch => ({
    updateEmployee: (employee) => {
        if(employee.id){
            dispatch({
                type: 'EDIT',
                payload: { employee },
              })
        }
        else{
            employee.id = Date.now() % 1000;
            dispatch({
                type: 'UPDATE_EMPLOYEE',
                payload: { employee },
            })
        }
      
},
    deleteEmployee: (employee) => {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: { employee }
        })
    },
    filterEmployee: (e) => {
        dispatch({
            type: 'SORT_EMPLOYEE',
            payload: { e }
        })
    }
});

export default addEmployeeAction;