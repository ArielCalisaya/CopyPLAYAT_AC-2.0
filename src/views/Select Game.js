import React from 'react';

class SelectGame extends React.Component{
  render(){
    return(
      <div className="container container-selectGame">
        <div className="row">
        <div className="col-sm-12 text-center">
        <h1 className="tittle-game">Select Game</h1>
        </div>
          <div className="col-sm-6 text-center">
          <figure className="game">
           <img className='img-selectGame' id='Football' alt="Football" style={shortcut} src='img/Football.png'/>
          <div className="title-selectgame-only"
          style={alignInitial}>
            <div>
              <h4>Fútbol</h4>
              <h5>Canchas, y mas...</h5>
            </div>
          </div>
          <figcaption>
            <p>Juega fútbol con equipos de hasta 11 jugadores, y desempeña tu espiritu en la cancha</p>
          </figcaption>

        </figure>
        </div>
        <div className="col-sm-6 text-center">
        <figure className="game">
          <img className='img-selectGame tennis-w' id='Tennis' alt="Tennis" style={shortcut} src='img/tennisball.png'/>
          <div className="title-selectgame-only"
          style={alignInitial}>
            <div>
              <h4>Tennis</h4>
              <h5>Canchas amplias y mas!!!</h5>
            </div>
          </div>
          <figcaption>
            <p>Juega individualmente, o en equipos compuestos por 2 personas, con campos amplios y moderados, <br/>¿listo para empezar?</p>
          </figcaption>

        </figure>
        </div>
        <div className="col-sm-6 text-center">
        <figure className="game">
          <img className='img-selectGame' id='Basketball' alt="Basketball" style={shortcut} src='img/basketball.png'/>
          <div className="title-selectgame-only"
          style={alignInitial}>
            <div>
              <h4>Basketball</h4>
              <h5>unete a una cancha</h5>
            </div>
          </div>
          <figcaption>
            <p>Compone un equipo y juega en una variedad de canchas con diversos tamaños, que esperas, juegue!!!</p>
          </figcaption>

        </figure>
        </div>

        <div className="col-sm-6 text-center">
        <figure className="game">
          <img className='img-selectGame' id='Baseball' alt="Baseball" style={shortcut} src='img/baseball.png'/>
          <div className="title-selectgame-only"
          style={alignInitial}>
            <div>
              <h4>Béisbol</h4>
              <h5>variedad de campos</h5>
            </div>
          </div>
          <figcaption>
            <p>¡Golpea la pelota y marca un home run!<br/> Desde campos con cesped hasta, suelos planos </p>
          </figcaption>

        </figure>
        </div>
      </div>
    </div>
  )
}
}
export default SelectGame;
let shortcut=
{
width:'150px',
height:'150px',
}

let alignInitial = {
    textAlign: 'initial',
}
