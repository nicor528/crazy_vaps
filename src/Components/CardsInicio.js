import img from '../img/pen.JPG'
import logo from '../img/krazylogo.JPG'
import capsulas from '../img/capsulas_todas_chica.jpeg'
import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function CardsInicio () {

    const navegar = useNavigate()

    const goCapsulas = () => {
        navegar(`/capsulas2`)
    }

    return (
        <div className="CardsInicio" >
            <div className="cardNico"  >
                <img src={capsulas}></img>
                <input type="button" value="Nuestras Capsulas" className="irCapsulas" 
                    onClick={goCapsulas}></input>
            </div>
            <div className="cardNico"  >
                <img src={img} ></img>
                <input type="button" value="Nuestros Vapos" className="irCapsulas" 
                    onClick={goCapsulas}></input>
            </div>
            <div className="cardNico"  >
                <img src={vaposycap} ></img>
                <input type="button" value="Nuestros Combos" className="irCapsulas" 
                    onClick={goCapsulas}></input>
            </div>
        </div>
    )
}