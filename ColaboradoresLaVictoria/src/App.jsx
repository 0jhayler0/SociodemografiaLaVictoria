import React, { useState, useEffect, useRef } from 'react'
import Activos from './components/Activos'
import Aprendices from './components/Aprendices'
import Incapacidades from './components/Incapacidades'
import Retirados from './components/Retirados'
import AñadirColaboradores from './components/AñadirColaboradores'
import Notificaciones from './components/Notificaciones'
import FloresDelaVictoria from './assets/FloresDeLaVictoria.png'
import './styles/App.css'

function App() {

  const [option, setOption] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.hamburgerBtn')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [menuOpen]);

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
                  <img src={FloresDelaVictoria} alt="Logo empresarial" width={600} style={{ opacity: 0.4 }}/>
                  {greeting()}
                </div>
    }
  }
  

  return (
    <div className='principalContainer'>
      <header className='menuContainer'>
        <button className={`notificacionesBtn ${mostrarNotificaciones ? "active" : ""}`} onClick={() => setMostrarNotificaciones(true)}><span className="material-symbols-outlined">notifications</span></button>
        <button className={`hamburgerBtn ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`menuList ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <li><button className={`menuButtons ${option === "Activos" ? "active" : ""}`} onClick={() => { setOption("Activos"); setMenuOpen(false); }}>Colaboradores</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${option === "Aprendices" ? "active" : ""}`} onClick={() => { setOption("Aprendices"); setMenuOpen(false); }}>Aprendices</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${option === "Incapacidades" ? "active" : ""}`} onClick={() => { setOption("Incapacidades"); setMenuOpen(false); }}>Incapacidades</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${option === "Retirados" ? "active" : ""}`} onClick={() => { setOption("Retirados"); setMenuOpen(false); }}>Retirados</button></li>
          <li>|</li>
          <li><button className={`menuButtons ${mostrarFormulario ? "active" : ""}`} id="mostrarFormularioBtn" onClick={() => { setMostrarFormulario(true); setMenuOpen(false); }}>Añadir Colaboradores</button></li>
        </ul>
      </header>
      <AñadirColaboradores isOpen={mostrarFormulario} onClose={() => setMostrarFormulario(false) } />
      <Notificaciones isOpen={mostrarNotificaciones} onClose={ () => setMostrarNotificaciones(false)} />
      <main className='content'>{renderContent()}</main>
    </div>
  )
}

export default App
