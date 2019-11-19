import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FieldCard = (props) => {
    return (
        <Context.Consumer>
            {
                ({ store, actions }) => {
                    return (
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="./../img/image.jpg" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <ul className="ul-card">
                                        <li><i className="fa fa-dollar "></i> {props.price}</li>
                                        <li><i className="fa fa-users "></i> {props.playersCapacity}</li>
                                        <li><i className="fa fa-play "></i> {props.typeOfSport}</li>
                                        <li><i className="fa fa-cogs"></i> {props.typeOfSoil}</li>
                                        <li><i className="fa fa-map-marker"></i> {props.address}</li>
                                        <li><i className="fa fa-clock-o"></i> {props.schedule}</li>
                                        <li><i className="fa fa-plus-circle"></i> {props.opsOfServicesSelected + ""}</li>
                                        <li><i className="fa fa-clock-o"></i> {props.description}</li>
                                        </ul>
                                    </div>
                                    <div>


// FIXME: Modal hace target a todos los objetos de field card, por lo cual no permite una moderada interaccion con el cliente
                                        <button onClick={(e) => actions.toggleModal(e)} className="btn-register-card">Ver</button>
                                        <Modal isOpen={store.modal} fade={false}>
                                        <ModalHeader toggle={(e) => actions.toggleModal(e)}>{props.title}</ModalHeader>
                                            <ModalBody>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12 text-center my-background">

                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 text-center">
                                                            <img src="./../img/image.jpg" className="img-fluid mx-auto d-block" alt="FieldImage" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-4">
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <ul className="text-left list-unstyled">
                                                                <li><i className="fas fa-users fa-2x p-3 col-6 pink"></i>{props.playersCapacity}</li>
                                                                <li> <i className="fas fa-bath fa-2x p-3 col-6  pink"></i>Vestidores</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <ul className="text-left list-unstyled">
                                                                <li><i className="fas fa-utensils fa-2x p-3 col-6 pink"></i>Casino</li>
                                                                <li> <i className="fas fa-parking fa-2x p-3 col-6 pink"></i>Parking</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <ul className="text-left list-unstyled">
                                                                <li><i className="fas fa-wifi fa-2x p-3 col-6 pink"></i>Wifi</li>
                                                                <li><i className="fas fa-archive fa-2x p-3 col-6 pink"></i>Lockers</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="row pt-4">
                                                        <p>
                                                            {props.description}
                                                        </p>
                                                    </div>
                                                    <div className="row pt-4">
                                                        <i className="far fa-calendar-alt">
                                                            <DatePicker
                                                                selected={store.startDate}
                                                                onChange={(e) => actions.handleChangeDate(e)}
                                                                locale="pt-BR"
                                                                showTimeSelect
                                                                timeFormat="p"
                                                                timeIntervals={60}
                                                                dateFormat="Pp"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <button className="btn-register-card" onClick={(e) => actions.handleReservation(e)}>Reservar</button>
                                                <button className="btn-register-card" onClick={(e) => actions.toggleModal(e)}>Cancelar</button>
                                            </ModalFooter>
                                        </Modal>
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


export default FieldCard;
