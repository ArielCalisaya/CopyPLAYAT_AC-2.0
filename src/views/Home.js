import React, { Fragment } from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";


export default class Home extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="container login-container">
                                <div className="row my-size">
                                    <div className="col-md-6 content-img d-none d-md-block">
                                    <img src="img/orlando.png" alt="Logo" className="img-fluid"/>
                                    </div>
                                    <div className="text-center col-md-6 my-padding">
                                        <span className="my-text-center">INICIAR SESIÓN</span>
                                        <div>
                                            <form className="my-padding">
                                                <div className="row">
                                                    <div className="col">
                                                        <input type="text" name="username" className="form-control" placeholder="Username" value={store.userfile.username} onChange={(e) => actions.handleChange(e)} />
                                                    </div>
                                                    <div className="col">
                                                        <input type="password" name="password" className="form-control" placeholder="Password" value={store.userfile.password} onChange={(e) => actions.handleChange(e)} />
                                                    </div>
                                                </div>
                                                <div className="row my-padding-top">
                                                    <div className="col">
                                                        <button className="btn-register-home" onClick={(e) => actions.handleSubmit(e)}>Sign In</button>
                                                    </div>
                                                </div>
                                                <div className="row my-padding-top">
                                                    <div className="col">
                                                        <span>Forgot <a href="#">Password</a>?</span>
                                                    </div>
                                                </div>
                                            </form>
                                            <div>
                                                <Link to="/register"><button className="btn-register-home">Sign Up</button></Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        );
    }
}
