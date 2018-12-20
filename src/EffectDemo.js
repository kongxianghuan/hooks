import React from 'react'
import { hook, useState, useEffect } from './Hook'

function EffectDemo(props) {
  const { type } = props
  const [width = window.innerWidth, setWidth] = useState()

  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  })

  useEffect(() => {
    const setTitle = () => document.title = window.location.hash
    setTitle()
    window.addEventListener('hashchange', setTitle)
    return () => window.removeEventListener('hashchange', setTitle)
  })

  return (
    <div>
      <h1>{ type }</h1>
      <div>width: { width }</div>
      <a href="#1">link1</a> | <a href="#2">link2</a> | <a href="#3">lin3</a>
    </div>
  )
}

export default hook(EffectDemo)

