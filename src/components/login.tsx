import React, {useState} from "react"
import { navigate, Link } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

const Login = ()=> {

    const [userName, setUserName]=useState("");
    const [passwd, setPassword]= useState("");


    const handleUpdatePasswd = event => {
        setPassword(event.target.value);
    }

    const handleUpdateUserName = event => {
        setUserName(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault()
        handleLogin(userName,passwd)
    }


        if (isLoggedIn()) {

            return(

                <div className="mx-auto w-50 p-5 shadow">
                    <div className="display-4"> 
                        You are already logged in
                    </div>
                    <Link to="/app/profile">
                        Home
                    </Link>
                    {navigate("/app/profile")}
                </div>
            )

        } else{

            return (
                
                <div className="mx-auto w-50 p-5 shadow">
                    <h1>Log in</h1>
                    <form
                        method="post"
                        onSubmit={event => {
                            handleSubmit(event)
                            navigate(`/app/profile`)
                        }}
                    >
    
                        <div className="form-group">
                            <label>Email address:</label>
                            <input type="text" className="form-control" placeholder="Enter username" id="username" name="username" onChange={handleUpdateUserName} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter password" id="pwd" onChange={handleUpdatePasswd} />
                        </div>
    
                        <button type="submit" className="btn btn-primary mx-auto w-25">Log In</button>
                    </form>
                </div>
            )
        }


    }


export default Login