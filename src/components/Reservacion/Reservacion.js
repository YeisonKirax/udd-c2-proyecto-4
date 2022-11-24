import { Tab, Tabs } from 'react-bootstrap'
import FormularioReserva from './FormularioReserva/FormularioReserva'
import ListaReservas from './ListaReservas/ListaReservas'
import "./reservacion.css"

export default function Reservacion() {
  return (
    <Tabs defaultActiveKey={ "reservaciones" } fill>
      <Tab title={ "Reservaciones" } eventKey={ "reservaciones" } mountOnEnter={ true } unmountOnExit={ true }>
        <ListaReservas></ListaReservas>
      </Tab>
      <Tab title={ "Hacer una reservación" } eventKey={ "reservacion" }>
        <FormularioReserva></FormularioReserva>
      </Tab>
    </Tabs>
  )
}