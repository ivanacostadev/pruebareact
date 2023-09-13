import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./user/AuthUserContext"; // Asegúrate de que la ruta sea correcta
import HomePage from "./screens/Home";
import Login from "./user/Login";
import SignupForm from "./user/Signup";
import "./App.css";
import HomeLogged from "./screens/HomeLogged";
import Posts from "./screens/Posts";
import ReadPost from "./screens/ReadPosts";
import Buscador from "./screens/Buscador";

function App() {


  


  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <div className="container-fluid">
      
            <Routes>
              <Route exact path="/" element={<HomePage   /*FlagOnline={FlagOnline}*/  />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/homelogged" element={<HomeLogged/>}/>
              <Route path="/newpost" element={<Posts/>}/>
              <Route path="/myposts" element={<ReadPost/>}/>
              <Route path="/buscador" element={<Buscador/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
