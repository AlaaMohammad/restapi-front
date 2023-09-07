import React, { useRef, useState } from 'react'
import AuthAPI from '../../Services/AuthAPI';
import { useAuthentication } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom'
function Login() {
    const { setIsAuthenticated } = useAuthentication()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await AuthAPI.login(emailRef.current.value, passwordRef.current.value)
           
            localStorage.setItem('authToken', response.access_token)
            setIsAuthenticated(true)
            navigate('/dashboard')
        } catch (error) {
            setError('Login failed. Please check your credentials and try again')
            console.error(error)
        }
    }
    return (
        <div className="container">
           
            <div className="row h-100">
                <div className="col-6 d-flex align-items-center p-5">
                    <div className='row'>
                        <div className='col-12'>

                         <form className='' onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                    </form>
                        </div>
                        <div className='col-12 mt-5'>

                        <div className="">{error}</div>
                        </div>
                    </div>
                   
                </div>
                <div className="col-6 d-flex align-items-center">
                    <img className="img-fluid  w-75 " src="/img/login-bg.png" />
                </div>
            </div>
        </div>
    );
}

export default Login