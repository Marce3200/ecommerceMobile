import axios from "axios";


const baseURL = process.env.REACT_APP_API_URL;
const signIn_API = async (username, password) => {
  const datos = {
    username: username,
    password: password,
  };
  try {
    const result = await axios.post(`${baseURL}/user/signin`, datos);
    return result;
  } catch (error) {
    return false;
  }
};

const saveToken = async (token) => {
  // console.log("tokenlogin "+ token )
  localStorage.setItem("token", token);
  console.log(await readToken());
};
const readToken = async () => {
  return localStorage.getItem("token");
};

const signIn = async (username, password) => {
 
  const result = await signIn_API(username, password);


  if (result) {
    saveToken(result.data.token);
   console.log(result)
   console.log(result.data.user)
    return result.data.user;
  }
  return false;
};
const signUp_API = async (name, username, password) => {
  const datos = {
    name: name,
    username: username,
    password: password,
  };
  try {
    const result = await axios.post(`${baseURL}/user/signup`, datos, {
    withCredentials: true,
    });
    return result;
  } catch (error) {
    return false;
  }
};
const registroUsuario = async (name, username, password1, password2) => {
  if (!name || !username || !password1 || !password2) {
    return false;
  }

  if (password1 !== password2) {
    return false;
  }
  const result = await signUp_API(name, username, password1);

  if (result) {
    return true;
  }
  return false;
};

const logout = async () => {
  localStorage.removeItem("token");
  console.log("saliendo")
};

export { signIn, readToken, registroUsuario, logout };
