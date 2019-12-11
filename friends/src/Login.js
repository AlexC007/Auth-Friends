import React from 'react';
import axios from 'axios';
//Update Branch

class Login extends React.Component {
 state = {
   validate: {
     username:"",
     password: ""
   }
 }

 handleChange = e => {  
    this.setState({
      validate: {
        ...this.state.validate,
        [e.target.name]: e.target.value
      }
    });
    }

 login = e => {
    e.preventDefault();
    axios
    //axiosWithAuth().post('/api/login', this.state.validate)
    .post("http://localhost:5000/api/login", this.state.validate)
    .then(res =>{
      localStorage.setItem('token',res.data.payload);
      this.props.history.push('/protected');
    })
  }
render () {
  return (
  <div>
    <form onSubmit={this.login}>
      <input
        type="text"
        name="username"
        value={this.state.validate.username}
        onChange={this.handleChange}
      />
      <input
        type="password"
        name="password"
        value={this.state.validate.password}
        onChange={this.handleChange}
      />
      <button>Submit</button>
    </form>
  </div>
    )
  }
}
export default Login;