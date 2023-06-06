import './App.css'
import Footer from './footer';
import CPFGenerator from "./validates/CPFGenerator";
import CNPJGenerator from "./validates/CNPJGenerator";

function App() {
  return (
    <div style={{ marginTop: -150 }}>
      <CPFGenerator />
      <br />
      <CNPJGenerator />
      <Footer />
    </div>
  )
}

export default App
