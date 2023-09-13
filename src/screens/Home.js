import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import usericon from "../assets/icons/account.png";
import usereg from "../assets/icons/registro.png";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center ">
        <div className="col-12 col-md-6 text-center">
          <h1 className="txthome">Bienvenido</h1>
          <div className="card cardhome">
            <div className="card-body">
              <div className="col-md-12">
                <h4>¿Ya tienes cuenta?</h4>
                <Link to="/login">
                  <button className="btn btnhomelog">
                    <img alt="icons" className="icons" src={usericon} />
                    Iniciar sesión
                  </button>
                </Link>
              </div>
              <div className="col-md-12">
                <h4>¿Quieres registrarte?</h4>
                <Link to="/signup">
                  <button className="btn btnhomesig">
                    <img alt="icons" className="icons" src={usereg} />
                    Regístrate
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Buscador />
    </div>
  );
};

export default HomePage;
