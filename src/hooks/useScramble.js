import { useEffect, useState } from 'react'

// Only binary characters
const chars = '01'

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)]
}

export function useScramble(text, speed = 10, delay = 0) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    let frame = 0
    let scrambledArray = Array.from(text).map(() => randomChar())

    const interval = setInterval(() => {
      for (let i = 0; i < scrambledArray.length; i++) {
        if (i <= frame) {
          scrambledArray[i] = text[i]
        } else if (text[i] !== ' ') {
          scrambledArray[i] = randomChar()
        } else {
          scrambledArray[i] = ' ' // keep spaces clean
        }
      }

      setOutput(scrambledArray.join(''))

      if (frame >= text.length) {
        clearInterval(interval)
        setOutput(text)
      }

      frame++
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, delay])

  return output
}
