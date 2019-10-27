import React from "react";
import {Context} from "../store/appContext";

const FieldCardAdmin = (props) => {
    return (
        <Context.Consumer>{
            ({actions}) => { return(
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="./../img/image.jpg" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text"><ul className="ul-card text-justify">
                            <li><i class="fas fa-dollar-sign"></i>{props.price}</li>
                            <li><i class="fas fa-warehouse"></i>{props.playersCapacity}</li>
                            <li><i class="fas fa-dice-d6"></i>Futbolito/Football Sala</li>
                        </ul></p>
                        <button className="btn-register-card" onClick={(e) => actions.editAdminCard(e, props.index)}>Editar</button>
                        <button className="btn-register-card" onClick={(e) => actions.deleteAdminCard(e,props.index)}>Eliminar</button>
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