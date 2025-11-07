import React, { useState, useEffect } from 'react'
import Activos from './components/Activos'
import Aprendices from './components/Aprendices'
import Incapacidades from './components/Incapacidades'
import Retirados from './components/Retirados'
import AñadirColaboradores from './components/AñadirColaboradores'
import './styles/App.css'
import FloresDelaVictoria from './assets/FloresDeLaVictoria.png'


function App() {

  const [option, setOption] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const greeting = () => {
    const T = new Date().getHours();
      if( T >= 5 && T < 12){
        return "¡Buenos días!"
      }else if( T >= 12 && T < 18){
        return "¡Buenas tardes!"
      }else{
        return "¡Buenas noches!"
      }
  }

  const renderContent = () => {
    switch(option) {
      case "Activos":
        return <Activos/>;
      case "Aprendices":
        return <Aprendices/>;
      case "Incapacidades":
        return <Incapacidades/>;
      case "Retirados":
        return <Retirados/>;
      default:
        return <div className="greeting">
                  <img src={FloresDelaVictoria} alt="Logo empresarial" width={600} />
                  {greeting()}
                </div>
    }
  }
  

  return (
    <div className='principalContainer'>
      <header className='menuContainer'>
        <ul>
          <li><button className={`menuButtons ${option === "Activos" ? "active" : ""}`} onClick={() => setOption("Activos")}>Colaboradores</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${option === "Aprendices" ? "active" : ""}`} onClick={() => setOption("Aprendices")}>Aprendices</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${option === "Incapacidades" ? "active" : ""}`} onClick={() => setOption("Incapacidades")}>Incapacidades</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${option === "Retirados" ? "active" : ""}`} onClick={() => setOption("Retirados")}>Retirados</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${mostrarFormulario ? "active" : ""}`} id="mostrarFormularioBtn" onClick={() => setMostrarFormulario(true)}>Añadir Colaboradores</button></li>
        </ul>
      </header>
      <AñadirColaboradores isOpen={mostrarFormulario} onClose={() =>setMostrarFormulario(false) }/>
      <main className='content'>{renderContent()}</main>
    </div>
  )
}

export default App
