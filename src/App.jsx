import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import Inicio from './components/pages/Inicio';
import Login from './components/pages/Login';

function App() {

  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio>  */}
      <Login></Login>      
      <Footer></Footer>
    </>
    
  )
}

export default App
