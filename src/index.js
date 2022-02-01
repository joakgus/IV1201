import './index.css';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App';
import UserSignUp from "./UserSignUp";
import UserSignIn from "./UserSignIn";
//import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
          <Route
              path = "/"
              element = {<App/> }
          />

          <Route
              path = "/signup"
              element = {<UserSignUp/> }
          />

          <Route
              path = "/signin"
              element = {<UserSignIn/> }
          />
      </Routes>
  </BrowserRouter>,
  rootElement
);


