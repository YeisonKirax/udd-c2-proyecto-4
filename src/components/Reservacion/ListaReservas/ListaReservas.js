import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Container, Spinner, Table } from 'react-bootstrap'
import { db } from '../../../config/firestore'

import './lista-reservas.css'

export default function ListaReservas() {
  const [ reservas, setReservas ] = useState( [] )
  const [ loadingData, setLoadingData ] = useState( true )

  useEffect( () => {
    const obtenerReservaciones = async () => {
      const reservasCollectionRef = collection( db, 'Reservas' )
      const querySnapshot = await getDocs( reservasCollectionRef )
      const reservas = querySnapshot.docs.map( doc => {
        return { id: doc.id, ...doc.data() }
      } )
      setReservas( reservas )
      setLoadingData( false )
    }
    try {
      obtenerReservaciones()
    } catch ( error ) {
      setLoadingData( false )
      console.error( error )
    }
  }, [] )
  return (
    <Container>
      <p>A continuación, podrá ver el listado de reservaciones realizadas</p>
      {
        loadingData ? (
          <Spinner animation='border' role={ "status" }></Spinner>
        ) : <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Persona quien reservó</th>
            <th>Tipo de mesa</th>
            <th>Fecha reservad</th>
            <th>Hora</th>
              </tr >
            </thead >
            <tbody>
              {
                reservas.length === 0 ?
                  <tr>
                    <td colSpan={ 4 }>No hay reservaciones</td>
                  </tr>
                  : reservas.map( reserva => (
                    <tr key={ reserva.id }>
                      <td>
                        { reserva.nombreCliente }
                      </td>
                      <td>
                        { reserva.tipoMesa }
                      </td>
                      <td>
                        { reserva.fechaReserva }
                      </td>
                      <td>
                        { reserva.horaReserva }
                      </td>
                    </tr>
                  ) )
              }
            </tbody>
        </Table >
      }
    </Container>
  )
}