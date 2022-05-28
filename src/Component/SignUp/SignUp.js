import React from "react";
import './SignUp.css'
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fireBase.init/fireBase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  //navigate
  const navigate = useNavigate();

  //google signup

  const addGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

//   email password
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [password, setPassword] = useState("");
const [ConfirmPassword, setConfirmPassword] = useState("");




// email and password varification
const handleBlurEmail = (event) => {
  setEmail(event.target.value);
};

const handleBlurPassword = (event) => {
  setPassword(event.target.value);
};
const handleBlurConfirmPassword = (event) => {
  setConfirmPassword(event.target.value);
};

const addHandleSignup = (event) => {
    event.preventDefault();
    if(password !== ConfirmPassword){
      setError('password do not match');
      return;
    }
    if(password.length < 6){
      setError('Password must be 6 characters or logner');
      return;
    }
    //console.log("form submitted", email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        setEmail("");
        setPassword("");
        if (user) {
          alert('successfully Signup');
          navigate("/");
        
        }
      })
      .catch((error) => {
        //console.error(error);
        setError(error.message);
      });
}
  return (
    <div className="margin-signup">
      <div className="signup_area">
      <div className="signup">
        <div>
          <h5 className="text">Signup</h5>
        </div>
        <div className="logout">
          <Form onSubmit={addHandleSignup}>
            <Form.Group className="mb-3 form" controlId="formBasicEmail">
              <p className="name">Email</p>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onBlur={handleBlurEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <p className="name">Password</p>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onBlur={handleBlurPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <p className="name">Confirm Password</p>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirm Password"
                onBlur={handleBlurConfirmPassword}
              />
            </Form.Group>
            <p className="error">{error}</p>
            <button className="log" variant="primary" type="submit">
              Signup
            </button>
            <div>
              <span className="account">Need An Account? </span>
              <span className="span" onClick={() => navigate("/LogIn")}>
                Login
              </span>
            </div>       
        <div>  
        </div>
          </Form>
        </div>
      </div>
      <button
      className="google"
        onClick={addGoogleSignup}>
       Continue with google
      </button>
    </div>
    </div>
  );
};

export default SignUp;
