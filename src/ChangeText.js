import React from 'react'
import { useState, hook } from './Hook'

function ChangeText(props) {
  const [firtName, setFirstName] = useState('eric')
  const [lastName, setLastName] = useState('kong')
  const { type } = props
  return (
    <div>
      <h1>{type}: {firtName} {lastName}</h1>
      <input onChange={e => setFirstName(e.target.value)} type="text"/>
      <input onChange={e => setLastName(e.target.value)} type="text"/>
    </div>
  )
}

export default hook(ChangeText)
