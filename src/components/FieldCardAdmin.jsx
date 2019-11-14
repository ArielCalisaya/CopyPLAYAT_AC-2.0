import React from "react";
import {Context} from "../store/appContext";

const FieldCardAdmin = (props) => {
    return (
        <Context.Consumer>{
            ({store, actions}) => {
                return(
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="./../img/image.jpg" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h5 className="card-text">
                        <ul className="ul-card text-justify">
                            <li>
                                <i className="fa fa-usd fa-lg" aria-hidden="true"></i>
                                {props.price}
                            </li>
                            <li>
                                <i className="fa fa-users fa-lg" aria-hidden="true"></i>
                                {props.playersCapacity}
                            </li>
                            <li>
                                <i className="fa fa-gamepad fa-lg" aria-hidden="true"></i>
                                {props.typeOfSport}
                            </li>
                            <li>
                                <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                                {props.schedule}
                            </li>
                            <li>
                                <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                                {props.opsOfServicesSelected + "" }
                            </li>
                            <li>
                                <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
                                {props.typeOfSoil}
                            </li>
                            <li>
                                <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                                {props.address}
                            </li>
                        </ul>
                        </h5>

                        <button
                        className="btn-register-card"
                        data-toggle="modal"
                        data-target=".modal-editForAdmin"
                        onClick={(e) => actions.editAdminCard(e, props.index)}
                        >Editar
                        </button>



                        <button
                        className="btn-register-card"
                        onClick={(e) => actions.deleteAdminCard(e,props.index)}
                        >Eliminar
                        </button>
                    </div>
                </div>
            </div>



            <div className="modal bd-example-modal-xl modal-editForAdmin"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-xl">

              <div className="modal-content">
              <div className="modal-header" style={center}>
              <h5 className="modal-title h4" id="myExtraLargeModalLabel">Tus Campos Deportivos</h5>
              </div>
              <div className="modal-body">
                      <form
                      className="Form-data"

                      >
                          <div className="form-row">
                              <div className="form-group col-md-6">
                                  <label htmlFor="fieldTitle">Nombre de Sitio/Cancha</label>
                                  <input type="text"
                                  className="form-control"
                                  id="fieldTitle" placeholder="Titulo de Cancha/Campo"
                                  value={store.sport_field_data.title}
                                  onChange={(e)=> actions.handleChangeFieldData(e)}
                                  name="title"/>
                              </div>

                              <div className="form-group col-md-6">
                                  <label htmlFor="schedule">Horario</label>
                                  <input type="text"
                                  className="form-control" id="schedule"
                                  placeholder="8:30 a ..."
                                  value={store.sport_field_data.schedule}
                                  onChange={(e)=> actions.handleChangeFieldData(e)}
                                  name="schedule"/>
                              </div>

                              <div className="form-group col-md-12">
                                  <label htmlFor="uploadImg">Subir Imagen</label>
                                  <input type="file"
                                  className="form-control"
                                  id="uploadImg" placeholder="Imagen de tu Cancha/Campo" />
                              </div>

                              <div className="form-group col-md-6">
                                  <label htmlFor="servicesInput">Servicios Incorporados</label>
                                  <br/>
                                  <select className="selectpicker"
                                  multiple
                                  id="servicesInput"
                                  onChange={(e)=> actions.handleChangeSelect(e)}
                                  >
                                      <option value="Baños">Baños</option>
                                      <option value="Cafeteria">Cafeteria</option>
                                      <option value="Quincho">Quincho</option>
                                      <option value="Bebederos">Bebederos</option>
                                      <option value="Casino">Casino</option>
                                  </select>
                              </div>


                              <div className="form-group col-md-6">
                                  <label htmlFor="inputSoil">Tipo de Suelo</label>
                                  <select id="inputSoil"
                                  className="form-control selectpicker"
                                  onChange={(e)=> actions.handleUniqueSelect(e)}
                                  name="typeOfSoil"
                                  >
                                      <option value>Elegir...</option>
                                      <option value="Cemento">Cemento</option>
                                      <option value="Cesped sintetico">Cesped sintetico</option>
                                      <option value="Cesped natural">Cesped natural</option>
                                      <option value="Madera">Madera</option>
                                      <option value="Vinilo">Vinilo</option>
                                  </select>
                              </div>

                              <div className="form-group col-md-6">
                                  <label htmlFor="inputCapacity">Capacidad de Jugadores</label>
                                  <input type="number"
                                  className="form-control" id="inputCapacity"
                                  placeholder="Capacidad de jugadores"
                                  value={store.sport_field_data.playersCapacity}
                                  onChange={(e)=> actions.handleChangeFieldData(e)}
                                  name="playersCapacity"/>
                              </div>

                              <div className="form-group col-md-6">
                                  <label htmlFor="inputPrice">Valor de Cancha (CLP)</label>
                                  <input type="text"
                                  className="form-control"
                                  id="inputPrice"
                                  placeholder="$"
                                  value={store.sport_field_data.price}
                                  onChange={(e)=> actions.handleChangeFieldData(e)}
                                  name="price"/>
                              </div>

                              <div className="form-group col-md-6">
                                  <label htmlFor="inputAddress">Direccion</label>
                                  <input type="text"
                                  className="form-control"
                                  id="inputAddress"
                                  placeholder="Ciudad / Comuna / Calle"
                                  value={store.sport_field_data.address}
                                  onChange={(e)=> actions.handleChangeFieldData(e)}
                                  name="address"/>
                              </div>

                              <div className="form-group col-md-6">
                                  <label htmlFor="inputSport">Tipo de Deporte</label>
                                  <select id="inputSport"
                                  className="form-control selectpicker"
                                  name="typeOfSport"
                                  value={store.sport_field_data.typeOfSport}
                                  onChange={(e)=> actions.handleUniqueSelect(e)}
                                  >
                                      <option value>Elegir...</option>
                                      <option value="Cemento">Football</option>
                                      <option value="Cesped sintetico">Tennis</option>
                                      <option value="Cesped natural">Basketball</option>
                                      <option value="Madera">Baseball</option>
                                      <option value="Vinilo">Volleyball</option>
                                  </select>
                              </div>
                          </div>
                          <div className="button-add" style={centerPage}>
                          <button
                          style={margin}
                          className="btn btn-success"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={(e) => actions.editAdminCard(e, props.index)}
                          >Guardar Cambios</button>
                          <button
                          type="button"
                          style={margin} className="btn btn-danger"
                          data-dismiss="modal"
                          aria-label="Close">
                          <span aria-hidden="true">Salir</span>
                          </button>
                          </div>
                        </form>

                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                );
            }
        }
        </Context.Consumer>
    );
}


export default FieldCardAdmin;

let centerPage =
{
	textAlign: 'center',
	margin: '10px'
}
let center =
{
	margin: '0 auto',
}
let margin=
{
	margin:"12px",
}
