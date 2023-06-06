import { useState } from 'react'
import './App.css'

import CPFGenerator from "./validates/CPFGenerator";
import CNPJGenerator from "./validates/CNPJGenerator";

function App() {
  return (
    <>
      <div>
        <CPFGenerator />
      </div>
      {/* <div>
        <CNPJGenerator />
      </div> */}
    </>
  )
}

export default App
