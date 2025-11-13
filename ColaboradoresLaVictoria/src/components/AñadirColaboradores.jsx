import React, { useEffect, useRef } from 'react'
import '../styles/AñadirColaboradores.css'

const AñadirColaboradores = ({ isOpen, onClose }) => {

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
        <div className={`colaboradoresContainer ${isOpen ? "visible" : ""}` }>
        
        <button className="closeButton" onClick={() =>setMostarFormulario(true)}> <span className="material-symbols-outlined">close</span></button>
          
        <form method="POST" action="#" ref={modalRef} className={`modal ${isOpen ? "active" :""}`}>

          <h2>Registro de Empleado</h2>

          <select name="tipoDeDocumento" required>
            <option value="">Tipo de Documento</option>
            <option value="cedula">Cédula de Ciudadania</option>
            <option value="cedulaExtrangera">Cédula Extrangera</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="Permiso">Permiso por Proteccion Temporal</option>
          </select>
          <input type="text" name="docid" placeholder="Numero de Documento" required />
          <input type="text" name="nombres" placeholder="Nombres y Apellidos" required />
          <input type="text" name="area" placeholder="Área" />
          <input type="text" name="cuentaBancaria" placeholder="Número de Cuenta Bancaria" />

          <select name="tipoDeContrato">
            <option value="">Tipo de Contrato</option>
            <option value="fijo">Fijo</option>
            <option value="indefinido">Término Indefinido</option>
            <option value="obraOLabor">Obra o Labor</option>
            <option value="aprendizaje">Aprendizaje</option>
            <option value="tiempoParcial">Tiempo Parcial</option>
            <option value="prestacionServicios">Prestación de Servicios</option>
          </select>

          <span>
            <label htmlFor="">Inicio del Contrato:</label>
            <input type="date" name="inicioContrato" placeholder="Inicio del Contrato" />
          </span>

          <select name="duracionContrato">
            <option value="">Duración del Contrato</option>
            <option value="6">6 Meses</option>
            <option value="12">1 Año</option>
            <option value="18">18 Meses</option>
            <option value="24">2 Años</option>
            <option value="30">30 Meses</option>
            <option value="36">3 Años</option>
          </select>

          <input type="number" name="salarioBase" placeholder="Salario Base" />
          <input type="text" name="nacionalidad" placeholder="Nacionalidad" />
          <input type="text" name="cargo" placeholder="Cargo" />
          <input type="text" name="eps" placeholder="EPS" />
          <input type="text" name="cajaCompensacion" placeholder="Caja de Compensación" />
          <input type="text" name="direccion" placeholder="Dirección" />
          <input type="text" name="municipio" placeholder="Municipio" />
          <input type="text" name="estrato" placeholder="Estrato" />
          <input type="text" name="telefono" placeholder="Número de Teléfono" />

          <span>
            <label htmlFor="">Fecha de Nacimiento:</label>
            <input type="date" name="fechaNacimiento" placeholder="Fecha de Nacimiento" />
          </span>
          <select name="sexo">
            <option value="">Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>

          <input type="number" name="hijos" placeholder="Cantidad de Hijos" />

          <select name="estadoCivil">
            <option value="">Estado Civil</option>
            <option value="soltero">Soltero/a</option>
            <option value="casado">Casado/a</option>
            <option value="divorciado">Divorciado/a</option>
            <option value="viudo">Viudo/a</option>
            <option value="unionLibre">Unión Libre</option>
          </select>

          <select name="escolaridad">
            <option value="">Escolaridad</option>
            <option value="primaria">Básica Primaria</option>
            <option value="bachiller">Bachiller</option>
            <option value="tecnico">Técnico/a</option>
            <option value="tecnologo">Tecnólogo/a</option>
            <option value="profesional">Profesional</option>
            <option value="especialista">Especialista</option>
            <option value="magister">Magíster</option>
            <option value="doctor">Doctor</option>
          </select>

          <select name="tipoSangre">
            <option value="">Tipo de Sangre</option>
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
          </select>

          <input type="text" name="contactoEmergencia" placeholder="Contacto de Emergencia (Nombre)" />
          <input type="text" name="telEmergencia" placeholder="Teléfono de Emergencia" />

          <input className="submit" type="submit" value="Registrar Empleado" />
        </form>
        </div>
      </div>
  )
}

export default AñadirColaboradores
