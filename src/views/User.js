import React from 'react';
import {Context} from '../store/appContext';
import FieldCard from '../components/FieldCard';
class User extends React.Component {
  constructor(){
    super();
    this.state={
      image:[]
    }

    this.ChangeImage = this.ChangeImage.bind(this)
  }

  ChangeImage(e){
    console.log(e.target.files[0])
  }
  render() {

    return(
        <Context.Consumer>
        {
            ({store, actions}) => {
                return(
                <div className="container">
                  <div className="row user-container">
                    <div className="col-sm-3">
                      <div className="card">
                        <img id="img-user" src="img/team2.jpg" alt="John" style={userimg} />
                        <div className="profile-userbuttons">
                          <input id="file"type="file" className="inputfile" onChange={this.ChangeImage}/>

                          <label htmlFor="file" >
                            <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                            </figure>
                            <h6>Subir Imagen</h6>
                          </label>
                          </div>
                        <h3 id="title-user">{store.userfile.firstname} {store.userfile.lastname}</h3>

                        <p className="deporte">{store.userfile.deporte}</p>

                        <p className="carrera">{store.userfile.carrera}</p>

                        <p className="phone-number">{store.userfile.phone_number}</p>

                        <div className="icons" style={iconsize}>
                          <a id="icon-contact" href={store.userfile.twitter}><i className="fab fa-twitter"></i></a>
                          <a id="icon-contact" href={store.userfile.instagram}><i className="fab fa-instagram"></i></a>
                          <a id="icon-contact" href={store.userfile.facebook}><i className="fab fa-facebook"></i></a>
                        </div>
                        <button
                        type="button"
						className="btn btn-success"
						data-toggle="modal"
						data-target=".moda-editUser"
						> Editar </button>
                      </div>
                    </div>





                    <div className="modal bd-example-modal-xl moda-editUser"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="myExtraLargeModalLabel"
                    aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <div className="modal-header" style={center}>
                            <h1 className="tittle">Editar información</h1>
                            </div>
                          <div className="modal-body">

                          <form
                          className="Form-data">
                              <div className="form-row">
                                  <div className="form-group col-md-6">
                                      <label htmlFor="fieldTitle">Nombres</label>
                                      <input type="text"
                                      className="form-control"
                                      id="fieldTitle" placeholder="Nombre"
                                      value={store.userfile.firstname}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="firstname"
                                      />

                                  </div>

                                  <div className="form-group col-md-6">
                                      <label htmlFor="schedule">Apellidos</label>
                                      <input type="text"
                                      className="form-control" id="schedule"
                                      placeholder="Apellidos"
                                      value={store.userfile.lastname}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="lastname"/>
                                  </div>

                                  <div className="form-group col-md-12">
                                      <label htmlFor="uploadImg">Email</label>
                                      <input
                                      type="text"
                                      onChange={(e)=> actions.handleChange(e)}
                                      value={store.userfile.e_mail}
                                      className="form-control"
                                      name="e_mail"
                                      placeholder="&#128231; e-mail"
                                      id="uploadImg"/>
                                  </div>

                                  <div className="form-group col-md-12">
                                      <label htmlFor="gender">Genero</label><br/>
                                      <input
                                      className="form-group col-md-6"
                                      type="radio"

                                      name='gender'
                                      onChange={(e)=> actions.handleChange(e)}
                                      id="Masculino"
                                      value="Masculino"
                                      /><label htmlFor="Masculino">Masculino</label>

                                      <input
                                      className="form-group col-md-6"
                                      type="radio"

                                      name='gender'
                                      onChange={(e)=> actions.handleChange(e)}
                                      id="Femenino"
                                      value="Femenino"

                                      /><label htmlFor="Femenino">Femenino</label>
                                  </div>

                                  <div className="form-group col-md-6">
                                      <label htmlFor="deporte">Deportes</label>
                                      <input type="text"
                                      className="form-control"
                                      placeholder="Fútbol, Basketball ..."
                                      value={store.userfile.deporte}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="deporte"/>
                                  </div>

                                  <div className="form-group col-md-6">
                                      <label htmlFor="schedule">Profesión</label>
                                      <input type="text"
                                      className="form-control"
                                      placeholder="Profesión"
                                      value={store.userfile.carrera}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="carrera"/>
                                  </div>

                                  <div className="form-group col-md-12">
                                      <label htmlFor="schedule">Telefono</label>
                                      <input type="text"
                                      className="form-control"
                                      placeholder="+56 9 ..."
                                      value={store.userfile.phone_number}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="phone_number"/>
                                  </div>

                                  <div className="form-group col-md-12">
                                      <label htmlFor="schedule">Twitter</label>
                                      <input type="text"
                                      className="form-control"
                                      placeholder="http://www.twitter.com/user..."
                                      value={store.userfile.twitter}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="twitter"/>
                                  </div>

                                  <div className="form-group col-md-12">
                                      <label htmlFor="schedule">Instagram</label>
                                      <input type="text"
                                      className="form-control"
                                      placeholder= "http://www.instagram.com/user"
                                      value={store.userfile.instagram}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="instagram"/>
                                  </div>

                                  <div className="form-group col-md-12">
                                      <label htmlFor="schedule">Facebook</label>
                                      <input type="text"
                                      className="form-control"
                                      placeholder="https://www.facebook.com/user"
                                      value={store.userfile.facebook}
                                      onChange={(e)=> actions.handleChange(e)}
                                      name="facebook"/>
                                  </div>

                                  </div>
                                  </form>

                      <div className="button-add" style={centerPage}>
                          <button type="submit"
                          style={margin}
                          className="btn btn-success"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={(e)=> actions.handleSubmit(e)}

                          >Guardar Cambios</button>
                          <button type="button" style={margin} className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">Cerrar</span>
                          </button>
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>







                    <div className="col-md-9 "  >
                    <div className="card">
                    <h3>Lugares Visitados</h3>
                            <div className="profile-content">
    						<div className="overflow" style={{height: "570px"}}>
    						{store.admin_field_card.map((item,index) => {
    							return(
    								<FieldCard
    								title={item.title}
    								schedule={item.schedule}
    								opsOfServicesSelected={item.opsOfServicesSelected}
    								playersCapacity={item.playersCapacity + " Personas Max" }
    								address= {item.address}
    								typeOfSoil={item.typeOfSoil}
    								typeOfSport={item.typeOfSport}
    								price={item.price + " CLP"}
    								index={index}
                                    description={item.description}
    								key={index}
    								/>
    								)}
    							)
    						}
    						</div>
                            </div>
                            </div>
                		</div>
                  </div>
                  </div>
                )
            }
        }
      </Context.Consumer>
    )
  }
}

export default User;


let userimg=
{
  width:'100%'
}
let iconsize=
{
  margin: '24px 0'
}

let centerPage =
{
	textAlign: 'center',
	margin: '10px'
}
let margin=
{
	margin:"12px",
}
let center =
{
	margin: '0 auto',
}
