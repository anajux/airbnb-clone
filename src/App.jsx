import 'bootstrap/dist/css/bootstrap.css'; //importação do bootstrap
import 'bootstrap/dist/js/bootstrap'; //importação do bootstrap
import './app.css'; //importar css geral


import Categorias from './components/Categorias';
import Navbar from './components/Navbar'; //importação componentes
function App() {
  return (
    <div><Navbar /><Categorias />
    </div>

  )
}

export default App
