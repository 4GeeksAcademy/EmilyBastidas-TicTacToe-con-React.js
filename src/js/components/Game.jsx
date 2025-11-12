import React, { useState } from 'react';

import '../../styles/game.css';

const Game = () => {
    //array table con estado
    const [table, setTable] = useState([
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ]);

    //inicializo el turno con X
    const [turn, setTurn] = useState("X");
    const [won, setWon] = useState(false); //indica si hay o no un ganador
    const [winner, setWinner] = useState(null); //indica quien es el ganador

    const changeTurn = () => setTurn(turn === "X" ? "O" : "X")

    const setValue = (i, j) => {
        if (won) {
            return;
        }
        if (typeof table[i][j] == "undefined") {
            let aux = table;
            aux[i][j] = turn;
            setTable(aux)
            checkWinner()
            changeTurn()
        }
    }
    //comprobar ganador
    const checkWinner = () => {

        table.forEach((row, i) =>
            row.forEach((col, j) => {
                //verificaciones col
                if (
                    typeof table[i][j] != "undefined" &&
                    j > 0 && j < 2 &&
                    table[i][j] == table[i][j + 1] &&
                    table[i][j] == table[i][j - 1]
                ) {
                    console.log("ganó")
                    setWon(true)
                    setWinner(turn);
                }
                //verificaciones row
                if (
                    typeof table[i][j] != "undefined" &&
                    i > 0 && i < 2 &&
                    table[i][j] == table[i + 1][j] &&
                    table[i][j] == table[i - 1][j]
                ) {
                    console.log("ganó")
                    setWon(true)
                    setWinner(turn);
                }
                //verificación diagonal
                if (typeof table[1][1] !== "undefined" &&
                    table[0][0] == table[1][1] &&
                    table[0][0] == table[2][2]
                ) {
                    console.log("ganó")
                    setWon(true)
                    setWinner(turn);
                }
                //verificación otra diagonal
                if (typeof table[1][1] !== "undefined" &&
                    table[0][2] == table[1][1] &&
                    table[0][2] == table[2][0]
                ) {
                    console.log("ganó")
                    setWon(true)
                    setWinner(turn);
                }
            })
        )
    }
    const reset = () => {
        setTable([
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined]
        ])
        setWon(false)
    }
    return (
        <div className='game-container my-5'>
            <h2>Tic Tac Toe in React.js</h2>
            <h2 className='subtitulo my-4'>It's {turn} turn! </h2>
            <h3 className={won ? "show" : "hide"}>{winner} Wins!</h3>
            <br></br>
            <button type='button' className="btn btn-light mx-auto" onClick={reset} >Start Over</button>
            <table>
                <tbody>
                    {table.map((row, i) => (
                        <tr key={i}>
                            {row.map((col, j) => (
                                <td key={j} onClick={() => setValue(i, j)}>
                                    <div className='item'>
                                        {col}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Game;