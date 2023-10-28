import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Exhibit from './Component/Exhibit'

function App() {
  const [IPV4Details, setIPV4Details] = useState(null)

  const getUserIPV4ddress = () => {
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => setIPV4Details(data))
  }

  const [IPV6Details, setIPV6Details] = useState(null)

  const getUserIPV6ddress = () => {
    fetch('https://api64.ipify.org?format=json').then(response => response.json()).then(data => setIPV6Details(data))
  }
  return (
    <>
      <Banner bannerName="Sextant Dashboard" />
      <Exhibit text="I am from exhibit component" />
      <button onClick={getUserIPV4ddress}>Find IPV4 Address</button>
      {
        IPV4Details && <p>Location: {`${IPV4Details.ip}`}</p>
      }
      <br></br>
      <button onClick={getUserIPV6ddress}>Find IPV6 Address</button>
      {
        IPV6Details && <p>Location: {`${IPV6Details.ip}`}</p>
      }
    </>
  )
}

export default App
