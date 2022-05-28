import React, { useState } from "react";
//import logo from './logo.svg';
import "./HeaderSection.css";
import CustomLink from "../CustomLink/CustomLink";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
//import { auth } from './../fireBase.init/fireBase.init';
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
//import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
const HeaderSection = () => {
  //const {pathname} = useLocation();
  const [user, setUser] = useState({});
  //console.log(user);

    // responsive
    const [open, setOpen] = useState(false);
  


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        //console.log(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const logOutButton = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header_section">
      <div className="up_down" onClick={() => setOpen(!open)}>
      {open ? (
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        )}
      </div>
      <div className="logo">
        <Link to="/">Car Store House</Link>
      </div>
      <div className={`link_section  ${open ? "up" : "down"}`} >
        <CustomLink className="link" to="/">
          Home
        </CustomLink>
        <CustomLink className="link" to="blogs">
          Blogs
        </CustomLink>

        {user?.uid && (
          <>
            <CustomLink className="link" to="addItem">
              Add Items
            </CustomLink>
            <CustomLink className="link" to="manageItem">
              Manage items
            </CustomLink>
          </>
        )}
        {user?.uid ? (
          <button onClick={logOutButton} className="header_button">
            Logout
          </button>
        ) : (
          <CustomLink className="link" to="login">
            Login
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
