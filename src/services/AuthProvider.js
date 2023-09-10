import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AuthContext = createContext({//creo contexto useContext
  auth: null,
  setAuth: () => {},
  user: null,
  setUser:() =>{}
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {//uso contexto
  const [auth, setAuth] = useState(null);//indica si esta autenticado
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = async () => {
        const baseURL = process.env.REACT_APP_API_URL
     
      try {
        const axiosConfig ={
            headers:{
                authorization:"Bearer "+ localStorage.getItem("token")
            }, withCredentials: true,

        }
        const res = await axios.get(
            `${baseURL}/user/logged-user`,
          axiosConfig
        );
     console.log("hola1")
     console.log(res)
        setUser(res.data.u);
        setAuth(true)
      } catch(error) {
        setUser(null);
      };
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;