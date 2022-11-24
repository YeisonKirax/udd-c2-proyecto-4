import { Container, Table } from 'react-bootstrap'
import './lista-reservas.css'

export default function ListaReservas() {
  const reservas = [
    {
      nombreCliente: "Yeison Fernandez", tipoMesa: "4 personas",
      fechaReserva: "2022-10-22", horaReserva: "20:00"
    },
    {
      nombreCliente: "Yeison Fernandez 1", tipoMesa: "3 personas",
      fechaReserva: "2022-10-22", horaReserva: "20:00"
    },
    {
      nombreCliente: "Yeison Fernandez 2", tipoMesa: "2 personas",
      fechaReserva: "2022-10-22", horaReserva: "20:00"
    },
    {
      nombreCliente: "Yeison Fernandez 3", tipoMesa: "3 personas",
      fechaReserva: "2022-10-22", horaReserva: "20:00"
    }
  ] 
  return (
    <Container>
      <p>A continuación, podrá ver el listado de reservaciones realizadas</p>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Persona quien reservó</th>
            <th>Tipo de mesa</th>
            <th>Fecha reservad</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {
            reservas.length === 0 ?
              <tr>
                <td colSpan={ 4 }>No hay reservaciones</td>
              </tr>
              : reservas.map( reserva => (
                <tr>
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
      </Table>
    </Container>
  )
}