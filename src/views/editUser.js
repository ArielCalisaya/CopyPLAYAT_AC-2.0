import React from 'react';
import Swal from 'sweetalert2';
import {Context} from "../store/appContext";

class EditUser extends React.Component {

alertSaved(e){
  Swal.fire({
  title: '¿Guardar Cambios?',
  type: 'question',
  confirmButtonColor: '#04B404',
  cancelButtonColor: '#d33',
  showCancelButton: true,
  confirmButtonText: 'Guardar Cambios'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      '¡Cambios Guardados!',
      'Se han guardado tus datos con exito',
      'success'
  )
  }
})
}

render(){
    return(
        <div className="container-register edit-user-info">
        <Context.Consumer>
            {
                ({store, actions}) => {
                    return(
                          <form className="register-form" onSubmit={(e) => actions.handleSubmit(e)}>
                              <h1 className="tittle-user-files ">
                              Hora de Realizar unos <br/>Cambios !!!</h1>
                            <div className="input-container-register edit-userContainer">
                              <input
                              value={store.userfile.firstname}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Nombres" name='firstname' className="input-48"
                              />
                              <input
                              value={store.userfile.lastname}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Apellido" name="lastname" className="input-48"
                              />
                              <input
                              value={store.userfile.deporte}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Deportes Preferidos" name="deporte" className="input-100"
                              />
                              <input
                              value={store.userfile.carrera}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Dedicacion? ej: Pro-Trainer, Aficionado al Deporte" name="carrera" className="input-100"
                              />
                              <input
                              value={store.userfile.phone_number}
                              onChange={(e) => actions.handleChange(e)}
                              type="tel" placeholder="Cel: +56" name="phone_number" className="input-100"
                              />

                              <input
                              value={store.userfile.twitter}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Twitter" name="twitter" className="input-100"
                              />
                              <input
                              value={store.userfile.instagram}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Instagram" name="instagram" className="input-100"
                              />
                              <input
                              value={store.userfile.facebook}
                              onChange={(e) => actions.handleChange(e)}
                              type="text" placeholder="Facebook" name="facebook" className="input-100"
                              />

                              <button onClick={this.alertSaved} className="btn-edit" type="submit" >
                              Guardar</button>
                              <h5 className="back-user"><a href='/user'>Regresar</a></h5>
                            </div>
                          </form>
                        )
                    }
                }
            </Context.Consumer>
            </div>
        )
    }
}
export default EditUser;
