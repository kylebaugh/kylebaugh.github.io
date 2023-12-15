import React from 'react'

const Key = (props) => {
    const {letter, guess, setGuess, setGuessCount, setGuessArr, guessArr, guessCount, color, letterColors, setLetterColors, word} = props

    // console.log('colors', letterColors)


    const handleClick = () => {
        if(letter === 'Del'){
            let guessCopy = [...guess]
            guessCopy.pop()
            setGuess(guessCopy)
        }else if(letter === 'Go' && guess.length === 5){
            setGuessCount(guessCount + 1)
            setGuess([])
            let tempArr = [...guessArr]
            tempArr[guessCount] = guess.join('')
            setGuessArr(tempArr)

            let colorCopy = {...letterColors}

            for(let i = 0; i < guess.length; i++){
                console.log('guess', guess)

                console.log(i, guess[i])

                if(word.includes(guess[i].toUpperCase())){
                    if(word[i] === guess[i]){
                        colorCopy[guess[i].toUpperCase()].color = 'green'
                    }else{
                        colorCopy[guess[i].toUpperCase()].color = 'yellow'
                    }
                }
            }

            setLetterColors(colorCopy)

        }else if(guess.length < 5 && letter !== 'Go'){
            let guessCopy = [...guess]
            guessCopy.push(letter.toUpperCase())
            setGuess(guessCopy)
        }
    }


    return (
        <p className={`letter ${color}`}  onClick={handleClick}>{letter}</p>
    )
}

export default Key