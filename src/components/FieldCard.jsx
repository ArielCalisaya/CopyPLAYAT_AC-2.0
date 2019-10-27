import React from "react";


const FieldCard = (props) => {
    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="./../img/image.jpg" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text"><ul className="ul-card">
                            <li><i class="fas fa-dollar-sign"></i>{props.price}</li>
                            <li><i class="fas fa-warehouse"></i>{props.playersCapacity}</li>
                            <li><i class="fas fa-dice-d6"></i>Futbolito/Football Sala</li>
                        </ul></p>
                        <button className="btn-register-card">Ver</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FieldCard;