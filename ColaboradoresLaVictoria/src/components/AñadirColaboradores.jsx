import React from 'react'
import '../styles/AñadirColaboradores.css'

const AñadirColaboradores = () => {
  return (
    <div>
      <div className='colaboradoresContainer'>
        <form action="POST">
            <input type="text"  placeholder='Cedula'/>
            <input type="text"  placeholder='Nombres y Apellidos'/>
            <input type="text"  placeholder='Area'/>
            <input type="text"  placeholder='Numero de Cuenta Bancaria'/>
            <select name="tipoDeContrato" >
                <option value="fijo">Fijo</option>
                <option value="indefinido">Termino Indefinido</option>
                <option value="obraOLabor">Obra o Labor</option>
                <option value="aprendizaje">Aprendizaje</option>
                <option value="tiempoParcial">tiempo Parcial</option>
                <option value="prestacionServicios">Prestacion de Servicios</option>
            </select>
            <input type="date" value='inicioContrato' placeholder='Inicio del Contrato'/>
            <input type="" value='' placeholder=''/>
            <select name="duracionContrato">
                <option value="6">6 Meses</option>
                <option value="12">1 Año</option>
                <option value="18">18 Meses</option>
                <option value="24">2 Años</option>
                <option value="30">30 Meses</option>
                <option value="36">3 Años</option>
            </select>
            <input type="number" value='salarioBase' placeholder='Salario Base'/>
            <input type="text" value='nacionalidad' placeholder='Nacionalidad'/>
            <input type="text" value='cargo' placeholder='Cargo'/>
            <input type="text" value='eps' placeholder='Eps'/>
            <input type="text" value='cajaCompensacion' placeholder='Caja de Compensacion'/>
            <input type="text" value='direccion' placeholder='Direccion'/>
            <input type="text" value='municipio' placeholder='Municipio'/>
            <input type="text" value='estrato' placeholder='Estrato'/>
            <input type="text" value='tel' placeholder='Numero de telefono'/>
            <input type="date" value='nacimiento' placeholder='Fecha de Nacimiento'/>
            <select name="sexo">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="cacorro">Otro</option>
            </select>
            <input type="number" value='hijos' placeholder='Cantidad de Hijos'/>
            <select name="estadoCivil">
                <option value="soltero">Soltero/a</option>
                <option value="casado">Casado/a</option>
                <option value="divorciado">Divorciado/a</option>
                <option value="viudo">Viudo/a</option>
                <option value="pecadores">Union Libre</option>
            </select>
            <select name="escolaridad" id="">
                <option value="primaria">Basica Primaria</option>
                <option value="bachiller">Bachiller</option>
                <option value="tecnico">Tecnico/a</option>
                <option value="tecnologo">Tecnologo/a</option>
                <option value="profesional">Profesional</option>
                <option value="especialista">Especialista</option>
                <option value="magister">Magister</option>
                <option value="doctor">Doctor</option>
            </select>
            <select name="tipoSangre" id="">
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
            </select>
            <input type="text" value='contactoEmergencia' placeholder='Contacto de Emergencia (Nombres y Apellidos)'/>
            <input type="text" value='telEmergencia' placeholder='Contacto de emergencia (N° de telefono)'/>
            <input className='submit' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default AñadirColaboradores
