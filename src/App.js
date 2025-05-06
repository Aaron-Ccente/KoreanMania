import Nav from './secciones/Nav.js'
import Nosotros from './secciones/Nosotros.js';
import Menu from './secciones/Menu.js'
import Contacto from './secciones/Contacto.js';
import Historia from './secciones/Historia.js';
function App() {
  return (
    <div className="App overflow-hidden">
      
      <Nav/>
      <Nosotros/>
      <Menu/>
      <Historia/>
      <Contacto/>
    </div>
  );
}

export default App;
