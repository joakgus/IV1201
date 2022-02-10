import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import UserSignUp from "./UserSignUp";
import UserSignIn from "./UserSignIn";
import UGetter from "../model/UserGetter"

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state =
            {
            }
        ;
    }
  render () {
        return(
            <div>
                <BrowserRouter>
                    <button>
                        <Link to="/signup">Sign Up</Link>
                    </button>
                    <button>
                        <Link to="/signin">Sign In</Link>
                    </button>
                    <Routes>
                        <Route
                            path="/"
                            element={<App/>}
                        />
                        <Route
                            path="/signup"
                            element={<UserSignUp/>}
                        />
                        <Route
                            path="/signin"
                            element={<UserSignIn userModel = {UGetter}/>}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        );
  }
}

export default App;
