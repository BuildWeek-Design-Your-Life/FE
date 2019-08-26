import React, {useState} from "react";
import { Form, FormInput, FormGroup, Button, Container } from "shards-react";
import axios from 'axios';


const Login = ({ history }) => {
  const [creds, setCreds] = useState({username: "", password: ""});

  const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://design-bw.herokuapp.com/api/auth/login', creds)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };
  return (
    <Container className="login-container">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="#username">Username</label>
          <FormInput 
          id="#username" 
          name="username"
          placeholder="Username" 
          onChange={handleChange}
          value={creds.username} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#password">Password</label>
          <FormInput type="password" 
          id="#password" 
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={creds.password} />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    </Container>
  );
}

export default Login
