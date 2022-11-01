import CardsCapsulas from '../Components/CardsCapsulas'
import CardsCapsulas1 from '../Components/CardsCapsulas1'
import Navbar from '../Components/Navbar'
import videoFondo from '../videos/Azul - 10536.mp4'


export default function ItemDetails(){
    return(
        <div className="main" >
            <div className="overlay"></div>
            <video src={videoFondo} autoPlay loop muted ></video> 
            <div className="contentCap" >
                {<Navbar></Navbar>}
                <CardsCapsulas1></CardsCapsulas1>
            </div>
        </div>
    )
}