import React, { Fragment } from "react";
import { Context } from "../store/appContext";

const FieldCard = (props) => {
    return (
        <Fragment>
        <Context.Consumer>
        {
        ({store, actions}) => {
            return(

        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="./../img/image.jpg" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <ul className="ul-card">
                        <p className="card-text">
                            <li><i className="fa fa-dollar "></i> {props.price}</li>
                            <li><i className="fa fa-users "></i> {props.playersCapacity}</li>
                            <li><i className="fa fa-play "></i> {props.typeOfSport}</li>
                            <li><i className="fa fa-cogs"></i> {props.typeOfSoil}</li>
                            <li><i className="fa fa-map-marker"></i> {props.address}</li>
                            <li><i className="fa fa-clock-o"></i> {props.schedule}</li>
                            <li><i className="fa fa-plus-circle"></i> {props.opsOfServicesSelected + ""}</li>
                        </p>
                        </ul>
                        <button
                        type="button"
                        className="btn-register-card"
                        data-toggle="modal"
                        data-target=".modal-forAddFieldCard"
                        >Ver</button>
                    </div>
                </div>

                <div key={props.index} className="modal bd-example-modal-xl modal-forAddFieldCard"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myExtraLargeModalLabel"
                aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header" style={center}>
                        <h5 className="modal-title h4" id="myExtraLargeModalLabel">{props.title}</h5>
                        </div>
                      <div className="modal-body">
                          <form>
                              <div className="form-row">
                              <div className="form-group col-md-12">
                              <img style={{width:"690px"}} src="./../img/image.jpg" className="card-img" alt="..." />
                              </div>
                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="schedule">Horario: {props.schedule}</h5>
                                  </div>


                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="servicesInput">Servicios incorporados: {props.opsOfServicesSelected}</h5>
                                  </div>


                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="inputSoil">Tipo de Suelo: {props.typeOfSoil}</h5>
                                  </div>

                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="inputCapacity">Capacidad de Jugadores:
                                      {props.playersCapacity}</h5>
                                  </div>

                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="inputPrice">Valor de Cancha: {props.price}</h5>
                                  </div>

                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="inputAddress">Direccion: {props.address}</h5>
                                  </div>

                                  <div className="form-group col-md-6">
                                      <h5 htmlFor="inputSport">Tipo de Deporte: {props.typeOfSport}</h5>
                                  </div>
                              </div>
                  </form>

                  <div className="button-add" style={centerPage}>
                      <button type="submit"
                      style={margin}
                      className="btn btn-success"
                      data-dismiss="modal"
                      aria-label="Close"
                      >Agregar</button>
                      <button type="button" style={margin} className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">Cerrar</span>
                      </button>
                  </div>
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
        </Fragment>
    );
}


export default FieldCard;

let center =
{
	margin: '0 auto',
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
