import React from "react";

class Header extends React.Component {
    render(){
        return (
            <section className="nav-bar">
            <div className="nav-container">
              <div className="brand">
                <a className="text-decoration-headertittle" href="/">
                <div className="header-distributed">
                <h3>Play<span>At</span></h3>
                </div>
                </a>
              </div>
              <nav>
                <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                <ul className="nav-list">
                  <li>
                    <a href="/"><i className="fa fa-home fa-lg" aria-hidden="true" alt="home"> Home</i></a>
                  </li>
                  <li>
                    <a href="/selectGame"><i className="fa fa-gamepad fa-lg" aria-hidden="true" alt="select-game"> Deportes</i></a>
                  </li>
                  <li>
                    <a href="/user"><i className="fa fa-user fa-lg" aria-hidden="true" alt="Usuario"> Usuario</i></a>
                  </li>
                </ul>
              </nav>
            </div>
            </section>
        );
    }
}
export default Header;
