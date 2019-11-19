import React from "react";

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-distributed">
            <div className="footer-left">
            <h3>Play<span>At</span></h3>
    		<h6 className="footer-links">
    		<a href="/">Home</a>
            <br/>
    		<a href="https://github.com/Omonroy36/playat" target="_blank" rel="noopener noreferrer">Proyecto</a>
            <br/>
    		<a href="/about">Sobre Nosotros</a>
    		</h6>

    		<p className="footer-company-name">PlayAt &copy; 2019</p>
    		</div>

    		<div className="footer-center">

    		<div>
    		<i className="fa fa-map-marker"></i>
    		<p><span>21 Revolution Street</span> Santiago, Chile</p>
    		</div>

    		<div>
    		<i className="fa fa-phone"></i>
    		<p>+56 912 345 678</p>
    		</div>

    		<div>
    		<i className="fa fa-envelope"></i>
    		<p><a href="mailto:contact.playat@gmail.com">contact.playat@gmail.com</a></p>
    		</div>

    		</div>

    		<div className="footer-right">

    		<p className="footer-company-about">
    		<span>About the company</span> PlayAt es una aplicacion para facilitar la Busqueda de canchas y campos de juego de diversos deportes, creado por: <br/><strong>Orlando Monroy y Ariel Calisaya.</strong> <br/>Full Stack developers.
    		</p>


    		</div>
    		</footer>
        );
    }
}
export default Footer;
