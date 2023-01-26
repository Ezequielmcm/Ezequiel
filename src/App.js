import './App.css';
import Carrito from './componentes/Carrito';

function App() {
  return (
    <div>
      <Carrito />
    </div>
  );
}

export default App;


//Para subir los productos: json-server --watch db/db.json --port 8080
//Para mostrar por pantalla: npm start