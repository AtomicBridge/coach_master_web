import React, { useEffect, useState } from 'react'
import AuthenticateImage from './AuthenticateImage'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from "react-otp-input";
const ForgotPasswordOtp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [inputStyle, setInputStyle] = useState({
        width: "90px",
        height: "72px",
        fontSize: "24px",
        margin: "0 10px",
        textAlign: "center",
        borderRadius: "8px",
        border: "1px solid #34920A",
        backgroundColor: "#34920A",
        color: "#34920A",
        fontWeight: "700",
      });
      useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
          if (width <= 768) {
            setInputStyle({
              width: "65px",
              height: "42px",
              fontSize: "18px",
              margin: "0 5px",
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid #34920A",
              backgroundColor: "rgb(52, 146, 10, 0.1)",
              color: "#121212",
              fontWeight: "700",
            });
          } else if (width <= 576) {
            setInputStyle({
              width: "50px",
              height: "40px",
              fontSize: "14px",
              margin: "0 3px",
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid #34920A",
              backgroundColor: "#34920A",
              color: "#34920A",
              fontWeight: "700",
            });
          } else {
            setInputStyle({
              width: "82px",
              height: "48px",
              fontSize: "24px",
              margin: "0 10px",
              textAlign: "center",
              borderRadius: "8px",
              border: "1px solid #34920A",
              backgroundColor: "rgb(52, 146, 10, 0.1)",
              color: "#121212",
              fontWeight: "700",
            });
          }
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const handleChange = (otp) => {
        setOtp(otp);
      };
      const handleContinue = () => {
        console.log(otp);
        navigate('/forgotnewpassword');
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
  
            <form className='set-login-width' style={{marginTop:'18%'}}>
  
            <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>You’ve Got Email!</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Check your inbox. we have send the OTP verification code to your email address. Check your email and enter the code below.</p>
  

<OtpInput
                          value={otp}
                          onChange={handleChange}
                          numInputs={4}
                          inputStyle={inputStyle}
                          renderInput={(props) => <input {...props} />}
                        />
<p className=" mt-5 text-center " >Didn’t receive email?</p>
<p className=" mt-5 text-center " >You can resend code in 55 s</p>

          <div className="mb-4 mt-4  mx-auto">
                            <vutton type='button' onClick={handleContinue} className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Continue</vutton>
                          </div>

              <div className="d-flex flex-column justify-content-end h-100 mt-5">
    <div className="text-center  mt-5" >
        <p className="mt-md-5 text-secondary">
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

export default ForgotPasswordOtp