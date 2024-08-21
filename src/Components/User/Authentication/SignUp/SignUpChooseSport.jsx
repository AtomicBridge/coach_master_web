import React from 'react';
import {  useNavigate } from 'react-router-dom';
import AuthenticateImage from '../AuthenticateImage';

const SignUpChooseSport = () => {
    const navigate = useNavigate();

    const handleSportSelection = (sport) => {
        localStorage.setItem('selectedSport', sport);
        navigate('/signupchoosefield'); // Replace '/next-page' with the actual path you want to navigate to
    };

    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <AuthenticateImage />
                    <div className="col-sm-6 text-black">
                        <div className="px-5 ms-xl-4 d-flex justify-content-center mt-4">
                            <img src="./img/user/login/amz_bestsell-2-mo 1.png" alt="coachmasterlogo" className='img-fluid' />
                        </div>
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 d-flex justify-content-center">
                            <form className='set-login-width mt-md-3'>
                                <h3 className="mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Upload profile!</h3>
                                <p className="mb-2 pb-3 text-center text-secondary">Welcome to Coach Master!</p>
                                <div className="mt-5">
                                    <br />
                                    <div className="mb-4 mx-auto">
                                        <button type='button' onClick={() => handleSportSelection('soccer')} className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Soccer</button>
                                    </div>
                                    <div className="mb-4 mt-4">
                                        <button type='button' onClick={() => handleSportSelection('handball')} className="btn btn-outline-success rounded-pill px-5 py-2 w-100 shadow">Handball</button>
                                    </div>
                                </div>
                                <div className="text-center " style={{marginTop:'100%'}}>
                                    <p className="mt-md-3 text-secondary">
                                        <img src="./img/user/login/Frame (3).png" alt="Logo" className="me-2" />
                                        2024 Coach Master Sports. All Rights Reserved
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpChooseSport;
