import React, { useEffect, useRef, useState } from 'react'
import '../styles/Content.css';
import '../styles/Aprendices.css';

const Aprendices = () => {
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
      <div className='headerContainer'>
        <form className='colaboratorsSeacher' action="">
          <input type="text" placeholder='Buscar por cédula'/>
          <button type="button">Buscar</button>
        </form>


        <button className="ingresarAprendiz" onClick={toggleFormulario}>
          Ingresar un aprendiz
        </button>

        <div
          ref={formRef}
          className={`formContainer ${mostrarFormulario ? "active" : ""}`}
        >
          <form method="POST">
            <h2>Ingreso de aprendices</h2>

            <select name="tipoDeDocumento" required>
              <option value="">Tipo de Documento</option>
              <option value="cedula">Cédula de Ciudadanía</option>
              <option value="cedulaExtranjera">Cédula Extranjera</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="permiso">Permiso por Protección Temporal</option>
            </select>

            <input type="text" name="docid" placeholder="Número de Documento" required />
            <input type="text" name="nombres" placeholder="Nombres y Apellidos" required />
            <input type="text" name="institucion" placeholder="Institución" required/>
            <input type="text" name="responsable" placeholder='Responsable del aprendiz' required/>

            <button
              type="button"
              className="closeButton"
              onClick={() => setMostrarFormulario(false)}
            >
              <span className="material-symbols-outlined">
              close
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className='contentContainer'>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aprendices;
