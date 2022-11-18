import { addDoc, collection } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../../../../config/firestore';
import './formulario-contacto.css'
export default function FormularioContactoNormal() {
  const [ formValues, setFormValues ] = useState( {
    name: "",
    surname: "",
    email: "",
    contactReason: ""
  } )

  async function handleSubmit( event ) {
    event.preventDefault()
    console.log( formValues )
    try {
      const docRef = await addDoc( collection( db, "Contactos" ), formValues );
      console.log( "Document written with ID: ", docRef.id );
    } catch ( e ) {
      console.error( "Error adding document: ", e );
    }
  }

  function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )

  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={ formValues.name } onChange={ handleFormChange }></input>

      <label htmlFor='surname'>Apellido</label>
      <input id='surname' name='surname' type="text" value={ formValues.surname } onChange={ handleFormChange }></input>

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={ formValues.email } onChange={ handleFormChange }></input>

      <label htmlFor='contactReason'>Motivo</label>
      <textarea id='contactReason' name='contactReason' value={ formValues.contactReason } onChange={ handleFormChange }></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}