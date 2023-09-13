import React, { useState } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { URLSIG } from "../components/config";


const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Validacion del formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSignup = () => {
    if (isValidEmail && username && password) {
      // Cifrar la contraseña en MD5
      const hashedPassword = CryptoJS.MD5(password).toString();
      const userData = {
        username,
        email,
        password: hashedPassword,
      };

      // Envia los datos al servidor usando Axios
      axios.post(URLSIG, userData)
        .then(response => {
          // Maneja la respuesta del servidor aquí
          console.log('Respuesta del servidor:', response.data);
          navigate('/login'); 
        })
        .catch(error => {
          // Maneja los errores aquí
          console.error('Error al enviar los datos:', error);
        });
    } else {
      alert('Por favor, completa todos los campos y asegúrate de ingresar una dirección de correo electrónico válida.');
    }
  };

  return (
    <div className="container-fluid">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <div className="card cardhome ">
          <div className="csignup">
          <h2 className="card-title">Registro</h2>
          <div className="col-12 col-md-12 ">
            <div className="col">
              <label>Nombre de usuario:</label>
              <input
                className="form-control"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="col">
              <label>Correo Electrónico:</label>
              <input className="form-control" type="text" value={email} onChange={handleEmailChange} />
              {!isValidEmail && <p>Ingresa un correo electrónico válido.</p>}
            </div>
            <div className="col">
              <label>Contraseña:</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="btn btnhomelog" onClick={handleSignup}>
              Registrarse
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignupForm;
