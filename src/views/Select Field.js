import React, { Fragment } from "react";
import FieldCard from "../components/FieldCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class FieldsView extends React.Component {
    render() {
        return (
            <Fragment>
                <Context.Consumer>
                    {
                     ({store, actions}) => {
                         return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-background">
                        <div className="dropdown">
                                <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="no-style">
                                    <img src="img/SVG/orlando.png" alt="menu" className="img-fluid" />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="/">Logout</Link>
                                    <Link className="dropdown-item" to="/user">Profile</Link>
                                </div>
                            </div>
                            <h5 className="text-center">Preferences</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="select1">Tipo de Deporte</label>
                                    <select className="form-control" id="select1">
                                        <option value="Futbol">Fútbol</option>
                                        <option value="Basketball">Basketball</option>
                                        <option value="Baseball">Baseball</option>
                                        <option value="Tennis">Tennis</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="select1">Tipo de Pavimento</label>
                                    <select className="form-control" id="select1">
                                        <option value="Cemento">Cemento</option>
                                        <option value="Cesped sintetico">Cesped sintetico</option>
                                        <option value="Cesped natural">Cesped natural</option>
                                        <option value="Madera">Madera</option>
                                        <option value="Vinilo">Vinilo</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="select1">Capacidad</label>
                                    <select className="form-control" id="select1">
                                        <option>2 persona</option>
                                        <option>4 personas</option>
                                        <option>10 personas</option>
                                        <option>20 personas</option>
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn-register-card">Filter</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8 my-background">
                            <div className="container padding-for-container">

                            <div className="overflowField">
                                {store.admin_field_card.map((item) => {
                                    return(
                                        <FieldCard
                                        key={item.id}
                                        title={item.title}
        								schedule={item.schedule}
        								opsOfServicesSelected={item.opsOfServicesSelected}
        								playersCapacity={item.playersCapacity}
        								address= {item.address}
        								typeOfSoil={item.typeOfSoil}
        								typeOfSport={item.typeOfSport}
        								price={item.price + " CLP"}
                                        description={item.description}

                                        />
                                    )}
                                )
                            }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
                }
                }
                </Context.Consumer>
            </Fragment>
        );
    }
}
