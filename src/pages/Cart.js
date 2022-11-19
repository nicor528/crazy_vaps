import CartItemConteiner from "../components/CartItemConteiner/CartItemConteiner";
import NavBar2 from "../Components/NavBar2";

export default function Cart(){
    return(
        <>
            <div className="main" >
            <div className="overlay"></div>
            <video src={videoFondo} autoPlay loop muted ></video>
            
            <div className="contentHome" >

                <NavBar2></NavBar2>
                <img src={logo} className='logo' ></img>


                
            </div>

        </div>
        </>
    )
}