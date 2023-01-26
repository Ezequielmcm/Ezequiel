import React from 'react';

const Productos = ({data, meterAlCarrito}) => {
    const {id, nombre, precio, envio, src} = data;

    return (
            <div className='producto-individual'>
                <div className='caja'>
                    <h4>{nombre}</h4>
                    <button onClick={() => meterAlCarrito(id)}>Agregar</button>
                    <h5>$ {precio}</h5>
                    <h6>{envio}</h6>
                    <p>lorem hsdha sdaishd ad  dsad ad sadasdwo uldbqwlbdwi wb dkw ahcwo9 wnaiocjxna hwoiajwanpac nawoincan pweacqdkbdwqi bw qdb wqdbiv dqw uiwqbdqw </p>
                    <img src={data.src} style={{maxWidth: 80, height: 70}} />
                </div>
            </div>
    );
}

export default Productos;
