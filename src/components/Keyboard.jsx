import React from 'react'
import Key from './Key.jsx'
import '../css/Keyboard.css'

const Keyboard = (props) => {

    const {guess, setGuess, setGuessCount, guessCount, setGuessArr, guessArr, letterColors, setLetterColors, word} = props


    return (
        <div>
            <section id='topRow'>
                <Key letter={'Q'} guess={guess} setGuess={setGuess} color={letterColors.Q.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'W'} guess={guess} setGuess={setGuess} color={letterColors.W.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'E'} guess={guess} setGuess={setGuess} color={letterColors.E.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'R'} guess={guess} setGuess={setGuess} color={letterColors.R.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'T'} guess={guess} setGuess={setGuess} color={letterColors.T.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'Y'} guess={guess} setGuess={setGuess} color={letterColors.Y.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'U'} guess={guess} setGuess={setGuess} color={letterColors.U.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'I'} guess={guess} setGuess={setGuess} color={letterColors.I.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'O'} guess={guess} setGuess={setGuess} color={letterColors.O.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'P'} guess={guess} setGuess={setGuess} color={letterColors.P.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
            </section>


            <section id='middleRow'>
                <Key letter={'A'} guess={guess} setGuess={setGuess} color={letterColors.A.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'S'} guess={guess} setGuess={setGuess} color={letterColors.S.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'D'} guess={guess} setGuess={setGuess} color={letterColors.D.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'F'} guess={guess} setGuess={setGuess} color={letterColors.F.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'G'} guess={guess} setGuess={setGuess} color={letterColors.G.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'H'} guess={guess} setGuess={setGuess} color={letterColors.H.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'J'} guess={guess} setGuess={setGuess} color={letterColors.J.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'K'} guess={guess} setGuess={setGuess} color={letterColors.K.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'L'} guess={guess} setGuess={setGuess} color={letterColors.L.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
            </section>


            <section id='bottomRow'>
                <Key
                    letter={'Go'}
                    guess={guess}
                    setGuess={setGuess}
                    guessCount={guessCount}
                    setGuessCount={setGuessCount}
                    setGuessArr={setGuessArr}
                    guessArr={guessArr}
                    word={word}
                    letterColors={letterColors}
                    setLetterColors={setLetterColors}
                />
                <Key letter={'Z'} guess={guess} setGuess={setGuess} color={letterColors.Z.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'X'} guess={guess} setGuess={setGuess} color={letterColors.X.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'C'} guess={guess} setGuess={setGuess} color={letterColors.C.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'V'} guess={guess} setGuess={setGuess} color={letterColors.V.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'B'} guess={guess} setGuess={setGuess} color={letterColors.B.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'N'} guess={guess} setGuess={setGuess} color={letterColors.N.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'M'} guess={guess} setGuess={setGuess} color={letterColors.M.color} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
                <Key letter={'Del'} guess={guess} setGuess={setGuess} letterColors={letterColors} setLetterColors={setLetterColors} word={word}/>
            </section>

        </div>
    )
}

export default Keyboard