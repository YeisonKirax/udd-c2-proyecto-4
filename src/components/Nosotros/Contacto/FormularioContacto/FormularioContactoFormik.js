import { addDoc, collection } from "firebase/firestore";
import { useFormik } from 'formik';
import { db } from '../../../../config/firestore';
import "./formulario-contacto.css";

export default function FormularioContacto() {
  const { handleSubmit, handleChange, values } = useFormik( {
    initialValues: {
      name: "",
      surname: "",
      email: "",
      contactReason: ""
    },
    onSubmit: async function ( values ) {
      console.log( values )
      try {
        const docRef = await addDoc( collection( db, "Contactos" ), values );
        console.log( "Document written with ID: ", docRef.id );
      } catch ( e ) {
        console.error( "Error adding document: ", e );
      }
    }
  } )

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={ values.name } onChange={ handleChange }></input>

      <label htmlFor='surname'>Apellido</label>
      <input id='surname' name='surname' type="text" value={ values.surname } onChange={ handleChange }></input>

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={ values.email } onChange={ handleChange }></input>

      <label htmlFor='contactReason'>Motivo</label>
      <textarea id='contactReason' name='contactReason' value={ values.contactReason } onChange={ handleChange }></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}