import React, { Component } from 'react'; 
import { Form } from 'semantic-ui-react'
import Button from './Button'
import './Form.css'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = (e) => {

       this.setState({
           [e.target.name]: e.target.value
       })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        //this is the function from the app container component that will allow us to lift state up to the 
        //app container this is the messenger
        this.props.handleLogin(this.state.username)
    }
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <div className="forms">
                <input className="form" type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="usename"/>
                <input className="form" type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="password"/>
                </div>
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default Login 