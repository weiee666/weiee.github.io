import React, { useEffect, useState, useRef } from 'react'

const TextType = ({
  texts = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '_',
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5
}) => {
  const words = Array.isArray(texts) ? texts : [String(texts || '')]
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => { mounted.current = false }
  }, [])

  useEffect(() => {
    if (!mounted.current) return

    const currentWord = words[wordIndex % words.length]
    let timeout = null

    const getDelay = () => {
      if (!variableSpeedEnabled) return deleting ? deletingSpeed : typingSpeed
      const min = variableSpeedMin
      const max = variableSpeedMax
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    if (!deleting && displayed === currentWord) {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDeleting(true)
      }, pauseDuration)
    } else if (deleting && displayed === '') {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDeleting(false)
        setWordIndex(prev => (prev + 1) % words.length)
      }, 200)
    } else {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDisplayed(prev => {
          if (deleting) return currentWord.slice(0, Math.max(0, prev.length - 1))
          return currentWord.slice(0, prev.length + 1)
        })
      }, getDelay())
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, variableSpeedEnabled, variableSpeedMin, variableSpeedMax])

  return (
    <span className="texttype-root" style={{display: 'inline-flex', alignItems: 'center', gap: '0.25rem'}}>
      <span className="texttype-text">{displayed}</span>
      {showCursor && <span className="texttype-cursor" style={{animation: `blink ${cursorBlinkDuration}s step-start infinite`}}>{cursorCharacter}</span>}
      <style>{`@keyframes blink{50%{opacity:0}100%{opacity:1}}`}</style>
    </span>
  )
}

export default TextType
