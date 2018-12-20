import React from 'react'
import { useState, hook } from './Hook'

function Counter(props) {
  let [count, setCount] = useState(0)
  const { type } = props
  return (
    <div>
      <h1>{type}: {count}</h1>
      <button onClick={() => setCount(++count)}>+</button>
      <button onClick={() => setCount(--count)}>-</button>
    </div>
  )
}

export default hook(Counter)

