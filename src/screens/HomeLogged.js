import React from "react";
import { useAuth } from "../user/AuthUserContext";
import { Link } from "react-router-dom";
import NavBar from "../components/Navabar";
import writer from "../assets/icons/escribir.png";
import papel from "../assets/icons/papel.png";

const HomeLogged = () => {

    const { userData } = useAuth();
    console.log(userData)


  return (
    <div className="container-fluid">
    <NavBar />
    <div className="row justify-content-center align-items-center min-vh-100"> {/* Centra vertical y horizontalmente */}
      <div className="col cardhome">
        <h1 className="text-center">Bienvenido {userData.st_NombreUser}</h1>
  
        <div className="text-center mt-4"> {/* Centra los botones horizontalmente */}
          <div className="col">
            <Link to="/newpost">
              <button className="btn btnhomelogged">
      <p className="txtbtn"> Nueva entrada</p><br/>
                <img alt="some" src={writer} className="iconswrite"/>
             
                </button>
            </Link>
            <Link to="/myposts">
            <button className="btn btnhomelogged">
      <p className="txtbtn"> Mis Post</p><br/>
                <img alt="some" src={papel} className="iconswrite"/>
             
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HomeLogged;
