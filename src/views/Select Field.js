import React, { Fragment } from "react";
import FieldCard from "../components/FieldCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
 


export default class FieldsView extends React.Component {
    constructor() {
        super();
    }

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
                        <div class="dropdown">
                                <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="no-style">
                                    <img src="img/orlando.png" alt="menu" className="img-fluid" />
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link class="dropdown-item" to="/">Logout</Link>
                                    <Link class="dropdown-item" to="/user">Profile</Link>
                                </div>
                            </div>
                            <h5 className="text-center">Preferences</h5>
                            <form>
                                <div className="form-group">
                                    <label for="select1">Type of game</label>
                                    <select class="form-control" id="select1">
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="select1">Type of soil</label>
                                    <select class="form-control" id="select1">
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="select1">Field size</label>
                                    <select class="form-control" id="select1">
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="select1">Capacity</label>
                                    <select class="form-control" id="select1">
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                        <option>Default select</option>
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button type="submit" class="btn-register-card">Filter</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8 my-background">
                            <div className="container padding-for-container">
                                {store.admin_field_car.map((item,index) => {return(<FieldCard />);})}
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