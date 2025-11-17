import React, { useState } from "react";

const Home = () => {

    const [inputplayer1, setInputplayer1] = useState("");
    const [inputplayer2, setInputplayer2] = useState("");

    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);

    const [player1Simbolo, setPlayer1Simbolo] = useState(null);
    const [player2Simbolo, setPlayer2Simbolo] = useState(null);

    const [mostrartablero, setMostrartablero] = useState(false);

    const handlePlayers = () => {
        if (inputplayer1.length > 0 && inputplayer2.length > 0) {
            setPlayer1(inputplayer1);
            setPlayer2(inputplayer2);
        }
    };


    const handleSeleccionSimbolos = (simbolo) => {

        if (inputplayer1.trim().length === 0 || inputplayer2.trim().length === 0) {
            console.log("Prueba");
            return;
        }
        setPlayer1(inputplayer1);
        setPlayer2(inputplayer2);

        setPlayer1Simbolo(simbolo);

        setMostrartablero(true);
    };





    return (
        <div className="container text-center">

            {!mostrartablero ? (

                <>
                    <h1 className="tittle mt-4">Tic Tac Toe in React.js </h1>
                    <h2>Pick A Weapon</h2>

                    <div className="choose">
                        <div className="input mt-5">
                            <br></br>
                            <h3>CHOOSE YOUR WEAPON</h3>
                            <input className="usuario1 mt-3 mb-4" type="text" placeholder="Player 1 username" value={inputplayer1} onChange={(e) => setInputplayer1(e.target.value)}></input>
                            <input className="usuario2" type="text" placeholder="Player 2 username" value={inputplayer2} onChange={(e) => setInputplayer2(e.target.value)}></input>

                        </div>

                        <button className="button-x" onClick={() => handleSeleccionSimbolos("X")}>X</button>
                        <button className="button-o ms-2" onClick={() => handleSeleccionSimbolos("O")}>O</button>

                    </div>
                </>
            ) : null}
        </div>
    );

};

export default Home;



