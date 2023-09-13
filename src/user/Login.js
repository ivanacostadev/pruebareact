import React, { useState } from "react";
import { useAuth } from "./AuthUserContext";
import CryptoJS from "crypto-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URLOG } from "../components/config";



const Login = () => {
    const navigate = useNavigate();
    const { setAuthData } = useAuth(); // Usa el contexto para establecer la información de inicio de sesión
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = CryptoJS.MD5(password).toString();
    const userData = {
      email,
      password: hashedPassword,
    };

    try {
      const response = await axios.post(URLOG, userData);
      const datos = response.data;

      // Establece la información de inicio de sesión usando el contexto
      setAuthData(datos);

      navigate("/homelogged");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="container-fluid">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <div className="card cardhome">
          <div className="card-body text-center">
      
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button className="btn btnhomelog" type="submit">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Login;


