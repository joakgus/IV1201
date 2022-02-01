import React, { Component } from "react"

class UserSignIn extends Component {

    //Add constructor to be able to use states in the application
    //Define properties to be used

    constructor(props) {
        super(props)
        this.state = {
            email:''
        }

        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    //return metadata from target input fields and their values

    changeEmailHandler =(event)=>{
        this.setState({email: event.target.value})
    }

    //save the input values
    saveUser=(e)=>{
        e.preventDefault();
        let user ={email: this.state.email};
        console.log('User=>' + JSON.stringify(user));
    }


    //return react elements to the browser
    render(){
        return(

            <form onSubmit={this.saveUser}>

                <div>
                    <div className="container">
                        <div className="row">
                            <br></br>
                            <h1 className="text-center">User Registration</h1>
                            <br></br>
                            <div className=" card col-md-6 offset-md-3">
                                <div className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <label>email</label>
                                            <input placeholder="Email" name="email" className="form-control"
                                                   value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <br></br>
                                        <br></br>

                                        <input type="submit" value="Submit"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default UserSignIn;
