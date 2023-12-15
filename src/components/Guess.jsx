import {useState, useEffect} from 'react'

const Guess = (props) => {

    const {guess, active, data, word, guessCount, setGuessCount, win, setWin, letterColors, setLetterColors} = props

    const [asdf, setAsdf] = useState({})

    // define word object
    const wordObj = {}

    // create key-value pairs for each letter in the guess
    for(let i = 0; i < 5; i++){
        wordObj[i] = word[i]
      }

    const letterColor = {
        0: '',
        1: '',
        2: '',
        3: '',
        4: ''
    }

    if(word == data && word.length === 5 && win === false){
        setWin(true)
        setGuessCount(6)
    }



    for(let i = 0; i < data.length; i++){
        if(word.includes(data[i].toUpperCase())){
            if(wordObj[i] === data[i]){
                letterColor[i] = 'green'
            }else{
                letterColor[i] = 'yellow'
            }
        }
    }







    return active ? (
        <div className='guessRow'>
            <section>{'=>'}</section>
            <section className='rowLetter'>{guess[0]}</section>
            <section className='rowLetter'>{guess[1]}</section>
            <section className='rowLetter'>{guess[2]}</section>
            <section className='rowLetter'>{guess[3]}</section>
            <section className='rowLetter'>{guess[4]}</section>
            <section>{'<='}</section>
        </div>
    ) : (
        <div className='guessRow'>
            <section className={`rowLetter ${letterColor['0']}`}>{data[0]}</section>
            <section className={`rowLetter ${letterColor['1']}`}>{data[1]}</section>
            <section className={`rowLetter ${letterColor['2']}`}>{data[2]}</section>
            <section className={`rowLetter ${letterColor['3']}`}>{data[3]}</section>
            <section className={`rowLetter ${letterColor['4']}`}>{data[4]}</section>
        </div>
    )
}

export default Guess