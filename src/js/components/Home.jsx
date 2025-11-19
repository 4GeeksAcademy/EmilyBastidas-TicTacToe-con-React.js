import React, { useState } from "react";

const Home = () => {

    const [inputplayer1, setInputplayer1] = useState("");
    const [inputplayer2, setInputplayer2] = useState("");

    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);

    const [player1Simbolo, setPlayer1Simbolo] = useState(null);
    const [player2Simbolo, setPlayer2Simbolo] = useState(null);

    const [winner, setWinner] = useState(null);

    const [mostrartablero, setMostrartablero] = useState(false);

    const handlePlayers = () => {
        if (inputplayer1.length > 0 && inputplayer2.length > 0) {
            setPlayer1(inputplayer1);
            setPlayer2(inputplayer2)
        }
    };

    const handleSeleccionSimbolos = (simbolo) => {

        if (inputplayer1.trim().length === 0 || inputplayer2.trim().length === 0) {
            console.log("Prueba");
            return;
        }
        setPlayer1(inputplayer1);
        setPlayer2(inputplayer2);

        setPlayer1Simbolo(simbolo)
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

        if (winner) return;

        if (typeof table[i][j] === "undefined") {
            const newTable = table.map(row => [...row]);
            newTable[i][j] = turn;
            setTable(newTable);
            checkWinner(newTable);
            changeTurn();
        } else {
            alert("Please, select another place");
        }
    }

    const checkWinner = (board) => {

        //check filas

        for (let i = 0; i < 3; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                setWinner(turn === player1Simbolo ? player1 : player2);
            }
        }

        //check columnas

        for (let j = 0; j < 3; j++) {
            if (board[0][j] && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
                setWinner(turn === player1Simbolo ? player1 : player2);
                return;
            }
        }

        // diagonales


        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            setWinner(turn === player1Simbolo ? player1 : player2);
            return;
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            setWinner(turn === player1Simbolo ? player1 : player2);
            return;
        }
    }

    //reset

    const resetGame = () => {
        setTable([
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ])

        setTurn("X")
        setWinner(null)
        setMostrartablero(false)
        setInputplayer1("")
        setInputplayer2("")
    };

    return (
        //vistas, inputs botones, luego tablero

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

                <div className="Tablero">

                    <h2 className={winner ? "winner-color" : ""}>{winner ? `${winner} Wins!` : `It's ${turn === player1Simbolo ? player1 : player2} turn`}</h2>

                    <button className="btn btn-light mx-auto mt-5" onClick={resetGame}>Start Over</button>

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



