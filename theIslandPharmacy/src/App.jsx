import { useState } from 'react'
import islandPharmacy from './assets/islandPharmacyFlatLogo.svg'
import Button from './components/Button'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="/home" target="_blank">
          <img src={islandPharmacy} className="logo" alt="islandPharmacy logo" />
        </a>
      </div>
      <section>
      <h1>The Island Pharmacy</h1>
      <Button text="Iniciar Sesion" size="54" color="blue" disabled={false} />
      <Button text="Registro" size="104" color="red" disabled={true} />
      </section>
    </>
  )
}

export default App
