import React, { useEffect, useRef, useState } from 'react'
import '../styles/Incapacidades.css'

const Incapacidades = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const formRef = useRef(null);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setMostrarFormulario(false);
      }
    };

    if (mostrarFormulario) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mostrarFormulario]);

  return (
    <div>
      <div>
      <div className='headerContainer'>
        <form className='colaboratorsSeacher' action="">
          <input type="text" placeholder='Buscar Por cédula'/>
          <button>Buscar</button>
        </form>

        <button className='incapacitarColaborador' onClick={toggleFormulario}>Incapacitar colaborador</button>

      </div>
      <div
        ref={formRef}
        className={`formContainer ${mostrarFormulario ? "active" : ""}`}
      >
        <form method="POST">
          <h2>Incapacitar colaborador</h2>

          <select name="tipoDeDocumento" required>
            <option value="">Tipo de Documento</option>
            <option value="cedula">Cédula de Ciudadanía</option>
            <option value="cedulaExtranjera">Cédula Extranjera</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="permiso">Permiso por Protección Temporal</option>
          </select>

          <input type="text" name="docid" placeholder="Número de Documento" required />
          <input type="text" name="nombres" placeholder="Nombres y Apellidos" required />
          <input type="date" name="fechaInicio" placeholder="Fecha de Inicio" required />
          <input type="date" name="fechaFin" placeholder="Fecha de Fin" required />
          <textarea name="motivo" placeholder="Motivo de la Incapacidad" required></textarea>

          {/* 👇 Botón para cerrar */}
          <button
            type="button"
            className="closeButton"
            onClick={() => setMostrarFormulario(false)}
          >
            X
          </button>
        </form>
      </div>
      <div className='contentContainer'>
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    </div>
  )
}

export default Incapacidades
