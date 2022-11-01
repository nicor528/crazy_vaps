import capsulas from '../img/capsulas_todas_chica.jpeg'
import vaposycap from '../img/vaposYcapsulas_mediana.jpeg'
import { useState} from "react";
import Button from 'react-bootstrap/Button';

export default function CardsCapsulas1 () {
    const [agregado, setAgregado] = useState(false);

    const [contador, setContador] = useState(1)
    let stock = 5;

    function sumar_contador(){
        if (contador < stock) {
            setContador(contador + 1)
        }
        
    }

    function restar_contador(){
        if(contador>1){
        setContador(contador - 1)
    }}

    function agregar_a_carrito(){
        if(stock < contador){
            alert("No hay Stock del producto")
        }else{
            
            setAgregado(true);
        }   }

    return(
        <div className="cardsConteiner" style={{backgroundImage: `url(${vaposycap})`, backgroundColor:'black' }}  >
          
            <div className="cardNico" >
                <h2 className='cardTitulo'>Indica</h2>
                <img src={capsulas} ></img>
                <div className="itemcount" >
                
                    <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                    <span className="contador">{contador} </span>
                    <span className="contador">{contador} USD </span>
                    <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                    
                </div>
                <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                    onClick={agregar_a_carrito}></input>
            </div>
            <div className="cardNico" >
                <h2 className='cardTitulo' >Hibrida</h2>
                <img src={capsulas} ></img>
                <Button style={{height:'50%', width:'20%'}}  variant="secondary" onClick={sumar_contador}>+</Button>
                <Button style={{height:'100%', width:'60%'}}  variant="secondary" >{contador}</Button>
                <Button style={{height:'100%', width:'20%'}}  variant="secondary" onClick={restar_contador}>-</Button>
            </div>
            <div className="cardNico" >
                <h2 className='cardTitulo' >Sativa</h2>
                <img src={capsulas} ></img>
            </div>
        </div>
    )
}