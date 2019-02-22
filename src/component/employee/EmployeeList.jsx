import React, { Component } from 'react'

class employeeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { employee } = this.props;
    employee = (employee && employee.length) ? employee : [];
    return (
      <div className="employeeListDisplay">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.designation}</td>
                  <td><button onClick={() => { this.props.deleteEmployee(employee.id) }}>Delete Employee</button></td>
                  <td><button onClick={() => { this.props.editEmployee(employee) }}>Edit Employee</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}



export default employeeList
