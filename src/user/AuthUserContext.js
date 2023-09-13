import { createContext, useContext, useState } from "react";

// Crea el contexto
const AuthContext = createContext();

// Hook personalizado para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}

// Proveedor del contexto
export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null); // Aquí puedes almacenar la información de inicio de sesión

  // Agrega una función para establecer la información de inicio de sesión
  const setAuthData = (datos) => {
    setUserData(datos);
  };

  return (
    <AuthContext.Provider value={{ userData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}
