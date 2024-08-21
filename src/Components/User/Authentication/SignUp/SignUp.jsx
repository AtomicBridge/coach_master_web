import React, { useState } from 'react'
import AuthenticateImage from '../AuthenticateImage';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
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
            navigate('/signupuploadprofile')
        }
else
{
    alert("Password Not Match...!")
}
        
    };
  return (
    <>
    <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
      <AuthenticateImage/>
        <div class="col-sm-6 text-black">
  
        <div class="px-5 ms-xl-4 d-flex justify-content-center mt-4">
    <img src="./img/user/login/amz_bestsell-2-mo 1.png" alt="coachmasterlogo" className='img-fluid'/>
</div>

  
          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 d-flex justify-content-center">
  
            <form className='set-login-width '>
  
            <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Create Account</h3>
<p className=" mb-1 pb-3 text-center text-secondary" >Welcome to Coach Master!</p>
<div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Club Name</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
<div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Email</label>
    <input type="email" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>


  
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
                            <button type='button' onClick={handleSignUp} className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Sign Up</button>
                          </div>
                          <div className=" text-secondary">
                            <div className="row">
                              <div className="col">
                                <hr className="my-2" />
                              </div>
                              <div className="col-auto">
                                <h6 className="text-center">Or Continue with</h6>
                              </div>
                              <div className="col">
                                <hr className="my-2" />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center">
                          <div className="mb-3 mt-3 mx-2">
      <button className="btn rounded-pill px-4 py-2 border w-100 " type='button'>
        <img src="./img/user/login/google (1).png" alt="" className="mx-2 px-2" />
        
      </button>
    </div>
    <div className="mb-3 mt-3 mx-2">
      <button className="btn rounded-pill px-4 py-2 border w-100" type='button'>
        <img src="./img/user/login/apple.png" alt="" className="mx-2 px-2" />
        
      </button>
    </div>
    <div className="mb-3 mt-3 mx-2">
      <button className="btn rounded-pill px-4 py-2 border w-100 " type='button'>
        <img src="./img/user/login/ri_facebook-circle-fill.png" alt="" className="mx-2 px-2" />
        
      </button>
    </div>

                          </div>
              {/* <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p> */}
              <p className='text-center my-3 '>Already have an account?  <Link to='/' class="text-default font-600">Sign In</Link></p>
              <div className="d-flex flex-column justify-content-end h-100 ">
    <div className="text-center mt-4" >
        <p className=" text-secondary">
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
  </section>
    </>
  )
}

export default SignUp