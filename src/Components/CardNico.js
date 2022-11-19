import { useState , useEffect} from "react";

export default function CardNico ({nombre, stock, valor, imagen, genetica}) {

    const [agregado, setAgregado] = useState(false);

    const [contador, setContador] = useState(1)

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
        <div className="cardNico2" >
        <h2 className='cardTituloN' >{nombre}</h2>
        <img className="imagenCap" src={`https://github.com/nicor528/ImagenesProyectos/blob/main/Krazy-Vaps/capsulas_todas_chica.jpeg`} ></img>
        <div className="itemcount" >
            <div className='conteinerBotones' >
                <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                <span className="contador">{contador} </span>
                <span className="contador">{contador} USD </span>
                <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                
            </div>
            <div className='agregarConteiner'>
                <input type="button" value={stock ? "Agregar al carrito" : "No hay Stock"} className="boton_agregar_carrito" 
                onClick={stock ? agregar_a_carrito : ""}></input>
            </div>
            <h3 className="genetica" >Genetica: {genetica}</h3>
        </div>
        <h4 className='cardTituloN'>Valor por unidad {valor} USD</h4>
        
        
    </div>
    )
}