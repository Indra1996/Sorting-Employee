import initialData from '../initialData/initialData'

const initialState = initialData.employee;
const employee = (state = initialState, action) => {
    switch (action.type) {
         case 'UPDATE_EMPLOYEE':
          let data = state.data.concat(action.payload.employee)
          return {sort_by: "", data: data}
        case 'DELETE_EMPLOYEE':
        let filterEmployee = state.data.filter((filtered_employee) => {
          return filtered_employee.id !== action.payload.employee
        });
          return {sort_by: "", data: filterEmployee}
        case 'SORT_EMPLOYEE':
          return {sort_by: action.payload.e, data: state.data};
        case 'EDIT':
        let updated_data = state.data.map((filtered_employee) => {
          if(filtered_employee.id === action.payload.employee.id){ 
            return action.payload.employee
          }else{
            return  filtered_employee
          }
        });
        return {sort_by: "", data: updated_data} 
        default:
          return {sort_by: "", data: state};
      }
    };
export default employee