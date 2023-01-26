import React from 'react';
import { useReducer, useEffect } from 'react';
import {estadoInicial, estadoCambiante} from './estados';
import Itemcarrito from './ItemCarrito';
import Productos from './Productos';
import { TYPES } from './acciones';
import axios from 'axios';
// import Contador from './Contador';

function Carrito() {
    const [state, dispatch] = useReducer(estadoCambiante, estadoInicial);
    
    const actualizarEstado = async () => {
        const productosURL="http://localhost:8080/products"
        const carritoURL="http://localhost:8080/carrito"

        //1- Peticiones axios de tipo HTTP GET (petición de datos a una api)
        const listaProductos = await axios.get(productosURL)
        const carrito = await axios.get(carritoURL)
        
        const nuevosProductos = listaProductos.data;
        const nuevoCarrito = carrito.data;
        
        //2- Por payload le mando a la acción LEER_ESTADO, la respuesta de la petición axios
        dispatch({type: TYPES.LEER_ESTADO, payload: [nuevosProductos, nuevoCarrito]})
    }

    useEffect(() => {
        actualizarEstado();
    }, []);


    const {products, carrito} = state;

    const meterAlCarrito = (id) => {
        // console.log(id)
        dispatch ({type: TYPES.METER_AL_CARRITO, payload: id})
    };
    const sacarDelCarrito = (id, all = false) => {
        // console.log(id, all)
        if (all) {
            dispatch ({type: TYPES.SACAR_TODO_ITEM, payload: id})
        } else {
            dispatch ({type: TYPES.SACAR_DEL_CARRITO, payload: id})
        }
    };
    const limpiarCarrito = (id) => {
        dispatch ({type: TYPES.LIMPIAR_CARRITO, payload: id})
    };
    // const sumaProductos = ({data}) => {
    //     const {precio, quantity} = data
    //     {precio * quantity}
    // }

    return (
        <div className='general'>
            <div className='color'>
            <h2 className='titulo-producto'>Productos:</h2>
            <article>{products.map((producto) => { 
                return <Productos key={producto.id } data={producto} meterAlCarrito={meterAlCarrito} />})}
            </article>
            </div>
            <div className='carrito'>
            <h2>Carrito:</h2>
            <div >{ carrito.map((item, index) => <Itemcarrito key={index} data={item} sacarDelCarrito={sacarDelCarrito} />) }</div>
            <br/>
            {/* <div>{carrito.map((preci) => <Contador key={preci.id} data={preci} sumaProductos={sumaProductos}/>)}</div> */}
            <button onClick={limpiarCarrito}>Limpiar Carrito</button>
            </div>
        </div>
    );
}

export default Carrito;
