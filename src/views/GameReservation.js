import React, { Fragment } from "react";
import Descriptions from "../components/Descriptions"

export default class GameReservation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center my-background">
                            <h1>Parque O´higgins</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src="./../img/image.jpg" className="img-fluid mx-auto d-block" alt="Responsive image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center my-background">
                            <Descriptions />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn-register">Reservar</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}