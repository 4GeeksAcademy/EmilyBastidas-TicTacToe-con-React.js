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
        setPlayer2Simbolo(simbolo === "X" ? "O" : "X");
        setMostrartablero(true);
    };


    const [table, setTable] = useState([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ])

    const [turn, setTurn] = useState("X")

    const changeTurn = () => setTurn(turn === "X" ? "O" : "X")

    const setValue = (i, j) => {

        if (typeof table[i][j] == "undefined") {
            let aux = table;
            aux[i][j] = turn;
            setTable(aux)
            checkWinner()
            changeTurn();
        }
        else {
            alert("Please, select another place")
        }
    }

    const checkWinner = () => {
        table.forEach((row, i) =>
            row.forEach((col, j) => {


                if (
                    typeof table[i][j] != "undefined" &&
                    j > 0 && j < 2 &&
                    table[i][j] == table[i][j + 1] &&
                    table[i][j] == table[i][j - 1]
                ) {
                    console.log("ganó")

                }

                if (
                    typeof table[i][j] != "undefined" &&
                    i > 0 && i < 2 &&
                    table[i][j] == table[i + 1][j] &&
                    table[i][j] == table[i - 1][j]
                ) {
                    console.log("ganó")

                }
                //verificación diagonal

                if (typeof table[0][0] != "undefined" &&
                    table[0][0] == table[1][1] &&
                    table[0][0] == table[2][2]
                ) {
                    console.log("ganó")

                }
                //verificación otra diagonal

                if (typeof table[1][1] != "undefined" &&
                    table[0][2] == table[1][1] &&
                    table[0][2] == table[2][0]
                ) {
                    console.log("ganó")
                }
            })
        )
    }

    return (
        <div className="container text-center">

            <h1 className="tittle mt-4">Tic Tac Toe in React.js </h1>
            <h2>Pick A Weapon</h2>

            {!mostrartablero ? (
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

            ) : null}


            {mostrartablero ? (
                <div>
                    <h2> It's {turn === player1Simbolo ? player1 : player2} turn </h2>
                    <button className="btn btn-light mx-auto mt-5">Start Over</button>
                    <table className="mx-auto">
                        <tbody>
                            {table.map((row, i) => (
                                <tr key={i}>
                                    {row.map((col, j) => (
                                        <td key={j} onClick={() => setValue(i, j)}>
                                            <div className="item">
                                                {col}
                                            </div>
                                        </td>


                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : null}

        </div>
    );

};

export default Home;



