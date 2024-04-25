import './App.css';

import Menu from './componentes/Menu';
import Presentacion from './componentes/Presentacion';
import Proyectos from './componentes/Proyectos';
import Habilidades from './componentes/Habilidades';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import DogImage from './componentes/ApiDog';


function App() {

   return (
    <div className="App">
      <Menu />
      <Presentacion />
      <DogImage />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
