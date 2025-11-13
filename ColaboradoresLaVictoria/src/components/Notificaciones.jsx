import React, { useEffect, useRef } from 'react'
import '../styles/Notificaciones.css'


const Notificaciones = ({ isOpen, onClose }) => {

  const modalRef = useRef();

  useEffect(() => {
      function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
          }
        }
  
        if(isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
          return () => document.removeEventListener("mousedown", handleClickOutside);
      }, [isOpen, onClose]);

  return (
    <div>
      <div className={`notificacionesContainer ${ isOpen ? "visible" : ""}`}>

        <button className="closeNotificaciones" onClick={onClose}><span className="material-symbols-outlined">arrow_back</span></button>
        
        <div ref={modalRef} className={`modal ${isOpen ? "active" :""}`}></div>

      </div>
    </div>
  )
}

export default Notificaciones
