import React, {useState} from 'react'
import  Button  from 'react-bootstrap/Button'
import "./styles.css"
const Formulario = (props) => {
   /**
   * Stateless
   * Stateful
   *
   * Formularios controlados
   *  1- Crear un estado(useState)
   *  2- Vincular el input con el estado --> value
   *  3- Menejar el evento onChange
   *    3.1 - Generamos una funcion que reciba el evento
   *    3.2 - Vincular el onChange del input con el 3.1
   *    3.3 - Debemos actulizar el estado accediendo 
   */

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")

  function ManejaCambio (evento) {
    setTitulo(evento.target.value)
  }
  function ManejaDescripcion (evento) {
    setDescripcion(evento.target.value)
  }

  function enviarDatos (evento){
    evento.preventDefault()
    props.envioDeTarea({
        titulo: titulo,
        descripcion: descripcion,
        completada: false,
    })
    setTitulo("")
    setDescripcion("")
    //Fetch
    //fetch("url", { method: "POST"})
  } 
  /**
   * Eventos ---> onSubmit
   */

  return (

    <form className='Formulario' onSubmit={enviarDatos}>
        <h2>Agrega tu tarea</h2>
        <input 
        placeholder='Ingresa el titulo' 
        value={titulo}
        onChange={ManejaCambio}
        />
        <input 
        placeholder='Ingresa tu descripcion'
        value={descripcion}
        onChange={ManejaDescripcion}
        />
        <Button variant="primary" type='submit'>Agregar</Button>
    </form>
  )
}

export default Formulario