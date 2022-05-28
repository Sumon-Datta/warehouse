import React from "react";
import "./LogIn.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../fireBase.init/fireBase.init";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSendPasswordResetEmail} from 'react-firebase-hooks/auth';

const provider = new GoogleAuthProvider();

const LogIn = () => {

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  

  const navigate = useNavigate();

  const addGoogleLogin = () => {
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

  //const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";

  const handleBlurEmail = (event) => {
    console.log(event.target.value);
   // setEmail(event.target.value);
  };

  const handleBlurPassword = (event) => {
    console.log(event.target.value);   
    //setPassword(event.target.value);
  };

  const addEmailPassSubmit = (event) => {
     event.preventDefault();
    // if(password !== email){
    //   setEmail('Incorrect passoword');
    //   return;
    // }
 
    console.log("form submitted", email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
         //setEmail("");
        //setPassword("");
         //if (user) {
          //navigate(from, { replace: true });
//}
      })
       .catch((error) => {
         console.error(error);
        // setError(error.message);
          console.log(error.message);
       });
   
  };
  return (
    <div className="margin">
      <div className="Login_area">
        <div className="Login_section">
          <div>
            <h5 className="text">Login</h5>
          </div>
          <div className="login">
            <Form onSubmit={addEmailPassSubmit}>
              <Form.Group className="mb-3 form" controlId="formBasicEmail">
                <p className="email">Email</p>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onBlur={handleBlurEmail}
                  // required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <p className="password">Password</p>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlurPassword}
                  // required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword" />
              <p className="error">{error}</p>
              <button className="log" variant="primary" type="submit">
                Login
              </button>

              {/* <div>
               <span className="span" onClick={() => navigate("/signup")}>
                  Signup
                </span> 
              </div> */}
            </Form>
            <p className="error">{error}</p>
            <span className="account">Already have An Account? </span>
            <Link to="/signup" className="span">
              signup
            </Link>
            <div>
              <small className="forget">
                Forget Password?{" "}
                {/* <button
                  className=""
                  onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert("Sent email");
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Reset Password
                </button>{" "} */}
              </small>
            </div>
          </div>
        </div>
        <button
          className="google"
          variant="primary"
          type="submit"
          onClick={addGoogleLogin}
        >
          {" "}
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
