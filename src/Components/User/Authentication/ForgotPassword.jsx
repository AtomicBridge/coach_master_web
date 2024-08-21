import React from 'react'
import AuthenticateImage from './AuthenticateImage'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
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
  
            <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Forgot Password!</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Please enter the email you use to sign in</p>
  
<div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Email</label>
    <input type="email" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>


          <div className="mb-4 mt-4  mx-auto">
                            <Link to='/forgotpasswordotp' className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Continue</Link>
                          </div>

              <div className="d-flex flex-column justify-content-end h-100 mt-5">
    <div className="text-center  " style={{marginTop:'60%'}}>
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

export default ForgotPassword