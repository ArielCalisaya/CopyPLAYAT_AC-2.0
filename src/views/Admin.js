import React from 'react';
import {Context} from "../store/appContext";
import FieldCardAdmin from "../components/FieldCardAdmin";

class Admin extends React.Component {
	constructor() {
		super();
		
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
					<div className="col-md-3">
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
								<input id="file" type="file" className="inputfile" onChange={this.ChangeImage} />

								<label htmlFor="file" >
									<figure>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
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
					<div className="col-md-9">
						<div className="profile-content-admin">
							<h1>Add New Fields</h1>
						</div>
						<form>
							<div className="form-row">
								<div className="form-group col-md-4">
									<label htmlFor="fieldTitle">Title</label>
									<input type="text" className="form-control" id="fieldTitle" placeholder="The title of your field" value={store.sport_field_data.title} onChange={(e) => actions.handleChangeFieldData(e)} name="title"/>
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="uploadImg">Upload image</label>
									<input type="file" className="form-control" id="uploadImg" placeholder="Image of the field" />
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="inputCapacity">Players capacity</label>
									<input type="number" className="form-control" id="inputCapacity" placeholder="Capacity of players" value={store.sport_field_data.playersCapacity} onChange={(e) => actions.handleChangeFieldData(e)} name="playersCapacity"/>
								</div>
							</div>
							<div className="form-row">
							<div className="form-group col-md-4">
								<label htmlFor="schedule">Schedule</label>
								<input type="text" className="form-control" id="schedule" placeholder="From to..." value={store.sport_field_data.schedule} onChange={(e) => actions.handleChangeFieldData(e)} name="schedule"/>
							</div>
							<div className="form-group col-md-4">
								<label htmlFor="servicesInput">Services</label>
								<select className="selectpicker" multiple id="servicesInput" onChange={(e) => actions.handleChangeSelect(e)}>
									<option value="Baños">Baños</option>
									<option value="Cafeteria">Cafeteria</option>
									<option value="Quincho">Quincho</option>
									<option value="Bebederos">Bebederos</option>
									<option value="Casino">Casino</option>
								</select>
							</div>
							<div className="form-group col-md-4">
									<label htmlFor="inputPrice">Price in pesos</label>
									<input type="text" className="form-control" id="inputPrice" placeholder="$" value={store.sport_field_data.price} onChange={(e) => actions.handleChangeFieldData(e)} name="price"/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-4">
									<label htmlFor="inputAddress">Address</label>
									<input type="text" className="form-control" id="inputAddress" placeholder="Ciudad/comuna/calle" value={store.sport_field_data.address} onChange={(e) => actions.handleChangeFieldData(e)} name="address"/>
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="inputSoil">Type of soil</label>
									<select id="inputSoil" className="form-control selectpicker" onChange={(e) => actions.handleUniqueSelect(e)} name="typeOfSoil">
										<option value>Choose...</option>
										<option value="Cemento">Cemento</option>
										<option value="Cesped sintetico">Cesped sintetico</option>
										<option value="Cesped natural">Cesped natural</option>
										<option value="Madera">Madera</option>
										<option value="Vinilo">Vinilo</option>
									</select>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="inputSport">Type of game</label>
									<select id="inputSport" className="form-control selectpicker" name="typeOfSport" onChange={(e) => actions.handleUniqueSelect(e)}>
										<option value>Choose...</option>
										<option value="Cemento">Football</option>
										<option value="Cesped sintetico">Tennis</option>
										<option value="Cesped natural">Basketball</option>
										<option value="Madera">Baseball</option>
										<option value="Vinilo">Volleyball</option>
									</select>
								</div>
							</div>
							<button type="submit" className="btn btn-primary" onClick={(e) => actions.handleSubmitForFieldData(e)}>Add</button>
						</form>
						{store.admin_field_card.map((item,index) => {return(<FieldCardAdmin title={item.title} playersCapacity={item.playersCapacity + " Players"} price={"$" + item.price} index={index} key={index}/>);})}
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