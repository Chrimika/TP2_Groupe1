import React, { useState } from 'react';
import './index.css';

function App() {
    const [numberToGuess, setNumberToGuess] = useState(
        Math.floor(Math.random() * 100) + 1
    );
    const [userGuess, setUserGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [message, setMessage] = useState('');
    const [playAgain, setPlayAgain] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = Math.log2(100);

    const handleGuess = (e) => {
        e.preventDefault();
        const userGuessInt = parseInt(userGuess, 10);
        if (userGuessInt < 1 || userGuessInt > 100) {
            setMessage('Veuillez entrer un nombre entre 1 et 100');
        } else {
            setGuesses([...guesses, userGuessInt]);
            setAttempts(attempts + 1);
            if (userGuessInt < numberToGuess) {
                setMessage('Trop bas!');
            } else if (userGuessInt > numberToGuess) {
                setMessage('Trop haut!');
            } else {
                setMessage(
                    `Félicitations! Vous avez trouvé le nombre mystère : ${numberToGuess}`
                );
                setPlayAgain(true);
            }
        }
        setUserGuess('');
    };

    const resetGame = () => {
        setNumberToGuess(Math.floor(Math.random() * 100) + 1);
        setGuesses([]);
        setMessage('');
        setPlayAgain(false);
        setAttempts(0);
    };

    return (
        <div className="container">
            <h1>GROUPE 1</h1>
            <p class="sub_topic"> <i>Lecture de la pensé</i> </p>
                
            <div className="frame">
            <p>Devinez le nombre entre 1 et 100 :</p>
                <form onSubmit={handleGuess}>
                    <input
                        type="number"
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        placeholder="nombre"
                    />
                    <button type="submit">Deviner</button>
                </form>
                <p>{message}</p>
                <p>Nombre d'essais : {attempts}</p>
                <p>Il vous reste {Math.round(maxAttempts - attempts)} essais.</p>
                <ul>
                    {guesses.map((guess, index) => (
                        <li key={index}>{guess}</li>
                    ))}
                </ul>
                {playAgain && <button onClick={resetGame}>Restart</button>}
                {attempts >= maxAttempts && (
                    <div className="game-over">
                        <p>
                            Vous avez dépassé le nombre maximal d'essais ({maxAttempts}). Veuillez jouer à nouveau.
                        </p>
                        <p>Le nombre mystère était : {numberToGuess}</p>
                         <button onClick={resetGame}>Restart</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
