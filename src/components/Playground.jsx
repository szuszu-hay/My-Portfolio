import { useEffect, useState } from "react";
import TicTacToe from "./TicTacToe";

function Playground({ theme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeGame, setActiveGame] = useState(null);

    const closePanel = () => {
        setIsOpen(false);
        setActiveGame(null);
    }

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") closePanel();
        }
        if (isOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown); 
    }, [isOpen]);

    return (
        <>
            <button className={`playground-fab current-${theme}`} onClick={() => setIsOpen((o) => !o)}
                aria-expanded={isOpen} aria-label="Open playground">
                    <span className="fab-icon">🎮</span>
            </button>

            {isOpen && (
                <div className={`playground-panel current-${theme}`} role="dialog" aria-label="Playground">
                    <div className="playground-header">
                        <span>🎮 Playground</span>
                        <button className="playground-close" onClick={closePanel} aria-label="Close playground">×</button>
                    </div>

                    {!activeGame && (
                        <div className="playground-body">
                            <p>Hey! What would you like to play?</p>
                            <div className="playground-options">
                                <button className="game-option" onClick={() => setActiveGame("tic-tac-toe")}>
                                    <span className="game-option-icon">⭕</span>
                                    Tic-Tac-Toe
                                </button>
                                <button className="game-option" onClick={() => setActiveGame("photo-challenge")}>
                                    <span className="game-option-icon">📸</span>
                                    Photo Challenge
                                </button>
                            </div>
                        </div>
                    )}

                    {activeGame === "tic-tac-toe" && (
                        <div className="playground-body">
                            <button className="playground-back" onClick={() => setActiveGame(null)}>← Back</button>
                            <TicTacToe />
                        </div>
                    )}

                    {activeGame === "photo-challenge" && (
                        <div className="playground-body">
                            <p>Coming Soon</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Playground;