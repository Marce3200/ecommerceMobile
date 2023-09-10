import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import SignUp from './components/Signup/SignUp';
import Product from './components/Product/Product';
import CheckOut from './components/CheckOut/CheckOut';
import Error from './components/Error/Error';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout';
import Catalogo from './components/Catalogo/Catalogo';
import Profile from './components/Profile/Profile';

import CerrarSesion from './components/Logout';
import UpdateProduct from './components/UpdateProduct/updateProduct';
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonApp, setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  return (
    <IonApp>
    <Routes>
      <Route path='/' element={<Layout/>}>

      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/catalogo' element={<Catalogo />} />
      <Route path='/product/:id' element={<Product />} /> {/*id es parametro de la url */}
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/*' element={<Error />} />
      <Route path='/perfil' element={<Profile />} />
      <Route path='/actualizarproduct/:id' element={<UpdateProduct />} />
      <Route path='/errorlogin' element={<Error />} />
      <Route path='/logout' element={<CerrarSesion />} />
      </Route>

    </Routes>
    </IonApp>
  );
}

export default App;
