import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../user/AuthUserContext";
import NavBar from "../components/Navabar";
import { GETP } from "../components/config";

const ReadPost = () => {
  const { userData } = useAuth();
  const idUser = userData.id_User;
  //const autor=userData.st_NombreUser;

  const [data, setData] = useState([]);

  const URL = GETP+`${idUser}`;

  const loadData = async () => {
    const response = await axios.get(URL);
    setData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container-fluid">
    <NavBar />
    <div className="row cardhome">
      <div className="col-md-12 ">
        <h1 className="text-center text-white">Mis Posts</h1>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <div className="card cardposts">
                <div className="card-body ">
                  <h3 className="card-title cardhome">{item.st_Titulo}</h3>
                  <p className="card-text card  ">{item.st_Contenido}</p>
                  <h6>Publicado:{item.dt_Fecha}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-6">

      </div>
    </div>
  </div>
  
  );
};

export default ReadPost;
