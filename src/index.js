import React from 'react'
import { render } from 'react-dom'
import ChangeText from './ChangeText'
import Counter from './Counter'
import EffectDemo from './EffectDemo'

function App() {
  return (
    <div>
      <ChangeText type="change text" />
      <Counter type="counter" />
      <EffectDemo type="userEffect demo" />
    </div>
  )
}

render(<App />, document.querySelector('#root'))