import { useState, useEffect } from "react";

const LINES = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
];

function calculateWinner(squares) {
    for (const [a, b, c] of LINES) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function getEmptyIndices(squares) {
    return squares.reduce((acc, val, i) => (val ? acc : [...acc, i]), []);
}

// Computer is "O", player is "X".
function minimax(squares, isMaximizing) {
    const winner = calculateWinner(squares);
    if (winner === "O") return { score: 1 };
    if (winner === "X") return { score: -1 };
    if (getEmptyIndices(squares).length === 0) return { score: 0 };

    const moves = getEmptyIndices(squares).map((i) => {
        const next = squares.slice();
        next[i] = isMaximizing ? "O" : "X";
        const result = minimax(next, !isMaximizing);
        return { index: i, score: result.score };
    });

    return isMaximizing
        ? moves.reduce((best, m) => (m.score > best.score ? m : best))
        : moves.reduce((best, m) => (m.score < best.score ? m : best));
}

function getComputerMove(squares, difficulty) {
    return minimax(squares, true).index;
}

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(Boolean);
    const gameOver = Boolean(winner) || isDraw;

    useEffect(() => {
        if (xIsNext || gameOver) return;
        const timer = setTimeout(() => {
            const move = getComputerMove(squares);
            if (move === undefined) return;
            const next = squares.slice();
            next[move] = "O";
            setSquares(next);
            setXIsNext(true);
        }, 450); 
        return () => clearTimeout(timer);
    }, [xIsNext, gameOver, squares]);

    useEffect(() => {
        if (winner === "X") setScore((s) => ({ ...s, wins: s.wins + 1 }));
        else if (winner === "O") setScore((s) => ({ ...s, losses: s.losses + 1 }));
        else if (isDraw) setScore((s) => ({ ...s, draws: s.draws + 1 }));
    }, [winner, isDraw]);

    const handleClick = (i) => {
        if (squares[i] || gameOver || !xIsNext) return;
        const next = squares.slice();
        next[i] = "X";
        setSquares(next);
        setXIsNext(false);
    };

    const reset = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    let status;
    if (winner === "X") status = "You win! 🎉";
    else if (winner === "O") status = "I win! Hehe😉";
    else if (isDraw) status = "It's a draw.";
    else status = xIsNext ? "Your turn (X)" : "I am thinking🤔…";

    return (
        <div className="ttt">
            <div className="ttt-topbar">
                <span className="ttt-score">
                    W {score.wins} · L {score.losses} · D {score.draws}
                </span>
            </div>

            <p className="ttt-status">{status}</p>

            <div className="ttt-board">
                {squares.map((val, i) => (
                    <button
                        key={i}
                        className="ttt-cell"
                        onClick={() => handleClick(i)}
                        disabled={!xIsNext || gameOver}
                        aria-label={`Cell ${i + 1}${val ? `, ${val}` : ", empty"}`}
                    >
                        {val}
                    </button>
                ))}
            </div>

            <button className="ttt-reset" onClick={reset}>New game</button>
        </div>
    );
}

export default TicTacToe;