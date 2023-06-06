import './App.css'

import Footer from './footer';
import CPFGenerator from "./validates/CPFGenerator";
import CNPJGenerator from "./validates/CNPJGenerator";

function App() {
  return (
    <>
      <div>
        <CPFGenerator />
      </div>
      <br />
      <div>
        <CNPJGenerator />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
