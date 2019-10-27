import React from "react";


const Modal = (props) => {
    return (
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div className="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container pt-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className="title text-left">Castilla 121</h2>
                                    <h5 className="title text-left">Viña del Mar</h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="text-right pink">$25.000,00 CLP</h2>
                                    <h6 className="text-right">CODSUEÑO: 0001</h6>
                                </div>
                            </div>
                            <div className="container pt-4">
                                <div className="row">
                                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Suscipit ipsa nisi dolorum error maiores ducimus iure officia obcaecati et! Illo cum
                                atque iusto tenetur sint aliquid, placeat omnis error voluptates?</p>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <ul className="text-left list-unstyled">
                                            <li><i class="fas fa-bed fa-2x p-3 col-6 pink"></i>2 Habitación</li>
                                            <li> <i class="fas fa-bath fa-2x p-3 col-6  pink"></i>1 Baño</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <ul class="text-left list-unstyled">
                                            <li><i class="fas fa-utensils fa-2x p-3 col-6 pink"></i>1 Cocina</li>
                                            <li> <i class="fas fa-tv fa-2x p-3 col-6 pink"></i>TV por cable</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <ul class="text-left list-unstyled">
                                            <li><i class="fas fa-wifi fa-2x p-3 col-6 pink"></i>WIFI</li>
                                            <li><i class="fas fa-video fa-2x p-3 col-6 pink"></i>NETFLIX</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Labore, vel accusantium magnam adipisci nobis esse, aperiam, enim natus sed magni
                                inventore ducimus nisi veniam ab? Tempore aut est voluptatem nam.</p>
                                </div>
                                <div className="row pr-4 pink">
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Labore, vel accusantium magnam adipisci nobis esse, aperiam, enim natus sed magni
                                inventore ducimus nisi veniam ab? Tempore aut est voluptatem nam.</p>
                                </div>
                                <div className="row">
                                    <h6>Castilla 121, Viña del Mar</h6>
                                    <div className="col-12">
                                    </div>
                                    <div className="col-12">
                                        <div className=" mx-auto mt-4 title form-sueno">
                                            <form id="contact-form" name="contact-form" action="mail.php" method="POST"
                                                onsubmit="return validateForm()">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="md-form">
                                                            <div class="md-form">
                                                                <input type="text" id="name" name="name" class="form-control"></input>
                                                                <label for="name" class="">Nombre</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="md-form">
                                                            <div class="md-form">
                                                                <input type="text" id="email" name="email" class="form-control"></input>
                                                                <label for="email" class="">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="md-form">
                                                            <input type="text" id="subject" name="subject" class="form-control"></input>
                                                            <label for="subject" class="">Asunto</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="md-form">
                                                            <textarea type="text" id="message" name="message"
                                                                class="form-control"></textarea>
                                                            <label for="message">Mensaje</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div class="center-on-small-only pt-2 title">
                                                <a class="btn-sueno" href="" onclick="validateForm()">Enviar</a>
                                            </div>
                                            {/* <br> */}
                                            <div class="status" id="status"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}