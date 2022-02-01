import './App.css';
import React from "react";
import {Link} from "react-router-dom"


function App() {
  return (

        <div>
            <button>
                <Link to="/signup">Sign Up</Link>
            </button>
            <button>
                <Link to="/signin">Sign In</Link>
            </button>
        </div>
    );
}

export default App;
