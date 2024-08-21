import React, { useState } from 'react'
import AuthenticateImage from '../AuthenticateImage'
import { Link } from 'react-router-dom'

const SignUpUploadProfile = () => {
  const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setAvatar(reader.result);
          };
          reader.readAsDataURL(file);
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
  
            <form className='set-login-width mt-md-3'>
  
            <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Upload profile!</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Welcome to Coach Master!</p>
<div className="text-center mb-2 mt-md-3 position-relative">
                                <img src={avatar ||"./img/user/login/image 114.png"} alt="avatar" className="rounded-circle img-fluid" width="200" style={{ width: '200px', height: '200px' }} />
                                <div className="position-absolute bottom-0 start-50 translate-middle-x " style={{marginLeft:'17.5%'}}>
                                    <label htmlFor="avatarInput" className="btn btn-link">
                                        <img src="./img/user/login/Edit-Square.png" alt="" />
                                    </label>
                                    <input type="file" id="avatarInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileInputChange} />
                                </div>
                            </div>


  

        <div class="d-flex justify-content-center align-items-center ">
        <div className="mb-4 mt-4 ">
                            <Link to='/signupchoosesport' type='button' className="btn btn-outline-success rounded-pill mx-2 py-2 shadow " style={{height:'45px', width:'11rem'}}>Skip</Link>
                          </div>
                          <div className="mb-4 mt-4 ">
                            <Link to='/signupchoosesport' type='button' className="btn btn-success rounded-pill mx-2 py-2 shadow " style={{height:'45px', width:'11rem'}}>Continue</Link>
                          </div>
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

export default SignUpUploadProfile