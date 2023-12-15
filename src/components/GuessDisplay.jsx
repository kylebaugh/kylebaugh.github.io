import { useState } from 'react'
import Guess from './Guess.jsx'
import '../css/GuessDisplay.css'

const GuessDisplay = (props) => {
    const { word, guess, guessCount, setGuessCount, guessArr, win, setWin, letterColors, setLetterColors } = props

    // console.log(word)

    const guessMap = []


    for (let i = 0; i < 6; i++) {
        if (i === guessCount) {
            guessMap.push(<Guess
                            key={i}
                            guess={guess}
                            active={true}
                            data={guessArr[i]}
                            word={word}
                            guessCount={guessCount}
                            win={win}
                            setWin={setWin}
                            letterColors={letterColors}
                            setLetterColors={setLetterColors}
                        />)
        } else {
            guessMap.push(<Guess
                            key={i}
                            guess={guess}
                            active={false}
                            data={guessArr[i]}
                            word={word}
                            guessCount={guessCount}
                            win={win}
                            setWin={setWin}
                            setGuessCount={setGuessCount}
                            letterColors={letterColors}
                            setLetterColors={setLetterColors}
                        />)
        }
    }

    return (
        <div >
            {guessMap}
            {win && <section>You won! You can tell everyone you found a 5-letter word.</section>}
            {win === false && guessCount > 5 && <section>You lose! Do better. Refresh to try again.</section>}
        </div>
    )
}

export default GuessDisplay