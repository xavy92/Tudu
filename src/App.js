import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './components/Navbar';
import Formulario from "./components/Formulario"
import ListaTareas from './components/ListaTareas';
import { useState } from "react"

function App() {
  const todasLasTareasIniciales = [
    {
      titulo: "Hacer que funcione el Tudu",
      descripcion: "estamos aprendiendo React",
      completada: false,
    },
    {
      titulo: "Hacer que funcione el Tudu",
      descripcion: "estamos aprendiendo React",
      completada: false,
    },
    {
      titulo: "Hacer que funcione el Tudu",
      descripcion: "estamos aprendiendo React",
      completada: false,
    },
  ]

  const [todasLasTareas, setTodasLasTareas] = useState(todasLasTareasIniciales)

  const envioDeTarea = (nuevaTarea) => {
    /**
     * como actuai
     * lizar un arreglo con nuevos datos?
     * 
     * 1.- crea la copia con el spred operator para arreglos
     *    NUNCA SE USA PUSH
     * 2.- Agregar el nuevo objeto al arreglo copia 
     * 3.-Actualizar el estado con el nuevo arreglo 
     * 
     */
    /**Hcemos una copia */
    const nuevoArreglo = [...todasLasTareas, nuevaTarea]
    setTodasLasTareas(nuevoArreglo)
  }

  const eliminarTarea = (posicion) => {

    /**
     * 1.- crea la copia con el spred operator para arreglos
     * 2.- usamos el metodo SPLICE para eliminar apartir de una posicion
     * 3.- actualizamos el estado con el nuevo arreglo del paso --> 2
     */
    const nuevoArreglo = [...todasLasTareas]
    
    nuevoArreglo.splice(posicion, 1)

    setTodasLasTareas(nuevoArreglo)

  }
  return (
    <div className="App">
      <NavbarComponent todasLasTareas={todasLasTareas}/>
      <Container>
        <Row>
          <Col>
            <Formulario envioDeTarea={envioDeTarea}/>
          </Col>
          <Col>
            <ListaTareas 
            todasLasTareas={todasLasTareas}
            eliminarTarea= {eliminarTarea}
            />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}


export default App;
