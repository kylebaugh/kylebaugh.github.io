import { useState, useEffect } from 'react'
import './css/App.css'
import Header from './components/Header.jsx'
import GuessDisplay from './components/GuessDisplay.jsx'
import Keyboard from './components/Keyboard.jsx'
import lodash from 'lodash'

let wordArr = [
  'Accio', 'Albus', 'Alley', 'Argus', 'Arrow', 'Auror', 'Avada',
  'Avery', 'Badge', 'Baron', 'Barty', 'Binns', 'Black', 'Blast',
  'Blood', 'Breed', 'Broom', 'Bogey', 'Charm', 'Chang', 'Circe',
  'Cloak', 'Colin', 'Comet', 'Cross', 'Curse', 'Daily', 'Death',
  'Dobby', 'Dowse', 'Draco', 'Dress', 'Drive', 'Eagle', 'Errol',
  'Fancy', 'Fairy', 'Felix', 'Filch', 'Fleur', 'Flies', 'Friar',
  'Frogs', 'Fudge', 'Gaunt', 'Ginny', 'Giant', 'Ghost', 'Ghoul',
  'Glass', 'Glory', 'Gnome', 'Goyle', 'Grawp', 'Great', 'Harry',
  'Hooch', 'Horse', 'House', 'James', 'Juice', 'Katie', 'Knarl',
  'Leaky', 'Lumos', 'Lupin', 'Madam', 'Magic', 'Major', 'Molly',
  'Moody', 'NEWTS', 'Order', 'Padma', 'Pansy', 'Parse', 'Party',
  'Pasty', 'Patil', 'Peace', 'Percy', 'Peter', 'Pince', 'Point',
  'Prior', 'Purge', 'Quill', 'Repel', 'Robes', 'Seven', 'Shack',
  'Sloth', 'Slugs', 'Snake', 'Snape', 'Snare', 'Snout', 'Spell',
  'Squad', 'Squib', 'Stone', 'Stick', 'Stuns', 'Tonks', 'Troll',
  'Vance', 'Venom', 'Wands', 'Welsh', 'Winky', 'Witch', 'Zonko'
]

function App() {

  const letterObj = {
    A: {
      color: 'none'
    },
    B: {
      color: 'none'
    },
    C: {
      color: 'none'
    },
    D: {
      color: 'none'
    },
    E: {
      color: 'none'
    },
    F: {
      color: 'none'
    },
    G: {
      color: 'none'
    },
    H: {
      color: 'none'
    },
    I: {
      color: 'none'
    },
    J: {
      color: 'none'
    },
    K: {
      color: 'none'
    },
    L: {
      color: 'none'
    },
    M: {
      color: 'none'
    },
    N: {
      color: 'none'
    },
    O: {
      color: 'none'
    },
    P: {
      color: 'none'
    },
    Q: {
      color: 'none'
    },
    R: {
      color: 'none'
    },
    S: {
      color: 'none'
    },
    T: {
      color: 'none'
    },
    U: {
      color: 'none'
    },
    V: {
      color: 'none'
    },
    W: {
      color: 'none'
    },
    X: {
      color: 'none'
    },
    Y: {
      color: 'none'
    },
    Z: {
      color: 'none'
    },
  }

  const [guessCount, setGuessCount] = useState(0)
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState([])
  const [guessArr, setGuessArr] = useState(['', '', '', '', '', ''])
  const [win, setWin] = useState(false)
  const [letterColors, setLetterColors] = useState(letterObj)


  // console.log('guess', guess)
  console.log('word', word)

  useEffect(() => {
    setWord(lodash.sample(wordArr).toUpperCase())
    // document.addEventListener('keydown', handleKeydown)
  }, [])

  // const handleKeydown = (e) => {
  //   console.log(e.key)

  //   if(e.key === 'BACKSPACE'){
  //       let guessCopy = [...guess]
  //       guessCopy.pop()
  //       setGuess(guessCopy)
  //   }else if(e.key === 13 && guess.length === 5){
  //       setGuessCount(guessCount + 1)
  //       setGuess([])
  //       let tempArr = [...guessArr]
  //       tempArr[guessCount] = guess.join('')
  //       setGuessArr(tempArr)
  //   }else if(guess.length < 5 && e.key !== 'ENTER'){
  //       let guessCopy = [...guess]
  //       guessCopy.push(e.key.toUpperCase())
  //       setGuess(guessCopy)
  // }
  // }

  return (
    <div id="App">
      <Header />

      <GuessDisplay
        word={word}
        guess={guess}
        guessCount={guessCount}
        setGuessCount={setGuessCount}
        guessArr={guessArr}
        win={win}
        setWin={setWin}
        letterColors={letterColors}
        setLetterColors={setLetterColors}
      />

      <Keyboard
        setGuess={setGuess}
        guess={guess}
        setGuessCount={setGuessCount}
        guessCount={guessCount}
        setGuessArr={setGuessArr}
        guessArr={guessArr}
        letterColors={letterColors}
        setLetterColors={setLetterColors}
        word={word}
      />
    </div>
  )
}

export default App
