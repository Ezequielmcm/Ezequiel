import React from 'react';

const Itemcarrito = ({data, sacarDelCarrito}) => {
    const {id, nombre, precio, envio, quantity} = data;

    return (
        <div className='item-carrito'>
            <h4>{nombre}</h4>
            <h5>$ {precio} x {quantity} = $ {precio * quantity}</h5>
            <h6>{envio}</h6>
            <button className='boton' onClick={() => sacarDelCarrito(id)}>Sacar Uno</button>
            <button onClick={() => sacarDelCarrito(id, true)}>Sacar Todo</button>
        </div>
    );
}

export default Itemcarrito;
