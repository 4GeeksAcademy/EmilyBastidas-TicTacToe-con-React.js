import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Button } from "bootstrap";

//component

const Home = () => {

    console.log("hola mundo");

    //info de inputs, nombres de jugadores, simbolos elegidos, inicio sin mostrar tabla

    const [inputplayer1, setInputplayer1] = useState("");
    const [inputplayer2, setInputplayer2] = useState("");

    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);

    const [player1Simbolo, setPlayer1Simbolo] = useState(null);
    const [player2Simbolo, setPlayer2Simbolo] = useState(null);

    const [mostrartablero, setMostrartablero] = useState(false);

    //tabla array y turnos

    const [table, setTable] = useState([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ]);

    const [turn, setTurno] = useState("X");
    const [winner, setWinner] = useState(null);

    //la info de los inputs pasan a ser nombres de players

    const handlePlayers = () => {
        if (inputplayer1.length > 0 && inputplayer2.length > 0) {
            setPlayer1(inputplayer1);
            setPlayer2(inputplayer2);
        }
    };

    //valido nombres y los guardo, también simbolos seleccionados, de ser así muestra el tablero

    const handleSeleccionSimbolos = (simbolo) => {

        if (inputplayer1.trim().length === 0 || inputplayer2.trim().length === 0) {
            console.log("Prueba");
            return;
        }

        setPlayer1(inputplayer1)
        setPlayer2(inputplayer2);

        setPlayer1Simbolo(simbolo);
        setPlayer2Simbolo(simbolo === "X" ? "O" : "X");

        setMostrartablero(true);

    };

    return (
        <div className="container text-center">

            {!mostrartablero ? (

                <>
                    <h1>Tic Tac Toe in React.js </h1>
                    <h2>Pick A Weapon</h2>


                    <div className="input">

                        <h3>CHOOSE YOUR WEAPON</h3>
                        <input type="text" placeholder="Player 1 username" value={inputplayer1} onChange={(e) => setInputplayer1(e.target.value)}></input>
                        <input type="text" placeholder="Player 2 username" value={inputplayer2} onChange={(e) => setInputplayer2(e.target.value)}></input>

                    </div>

                    <button onClick={() => handleSeleccionSimbolos("X")}>X</button>
                    <button onClick={() => handleSeleccionSimbolos("O")}>O</button>
                </>

            ) : (
                <>
                </>
            )}
        </div>
    );
};

export default Home;