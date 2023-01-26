
const Contador = ({data}) => {
    const {id, nombre, precio, quantity} = data;
    const suma = [precio * quantity]
    return (
        <div>
            <h3>precio Total: $ {suma}</h3>
        </div>
    );
}

export default Contador;


//No pude hacer el contador general :(