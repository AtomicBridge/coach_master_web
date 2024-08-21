import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import AuthenticateImage from './AuthenticateImage';
const LogIn = ({ setuserlogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
 
  const handlelogin = (e) => {
    e.preventDefault();

    // Check if username and password match the criteria for 'seller'
    if (email === "admin" && password === "admin") {
      localStorage.setItem("loggedInUser", "admin");
      setuserlogged("admin");
      navigate("/admindashboardhome");
    } else if (email === "coach" && password === "coach") {
      localStorage.setItem("loggedInUser", "coach");
      setuserlogged("coach");
      navigate("/coachdashboardhome");
    } else if (email === "advisor" && password === "advisor") {
      localStorage.setItem("loggedInUser", "advisor");
      setuserlogged("advisor");
      navigate("/coachdashboardhome");
    } else {
      alert("Invalid username or password");
    }
  };
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  return (
    <><section className="vh-100">
    <div className="container-fluid">
      <div className="row">
      <AuthenticateImage/>
        <div className="col-sm-6 text-black">
  
        <div className="px-5 ms-xl-4 d-flex justify-content-center mt-4">
    <img src="./img/user/login/amz_bestsell-2-mo 1.png" alt="coachmasterlogo" className='img-fluid'/>
</div>

  
          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 d-flex justify-content-center">
  
            <form className='set-login-width mt-md-3'>
  
            <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Hello Again!</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Welcome to Coach Master!</p>
  
<div data-mdb-input-init className="form-outline mb-4">
    <label className="form-label font-600" for="form2Example18">Email</label>
    <input type="email" id="form2Example18" className="form-control form-control-sm border-0 border-bottom" onChange={handleChangeemail} style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>


  
<div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label font-600" htmlFor="form2Example28">Password</label>
            <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="form2Example28"
                    onChange={handleChangePassword}
                    className="form-control form-control-sm border-0 border-bottom"
                    style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
                />
                <div
                    className="border-0 border-bottom px-1"
                    type="button"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2 p-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <Link to='/forgotpassword' className="text-default font-500">Forgot password?</Link>
          </div>
          <div className="mb-4 mt-4  mx-auto">
                            <button onClick={handlelogin} type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Sign IN</button>
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
              {/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p> */}
              <p className='text-center my-4 mb--md-5'>Don't have an account? <Link to="/signup" className="text-default font-600">Sign Up</Link></p>
              <div className="d-flex flex-column justify-content-end h-100 mt-5">
    <div className="text-center  mt-md-5">
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

export default LogIn