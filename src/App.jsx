import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/pages/Inicio';
import Login from './components/pages/Login';
import Error404 from './components/pages/Error404';

function App() {

  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio>  */}
      {/* <Login></Login>       */}
      <Error404></Error404>
      <Footer></Footer>
    </>
    
  )
}

export default App
