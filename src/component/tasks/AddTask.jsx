import React, { Component } from 'react'

export default class addEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "" ,
      estimation: "" ,
      company: "",
      id: ""
    };
    this.handleSubmit.bind(this);
  }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTask(this.state);
      this.setState({
        id: "",
        name: "",
        estimation:"",
        company: ""
      });
    }
    componentWillReceiveProps(nextProps) {
      if(this.props.editTaskValue !== nextProps.editTaskValue) {
        this.setState({
          name: nextProps.editTaskValue.name,
          estimation: nextProps.editTaskValue.estimation,
          company: nextProps.editTaskValue.company,
          id: nextProps.editTaskValue.id
        });
      }
    }
   
  render() {
    let {name, estimation, company } = this.state;
    let {editTaskValue} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={this.handleChange} />
            <label htmlFor="estimation">Estimation</label>
            <input type="text" id="estimation" value={estimation} onChange={this.handleChange} />
            <label htmlFor="company">Company</label>
            <input type="text" id="company" value={company} onChange={this.handleChange} />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
