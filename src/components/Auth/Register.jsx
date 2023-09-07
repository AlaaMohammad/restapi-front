import React, { useRef, useState } from 'react'
import AuthAPI from '../../Services/AuthAPI';
import { useAuthentication } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { setIsAuthenticated } = useAuthentication()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await AuthAPI.login(emailRef.current.value, passwordRef.current.value)
      localStorage.setItem('authToken', response.access_tokenn)
      setIsAuthenticated(true)
      navigate('/')
    } catch (error) {
      setError('Login failed. Please check your credentials and try again')
      console.error(error)
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col">{error}</div>
      </div>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={emailRef}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                ref={passwordRef}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-6">
          <img src="https://www.alxafrica.com/wp-content/uploads/2023/01/7_Do-hard-things-100.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Register