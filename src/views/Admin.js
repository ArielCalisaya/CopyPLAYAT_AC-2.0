import React from 'react';
import {Context} from "../store/appContext";
import FieldCardAdmin from "../components/FieldCardAdmin";

class Admin extends React.Component {
	constructor(){
		super()
		this.state={
			showResults: false,
		}

		this.handleShowResults = this.handleShowResults.bind(this)
	}
	handleShowResults(){
			this.setState({ showResults:true });
		}


	ChangeImage(e) {
		console.log(e.target.files[0])
	}



	render() {
		return (
			<Context.Consumer>
				{
					({ store, actions }) => {
                        return (
					<div className="container">
					<div className="row profile-row">
						<div className="col-md-3" style={noBorderRadius}>
							<div className="profile-sidebar">

								<div className="profile-userpic">
									<img src='img/user.png' className="img-responsive" alt="" />
								</div>
								<div className="profile-usertitle">
									<div className="profile-usertitle-name">
										Marcus Doe
									</div>
									<div className="profile-usertitle-job">
										Professional Trainer
									</div>
								</div>
								<div className="profile-userbuttons">
									<input id="file"
									type="file"
									className="inputfile"
									onChange={this.ChangeImage} />

									<label htmlFor="file">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
												<path
													d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
												</path>
											</svg>
										</figure>
										<span>Subir Imagen</span>
									</label>
									<br />
									<button type="button" className="btn btn-success btn-sm">Follow</button>
									<button type="button" className="btn btn-danger btn-sm">Message</button>
								</div>
								<div className="profile-usermenu">
									<a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
										<i className="glyphicon glyphicon-home"></i>
										Inicio </a>
									<a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
										<i className="glyphicon glyphicon-user"></i>
										Configuracion </a>
									<a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
										<i className="glyphicon glyphicon-ok"></i>
										Canchas Jugadas </a>
									<a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
										<i className="glyphicon glyphicon-flag"></i>
										Help </a>
								</div>
							</div>
						</div>


						<div className="col-md-9" style={backgroundContainer}>
							<div className="profile-content-admin">
								<h1>Tus Campos Deportivos</h1>
							</div>

							<div className="modal bd-example-modal-xl modal-forCreateAdminCard"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="myExtraLargeModalLabel"
							aria-hidden="true">
							  <div className="modal-dialog modal-dialog-centered modal-xl">
							    <div className="modal-content">
									<div className="modal-header" style={center}>
							        <h5 className="modal-title h4" id="myExtraLargeModalLabel">Tus Campos Deportivos</h5>
									</div>
								  <div className="modal-body">
									  <form>
										  <div className="form-row">
											  <div className="form-group col-md-6">
												  <label htmlFor="fieldTitle">Nombre de Sitio/Cancha</label>
												  <input type="text"
												  className="form-control"
												  id="fieldTitle" placeholder="Titulo de Cancha/Campo"
												  value={store.sport_field_data.title}
												  onChange={(e)=> actions.handleChangeFieldData(e)}
												  name="title"/>
											  </div>

											  <div className="form-group col-md-6">
												  <label htmlFor="schedule">Horario</label>
												  <input type="text"
												  className="form-control" id="schedule"
												  placeholder="8:30 a ..."
												  value={store.sport_field_data.schedule}
												  onChange={(e)=> actions.handleChangeFieldData(e)}
												  name="schedule"/>
											  </div>

											  <div className="form-group col-md-12">
												  <label htmlFor="uploadImg">Subir Imagen</label>
												  <input type="file"
												  className="form-control"
												  id="uploadImg" placeholder="Imagen de tu Cancha/Campo" />
											  </div>

											  <div className="form-group col-md-6">
												  <label htmlFor="servicesInput">Servicios Incorporados</label>
												  <br/>
												  <select className="selectpicker"
												  multiple
												  id="servicesInput"
												  value={store.sport_field_data.opsOfServicesSelected}
												  onChange={(e)=> actions.handleChangeSelect(e)}
												  >
													  <option value="Baños">Baños</option>
													  <option value="Cafeteria">Cafeteria</option>
													  <option value="Quincho">Quincho</option>
													  <option value="Bebederos">Bebederos</option>
													  <option value="Casino">Casino</option>
												  </select>
											  </div>


											  <div className="form-group col-md-6">
												  <label htmlFor="inputSoil">Tipo de Suelo</label>
												  <select id="inputSoil"
												  className="form-control selectpicker"
												  value={store.sport_field_data.typeOfSoil}
												  onChange={(e)=> actions.handleUniqueSelect(e)}
												  name="typeOfSoil"
												  >
													  <option value>Elegir...</option>
													  <option value="Cemento">Cemento</option>
													  <option value="Cesped sintetico">Cesped sintetico</option>
													  <option value="Cesped natural">Cesped natural</option>
													  <option value="Madera">Madera</option>
													  <option value="Vinilo">Vinilo</option>
												  </select>
											  </div>

											  <div className="form-group col-md-6">
												  <label htmlFor="inputCapacity">Capacidad de Jugadores</label>
												  <input type="number"
												  className="form-control" id="inputCapacity"
												  placeholder="Capacidad de jugadores"
												  value={store.sport_field_data.playersCapacity}
												  onChange={(e)=> actions.handleChangeFieldData(e)}
												  name="playersCapacity"/>
											  </div>

											  <div className="form-group col-md-6">
												  <label htmlFor="inputPrice">Valor de Cancha (CLP)</label>
												  <input type="text"
												  className="form-control"
												  id="inputPrice"
												  placeholder="$"
												  value={store.sport_field_data.price}
												  onChange={(e)=> actions.handleChangeFieldData(e)}
												  name="price"/>
											  </div>

											  <div className="form-group col-md-6">
												  <label htmlFor="inputAddress">Direccion</label>
												  <input type="text"
												  className="form-control"
												  id="inputAddress"
												  placeholder="Ciudad / Comuna / Calle"
												  value={store.sport_field_data.address}
												  onChange={(e)=> actions.handleChangeFieldData(e)}
												  name="address"/>
											  </div>

											  <div className="form-group col-md-6">
												  <label htmlFor="inputSport">Tipo de Deporte</label>
												  <select id="inputSport"
												  className="form-control selectpicker"
												  name="typeOfSport"
												  value={store.sport_field_data.typeOfSport}
												  onChange={(e)=> actions.handleUniqueSelect(e)}
												  >
													  <option value>Elegir...</option>
													  <option value="Futból">Football</option>
													  <option value="Tennis">Tennis</option>
													  <option value="Baseball">Basketball</option>
													  <option value="Baseball">Baseball</option>
												  </select>
											  </div>
										  </div>
							  </form>

							  <div className="button-add" style={centerPage}>
								  <button type="submit"
								  style={margin}
								  className="btn btn-success"
								  data-dismiss="modal"
								  aria-label="Close"
								  onClick={(e, index)=> actions.handleSubmitForFieldData(e, index)}
								  >Crear</button>
								  <button type="button" style={margin} className="btn btn-danger" data-dismiss="modal" aria-label="Close">
								  <span aria-hidden="true">Cerrar</span>
								  </button>
							  </div>
							      </div>
							    </div>
							  </div>
							</div>




						{this.state.showResults && store.admin_field_card ?
						<div className="overflow">
						{store.admin_field_card.map((item,index) => {
							return(
								<FieldCardAdmin
								title={item.title}
								schedule={item.schedule}
								opsOfServicesSelected={item.opsOfServicesSelected}
								playersCapacity={item.playersCapacity + " Personas Max" }
								address= {item.address}
								typeOfSoil={item.typeOfSoil}
								typeOfSport={item.typeOfSport}
								price={item.price + " CLP"}
								index={index}
								key={index}
								/>
								)}
							)
						}
						</div>
						: <div></div>}


						{this.state.showResults ===false ?
						<div className="button-add" style={centerTotalButton}>
						<button type="button"
						onClick={this.handleShowResults}
						className="btn btn-primary"
						data-toggle="modal"
						data-target=".modal-forCreateAdminCard"
						>+</button>
						</div>
						:
						<div className="button-add" style={centerPage}>
						<button type="button"
						onClick={this.handleShowResults}
						className="btn btn-primary"
						data-toggle="modal"
						data-target=".modal-forCreateAdminCard"
						>+</button>
						</div>
					}
				</div>
			</div>
		</div>
						);
					}
				}
			</Context.Consumer>
		)
	}
}

export default Admin;
let centerPage =
{
	textAlign: 'center',
	margin: '10px'
}
let centerTotalButton =
{
	position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
}
let margin=
{
	margin:"12px",
}
let center =
{
	margin: '0 auto',
}
let backgroundContainer =
{
	background: "#f3f3f3",
}

let noBorderRadius =
{
    paddingLeft: "0px",
    paddingRight: "0px"
}

// Problema resuelto data-target era igual que edit modal por lo tanto abria ambos modal
// pero mostraba el primer modal el de crear usuario no obstante tambien editaba el card
