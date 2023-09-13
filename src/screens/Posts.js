import React, { useState } from "react";
import { useAuth } from "../user/AuthUserContext";
import axios from "axios";
import NavBar from "../components/Navabar";
import { NEWP } from "../components/config";



const Posts = () => {
  const { userData } = useAuth();
  // Definir estados para el título y el mensaje
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");


  // Fecha y hora
  const timestamp = Date.now(); // Obtiene el timestamp actual en milisegundos
  const fechaActual = new Date(timestamp);
  const año = fechaActual.getFullYear();
  const mes = String(fechaActual.getMonth() + 1).padStart(2, "0"); // Agrega ceros a la izquierda si es necesario
  const día = String(fechaActual.getDate()).padStart(2, "0");
  const hora = String(fechaActual.getHours()).padStart(2, "0");
  const minuto = String(fechaActual.getMinutes()).padStart(2, "0");
  const segundo = String(fechaActual.getSeconds()).padStart(2, "0");

  // Formatea la fecha y hora en una cadena
  const fechapublicacion = `${año}-${mes}-${día} ${hora}:${minuto}:${segundo}`;

  // Manejar cambios en el título
  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  // Manejar cambios en el mensaje
  const handleMensajeChange = (event) => {
    setContenido(event.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = async(event) => {
    event.preventDefault();
    const idUser=userData.id_User;
    const autor = userData.st_NombreUser;

    const userDatos = {
        idUser:idUser,
        titulo:titulo,
        autor:autor,
        fecha:fechapublicacion,
        contenido:contenido

      };
      console.log(userDatos)
  
      try {
        const response = await axios.post(NEWP, userDatos);
     console.log(response.status)
     if(response.status===200){
        alert("Post Guardado")
        setTitulo(" ")
        setContenido(" ")



     }

  
  
  
 
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
  };

  return (
    <div className="container-fluid">
    <NavBar />
    <div className="row justify-content-center"> {/* Centra el contenido horizontalmente */}
      <div className="col-10 cardhome"> {/* Ajusta el ancho de la columna */}
        <h1 className="text-center">Nuevo Post</h1> {/* Centra el título horizontalmente */}
        <h1 className="text-center">Bienvenido {userData.st_NombreUser}</h1> {/* Centra el mensaje horizontalmente */}
        <form onSubmit={handleSubmit}>
          <div className="form-group"> {/* Agrega una clase de grupo para el formulario */}
            <label htmlFor="titulo">Título:</label>
            <input
              className="form-control"
              type="text"
              id="titulo"
              value={titulo}
              onChange={handleTituloChange}
            />
          </div>
          <div className="form-group"> {/* Agrega una clase de grupo para el formulario */}
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              className="form-control"
              placeholder={`Por ${userData.st_NombreUser}`}
              id="mensaje"
              value={contenido}
              onChange={handleMensajeChange}
            ></textarea>
          </div>
  
          <button className="btn btn-primary btn-block" type="submit"> {/* Ancho completo y color de botón */}
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default Posts;
