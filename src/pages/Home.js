import Calesita from "../Components/Home/Carrousel/Calesita";
import Inicio_mid from "../Components/Home/Inicio_mid";
import Inicio_top from "../Components/Home/Inicio_top";
import Navbar from '../Components/Navbar'
//import './Todas.css'
import CarouselFadeExample from "../Components/Home/Inicio_mid";
import UncontrolledExample from "../Components/Home/Inicio_mid";
import Footer from "../Components/Footer";
import videoFondo from '../videos/Azul - 10536.mp4'
import logo from '../img/krazylogo.JPG'
import NavBar2 from "../Components/NavBar2";
//         
function Home(){

    return(
        <div className="main" >
            <div className="overlay"></div>
            <video src={videoFondo} autoPlay loop muted ></video>
            
            <div className="contentHome" >
                {/*<Navbar></Navbar>*/}
                <NavBar2></NavBar2>
                <img src={logo} className='logo' ></img>
                {/*<Inicio_top></Inicio_top>*/}
                <Inicio_mid></Inicio_mid>
                
            </div>

        </div>
    )
}

export default Home;