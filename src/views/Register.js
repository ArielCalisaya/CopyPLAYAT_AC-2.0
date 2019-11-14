import React from 'react';
import {Context} from "../store/appContext";

class Registro extends React.Component{

  render(){
    return(
      <div className="container-register">
        <Context.Consumer>
          {
            ({store,actions}) => {return(
        <form onSubmit={(e)=> actions.handleSubmit(e)} className="register-form">
          <h1 className="tittle">Sign Up</h1>
          <div className="input-container-register">
          <input
          value={store.userfile.username}
          onChange={(e)=> actions.handleChange(e)}
          type="text" placeholder="&#128272; Usuario" name="username" className="input-100 input-register"
          />
          <input
          value={store.userfile.password}
          onChange={(e)=> actions.handleChange(e)}
          type="password" placeholder="&#128272; Contraseña" name="password" className="input-100 input-register" />
          <input
          value={store.userfile.firstname}
          onChange={(e)=> actions.handleChange(e)}
          type="text" placeholder="Nombre" name="firstname" className="input-48 input-register"  />
          <input
          value={store.userfile.lastname}
          onChange={(e)=> actions.handleChange(e)}
          type="text" placeholder="Apellido" name="lastname" className="input-48 input-register"  />
          <input
          value={store.userfile.e_mail}
          onChange={(e)=> actions.handleChange(e)}
          type="text" name="e_mail" placeholder="&#128231; e-mail" className="input-100 input-register" />
          <div className="genre">
            <label id="genre-tittle">Genero</label><br/>
            <input name='gender' onChange={(e)=> actions.handleChange(e)} type="radio" id="Masculino" value="Masculino"/>Masculino
            <input name='gender' onChange={(e)=> actions.handleChange(e)} type="radio" id="Femenino" value="Femenino"/>Femenino
          </div>
          <button className="btn-register" type="submit" value="submit">Registrar</button>
          <p className="sing-in">Ya tienes cuenta? <br/><a href="/signin.com" target="_blank">Ingresa aquí</a></p>
          <div className="g-signin2" data-longtitle="true"/>
          </div>
          </form>
            )}}
          </Context.Consumer>
      </div>
      //DEBUG: En google api button uncaught TypeError: Cannot read property 'style' of null
      // item google sign in no usado
      // msg: de consola html
      // TERMINAR: Vista de imagen para Sabado
    )
  }
}
export default Registro;

// actulizacion 27/09/2019 1:06: AGREGADO; funcion para almacenar datos en consola.


// otra opcion para reemplazar imput tipo radio a un Select
// <label>
//   Sexo:
//   <select name='gender' >
//     <option value="Masculino">Masculino</option>
//     <option value="Femenino">Femenino</option>
//     <option value="Otro">Otro</option>
//   </select>
// </label>
