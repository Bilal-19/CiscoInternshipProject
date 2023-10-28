import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import Exhibit from './Component/Exhibit'

function App() {
  const [details, setDetails] = useState(null)

  const getUserDetails = () => {
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => setDetails(data))
  }
  return (
    <>
      <p>hello world</p>
      <Banner bannerName="Sextant" />
      <Exhibit text="I am from exhibit component" />
      <button onClick={getUserDetails}>Find My Details</button>
      {
        details && <p>Location: {`${details.ip}`}</p>
      }
    </>
  )
}

export default App
