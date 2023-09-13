import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL, URLAUT, URLTI, URLCONT } from "../components/config";
import lupa from "../assets/icons/lupa.png"

const Buscador = () => {
  // Estados para el componente
  const [FlagOffline, setFlagOffline] = useState(0);
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState([]);
  const [data, setData] = useState([]);
  const [dataAut, setDataAut] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [busquedat, setBusquedat] = useState("");
  const [busquedac, setBusquedac] = useState("");
  const [flag, setFlag] = useState(0);
  const [flagBuscador, setFlagBuscador] = useState("");

  // URLs para las solicitudes HTTP

  // Función para cargar datos desde el servidor y almacenarlos en el localStorage
  const loadData = async () => {
    const response = await axios.get(URL);
    setData(response.data);
    console.log(response.data);
    localStorage.setItem("datosEnLocalStorage", JSON.stringify(response.data));
  };

  // Funciones para cargar datos específicos basados en búsquedas

  const loadaut = async (busqueda) => {
    const searchdata = {
      busqueda: busqueda,
    };
    const response = await axios.post(URLAUT, searchdata);
    setDataAut(response.data);
    if (dataAut != null) {
      setFlag(1);
    }
    console.log(response.data);
  };

  const loadtitulo = async (busquedat) => {
    const searchdata = {
      busqueda: busquedat,
    };
    const response = await axios.post(URLTI, searchdata);
    setDataAut(response.data);
    if (dataAut != null) {
      setFlag(1);
    }
    console.log(response.data);
  };
  const loadcontenido = async (busquedac) => {
    const searchdata = {
      busqueda: busquedac,
    };
    const response = await axios.post(URLCONT, searchdata);
    setDataAut(response.data);
    if (dataAut != null) {
      setFlag(1);
    }
    console.log(response.data);
  };

  // Efecto que se ejecuta al montar el componente y validar si hay conexion a inetrnet

  useEffect(() => {
    loadData();
    const handleOnlineStatus = () => {
      if (window.navigator.onLine) {
        setFlagOffline(2);
        alert("Usted entró en modo online");
      } else {
        setFlagOffline(1);
        alert("Usted entró en modo offline");
        const localStorageData = JSON.parse(
          localStorage.getItem("datosEnLocalStorage")
        );

        if (localStorageData) {
          setDataFromLocalStorage(localStorageData);
        }
      }
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);
  }, []);

  const handleautor = (event) => {
    setBusqueda(event.target.value);
    setFlagBuscador("autor");
  };
  const handletitulo = (event) => {
    setBusquedat(event.target.value);
    setFlagBuscador("titulo");
  };

  const handlecontenido = (event) => {
    setBusquedac(event.target.value);
    setFlagBuscador("contenido");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (flagBuscador === "autor") {
      loadaut(busqueda);
    } else if (flagBuscador === "titulo") {
      loadtitulo(busquedat);
    } else if (flagBuscador === "contenido") {
      loadcontenido(busquedac);
    }
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 offset-md-2"> {/* Centra el contenido en el medio de la página */}
        <div className="card cardhome">
          <div className="card-body">
            <h1 className="card-title cardhome text-center">Todos los Posts</h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="buscarPor">Buscar por Autor:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="autorInput"
                      placeholder="Ingrese el autor"
                      value={busqueda}
                      onChange={handleautor}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="buscarPor">Buscar por Título:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="tituloInput"
                      placeholder="Ingrese el título"
                      value={busquedat}
                      onChange={handletitulo}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="buscarPor">Buscar por Palabra clave:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="palabraClaveInput"
                      placeholder="Ingrese una palabra clave"
                      value={busquedac}
                      onChange={handlecontenido}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center"> {/* Centra el botón en el medio */}
                <button className="btn btnhomelog" type="submit">
                  <img alt='icons' className='icons' src={lupa} />Buscar
                </button>
              </div>
            </form>
  
            {FlagOffline === 1 ? (
              <div>
                <p className="text-center">Modo offline</p>
  
                {dataFromLocalStorage.map((item, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="card-body">
                      <h4 className="card-title">Autor: {item.st_Autor}</h4>
                      <h5 className="card-title">Título: {item.st_Titulo}</h5>
                      <p className="card-text">{item.st_Contenido}</p>
                      <h6 className="card-text">Fecha:{item.dt_Fecha}</h6>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">Modo online</p>
            )}
  
            {flag === 0 ? (
              <div className="row">
                {data.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h4 className="card-title">Autor: {item.st_Autor}</h4>
                        <h5 className="card-title">Título: {item.st_Titulo}</h5>
                        <p className="card-text">{item.st_Contenido}</p>
                        <h6 className="card-text txtfecha">Fecha:{item.dt_Fecha}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row">
                {dataAut.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h4 className="card-title">Autor: {item.st_Autor}</h4>
                        <h5 className="card-title">Título: {item.st_Titulo}</h5>
                        <p className="card-text">{item.st_Contenido}</p>
                        <h6 className="card-text">{item.dt_Fecha}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Buscador;
