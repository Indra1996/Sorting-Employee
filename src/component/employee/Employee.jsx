import React, { Component } from 'react'
import CompanyEmployee from './EmployeeList.jsx'
import AddEmployee from './AddEmployee.jsx'
import { connect } from 'react-redux';
import addEmployeeAction from '../../actions/employee'
import "../css/employee.css"
import helloSelector from "../../selectors/helloSelector"

class employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editEmployeeValue: {},
      sortBy:""
    }
    this.editEmployee = this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  addEmployee = (emp) => {
    this.props.updateEmployee(emp);
  }
 
  deleteEmployee = (id) => {
    this.props.deleteEmployee(id);
  }
  editEmployee(emp) {
    this.setState({ editEmployeeValue: emp });
  }
  handleOnChange = (e) => {
    this.setState({sortBy:e.target.value});
    this.props.filterEmployee(e.target.value);
  }
  render() {
    let { employee } = this.props;
    let { editEmployeeValue, sortBy } = this.state;
    return (
      <div className="employee">
        <div>Sort By
        <select onChange={this.handleOnChange} selected={sortBy}>
            <option value="">-- sort by --</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="designation">Designation</option>
          </select>
        </div>
        <AddEmployee addEmployee={this.addEmployee} editEmployee={this.editEmployee} editEmployeeValue={editEmployeeValue} />
        <CompanyEmployee employee={employee} deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => (addEmployeeAction(dispatch));
const mapStateToProps = (state) => ({employee: helloSelector(state.employee)})
export default connect(mapStateToProps, mapDispatchToProps)(employee);
