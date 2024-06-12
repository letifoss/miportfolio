import './App.css';

import Menu from './componentes/Menu';
import Presentacion from './componentes/Presentacion';
import Proyectos from './componentes/Proyectos';
import Habilidades from './componentes/Habilidades';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function App() {
  return (
    <div className="App mulish-font">
      <div className='background'>
      <Menu />
      <Presentacion />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </div>
    </div>
  );
}

export default App;
