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
          <figure class="game">
          <img id='Football' alt="Football" style={shortcut} src='img/baseball.png'/>
            <div class="title">
              <div>
                <h2>Football</h2>
                <h4>Tool</h4>
              </div>
            </div>
            <figcaption>
              <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
            </figcaption>

          </figure>
          </div>
          <div className="col-sm-6 text-center">
          <figure class="game">
          <img id='Tennis' alt="Tennis" className="tennis-w"style={shortcut} src='img/tennisball.png'/>
            <div class="title">
              <div>
                <h2>Tennis</h2>
                <h4>Tool</h4>
              </div>
            </div>
            <figcaption>
              <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
            </figcaption>

          </figure>
          </div>
          <div className="col-sm-6 text-center">
          <figure class="game">
          <img id='Basketball' alt="Basketball" style={shortcut} src='img/basketball.png'/>
            <div class="title">
              <div>
                <h2>Basketball</h2>
                <h4>Tool</h4>
              </div>
            </div>
            <figcaption>
              <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
            </figcaption>

          </figure>
          </div>

          <div className="col-sm-6 text-center">
          <figure class="game">
          <img id='Baseball' alt="Baseball" style={shortcut} src='img/baseball.png'/>
            <div class="title">
              <div>
                <h2>Baseball</h2>
                <h4>Tool</h4>
              </div>
            </div>
            <figcaption>
              <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
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
  alignItems:'center',
  justifyContent:'center',
  width:'150px',
  height:'150px',
}