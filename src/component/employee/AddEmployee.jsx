import React, { Component } from 'react'

export default class AddEmployee extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "" ,
        age: "" ,
        designation: "",
        id: ""
      };
      this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
      if(this.props.editEmployeeValue !== nextProps.editEmployeeValue) {
        this.setState({
          name: nextProps.editEmployeeValue.name,
          age: nextProps.editEmployeeValue.age,
          designation: nextProps.editEmployeeValue.designation,
          id: nextProps.editEmployeeValue.id
        });
      }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state);
        this.setState({
          id: "",
          name: "",
          age:"",
          designation: ""
        });
    }
  render() {
    let {name, age, designation } = this.state;
    let {editEmployeeValue} = this.props;
    return (
      <div className="addEmployee">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={this.handleChange} />
            <label htmlFor="age">Age</label>
            <input type="text" id="age" value={age} onChange={this.handleChange} />
            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" value={designation} onChange={this.handleChange} />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
