import React from 'react'
import { render } from 'react-dom'
import ChangeText from './ChangeText'
import Counter from './Counter'

function App() {
  return (
    <div>
      <ChangeText type="change text" />
      <Counter type="counter" />
    </div>
  )
}

render(<App />, document.querySelector('#root'))