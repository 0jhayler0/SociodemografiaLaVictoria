import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FloresDeLaVictoria from './assets/FloresDeLaVictoria.png'
import './styles/Login.css'
import './styles/App.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [animOut, setAnimOut] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'administrador123' && password === '1234') {
      setAnimOut(true)
      setTimeout(() => navigate('/app'), 400)
    } else {
      setError(true)
    }
  }

  return (
    <div className='loginContainer'>
      <div className={`loginForm ${animOut ? 'fade-out' : ''}`}>
        <img src={FloresDeLaVictoria} alt="" />
        <h1>Inicio de sesión</h1>
        <form className='form' onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder='Ingresa tu usuario'
            value={username}
            onChange={(e) => { setUsername(e.target.value); if (error) setError(false) }}
            className={error ? 'inputError' : ''}
          />
          <input
            type="password"
            placeholder='Ingresa tu contraseña'
            value={password}
            onChange={(e) => { setPassword(e.target.value); if (error) setError(false) }}
            className={error ? 'inputError' : ''}
          />
          {error && <div className="errorMessage" role="alert">Usuario o contraseña incorrecta</div>}
          <input type="submit" value="Entrar" className='submit' />
        </form>
      </div>
    </div>
  )
}

export default Login
