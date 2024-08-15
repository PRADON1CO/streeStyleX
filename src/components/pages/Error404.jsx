import { Button, Container } from 'react-bootstrap';
import error404 from "../../assets/404.png"
import "../../style/error404.css"

const Error404 = () => {
    return (
        <Container className='text-center py-2'>
            <img src={error404} alt="" className='imgError404 mx-auto d-block' />
            <a to='/' className=" btn bg-dark border-0 rounded-0 text-white">Volver al inicio</a>
        </Container>
    );
};

export default Error404;