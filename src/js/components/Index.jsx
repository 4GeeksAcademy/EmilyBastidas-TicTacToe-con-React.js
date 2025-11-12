import React from "react";
//componente
//recibo el prop
const Index = ({ onGoToGame }) => {

    return (

        <main className="index-container">
            <br></br>
            <h2>Tic Tac Toe in React.js</h2>
            <br></br>
            <h3>Pick A Weapon </h3>
            <br></br>

            <div className="index-players">
                <h4>CHOOSE YOUR WEAPON</h4>
                <div className="input-group">
                    <input className="player1" type="text" placeholder="Player 1 username"></input>
                    <input className="player1" type="text" placeholder="Player 2 username"></input>
                </div>
                <div className="index-button">
                    <button className="iniciar" type="button" onClick={onGoToGame}>X</button>
                    <button className="reset">O</button>
                </div>
            </div>
        </main>
    );
};

export default Index;