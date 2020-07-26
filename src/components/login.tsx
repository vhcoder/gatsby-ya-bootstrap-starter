import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        handleLogin(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/app/profile`)
        }

        return (
            <div className="mx-auto w-50 p-5 shadow">
                <h1>Log in</h1>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/profile`)
                    }}
                >

                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="text" className="form-control" placeholder="Enter username" id="username" name="username" onChange={this.handleUpdate} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password" id="pwd" onChange={this.handleUpdate} />
                    </div>

                    <button type="submit" className="btn btn-primary mx-auto w-25">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login