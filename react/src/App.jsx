import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  async function serchCity() {

    const city = inputRef.current.value
    const key = "68991f847887b7a50a8331d77a572184"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const data = await axios.get(url)
    console.log(data)
  }
  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={serchCity}>Buscar</button>
    </div>
  )
}

export default App
