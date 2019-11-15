import React, { Fragment } from "react";
import {Context} from '../store/appContext';


const Descriptions = () => {
    return (
        <Context.Consumer>
        {
            ({ store, actions }) => {
                return(
                    <Fragment>
                <h5 style={{ paddingTop: "40px", paddingBottom: "20px" }}>Descripción</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Prestaciones</th>
                        <th scope="col">Tipo de Suelo</th>
                        <th scope="col">Capacidad de Jugadores</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Baños</td>
                        <td>Pasto Sintetico</td>
                        <td>10 Jugadores</td>
                        <td>$20.000</td>
                    </tr>
                    <tr>
                        <td>Lockers</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cafeteria</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </Fragment>
                )
            }
        }
            </Context.Consumer>
    );
}


export default Descriptions;
