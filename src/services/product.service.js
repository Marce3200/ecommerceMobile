import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const addProduct_API = async (
  nombre,
  descripcion,
  stock,
  status,
  precio,
  url
) => {
  const datos = {
    name: nombre,
    description: descripcion,
    status: status,
    stock: stock,
    price: precio,
    img: url,
  };
  try {
    const result = await axios.post(`${baseURL}/product/addProduct`, datos, {
      withCredentials: true,
    });
    return result;
  } catch (error) {
    return false;
  }
};
const agregarProducto = async (
  nombre,
  descripcion,
  stock,
  status,
  precio,
  url
) => {
  if (!nombre || !descripcion || !stock || !status || !precio || !url) {
    return false;
  }

  const result = await addProduct_API(
    nombre,
    descripcion,
    stock,
    status,
    precio,
    url
  );

  if (result) {
    return true;
  }
  return false;
};

const actualizarProducto = async (
  id,
  nombre,
  descripcion,
  stock,
  status,
  precio,
  url
) => {
  if (!id || !nombre || !descripcion || !stock || !status || !precio || !url) {
    return false;
  }

  const result = await updateProduct_API(
    id,
    nombre,
    descripcion,
    stock,
    status,
    precio,
    url
  );

  if (result) {
    return true;
  }

  return false;
};

const updateProduct_API = async (
  id,
  nombre,
  descripcion,
  stock,
  status,
  precio,
  url
) => {
  const datos = {
    id: id,
    name: nombre,
    description: descripcion,
    status: status,
    stock: stock,
    price: precio,
    img: url,
  };
  try {
    const result = await axios.put(`${baseURL}/product/update/${id}`, datos, {
      withCredentials: true,
    });
    return result;
  } catch (error) {
    return false;
  }
};

export { agregarProducto, actualizarProducto };
