import React, { Fragment } from "react";
import Descriptions from "../components/Descriptions"

export default class GameReservation extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="container container-GameReservation">
                    <div className="row">
                        <div className="col-md-12 text-center my-background">
                            <h1>Parque O´higgins</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src="./../img/image.jpg" className="img-fluid mx-auto d-block" alt="fieldIMG" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center my-background">
                            <Descriptions />
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-item">
                            <button className="btn-register">Reservar</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
