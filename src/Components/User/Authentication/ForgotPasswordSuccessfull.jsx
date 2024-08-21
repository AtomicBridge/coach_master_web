import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordSuccessfull = () => {
  return (
    <>
    <div className='container'>
    <div class=" d-flex justify-content-center mt-4 mb-5">
    <img src="./img/user/login/amz_bestsell-2-mo 1.png" alt="coachmasterlogo" className='img-fluid'/>
</div>
<div class=" d-flex justify-content-center mt-5">
    <img src="./img/user/login/Group 1686553582.png" alt="coachmasterlogo" className='img-fluid mt-5'/>
</div>
{/* <h2 className="  my-4 text-center font-500" style={{ letterSpacing: "1px",fontSize:'36px' }}>{selectedSport[0].toUpperCase() + selectedSport.slice(1)}</h2> */}

{/* <h3 className=" mb-1 mt-4 pb-3 text-center text-default font-600" style={{ letterSpacing: "1px" }}>Sign Up Successful!</h3> */}
<div className="d-flex justify-content-center align-items-center">
    <div className="col-md-3">
    <h3 className=" mb-3 mt-4 pb-3 text-center text-default font-600" style={{ letterSpacing: "1px" }}>New Password Created</h3>
        <p className="mb-2 pb-3 text-center">Your New password created successfully, keep remember to update your password...!</p>
        <div className="mb-4 mt-4  mx-auto">
                            <Link to='/' className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Continue</Link>
                          </div>
    </div>
</div>

    </div>

    </>
  )
}

export default ForgotPasswordSuccessfull