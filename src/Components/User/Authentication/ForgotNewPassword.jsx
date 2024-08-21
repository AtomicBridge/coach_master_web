import React, { useState } from 'react'
import AuthenticateImage from './AuthenticateImage'
import { Link, useNavigate } from 'react-router-dom'

const ForgotNewPassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handleSignUp = () => {
        if ( password === confirmPassword) 
        {
            navigate('/forgotpasswordsuccessfull')
        }
else
{
    alert("Password Not Match...!")
}
        
    };

  return (
    <><section class="vh-100">
    <div class="container-fluid">
      <div class="row">
      <AuthenticateImage/>
        <div class="col-sm-6 text-black">
  
        <div class="px-5 ms-xl-4 d-flex justify-content-center mt-4">
    <img src="./img/user/login/amz_bestsell-2-mo 1.png" alt="coachmasterlogo" className='img-fluid'/>
</div>

  
          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 d-flex justify-content-center">
  
            <form className='set-login-width' style={{marginTop:'20%'}}>
  
            <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Create New Password</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Choose a password that you will remember</p>
  
<div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label font-600" htmlFor="form2Example28">Password</label>
            <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="form2Example28"
                    className="form-control form-control-sm border-0 border-bottom"
                    style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div
                    className="border-0 border-bottom px-1"
                    type="button"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                </div>
            </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label font-600" htmlFor="form2Example28">Confirm Password</label>
            <div className="input-group">
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="form2Example28"
                    className="form-control form-control-sm border-0 border-bottom"
                    style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                    className="border-0 border-bottom px-1"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                >
                    {showConfirmPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                </div>
            </div>
        </div>


          <div className="mb-4 mt-4  mx-auto">
                            <button type='button' onClick={handleSignUp} className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Continue</button>
                          </div>

              <div className="d-flex flex-column justify-content-end h-100 mt-5">
    <div className="text-center  " style={{marginTop:'40%'}}>
        <p className="mt-md-3 text-secondary">
            <img src="./img/user/login/Frame (3).png" alt="Logo" className="me-2" />
            2024 Coach Master Sports. All Rights Reserved
        </p>
    </div>
</div>


            </form>
  
          </div>
  
        </div>
        
      </div>
    </div>
  </section></>
  )
}

export default ForgotNewPassword