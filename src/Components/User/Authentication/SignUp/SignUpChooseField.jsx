import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUpChooseField = () => {
    const [selectedSport, setSelectedSport] = useState(localStorage.getItem('selectedSport'));
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    
    const handleSportSelection = (field) => {
        // setSelectedImage(image);
        localStorage.setItem('selectedField', field);
        navigate('/signupsuccessfull');
    };

    useEffect(() => {
      console.log(selectedSport);
    
    }, [])
    
  return (
    <>
    <div className='container'>
    <div class=" d-flex justify-content-center mt-4">
    <img src="./img/user/login/amz_bestsell-2-mo 1.png" alt="coachmasterlogo" className='img-fluid'/>
</div>
<h2 className="  my-4 text-center font-500" style={{ letterSpacing: "1px",fontSize:'36px' }}>{selectedSport[0].toUpperCase() + selectedSport.slice(1)}</h2>

<h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Choose Your Design</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Welcome Back, you have been missed!</p>

<div className="row">
            <div className="col-md-6">
                <h4 className='fw-bold'>Entire Field</h4>
                {selectedSport === 'soccer' ?<img 
                    src="./img/user/login/Entire Field.png" 
                    alt="Entire Field Image" 
                    style={{ cursor: 'pointer', border: selectedImage === 'entire' ? '2px solid blue' : 'none' }} 
                    className='img-fluid' 
                    onClick={() => handleSportSelection('entire')}
                />: 
                <img 
                    src="./img/user/login/Entire Field (1).png" 
                    alt="Entire Field Image" 
                    style={{ cursor: 'pointer', border: selectedImage === 'entire' ? '2px solid blue' : 'none' }} 
                    className='img-fluid' 
                    onClick={() => handleSportSelection('entire')}
                />
                }
            </div>
            <div className="col-md-6">
                <h4 className='fw-bold'>Half Field</h4>
                {selectedSport === 'soccer'?
                <img 
                    src="./img/user/login/half field.png" 
                    alt="Half Field Image" 
                    style={{ cursor: 'pointer', border: selectedImage === 'half' ? '2px solid blue' : 'none' }} 
                    className='img-fluid' 
                    onClick={() => handleSportSelection('half')}
                />:
                <img 
                    src="./img/user/login/half field (1).png" 
                    alt="Half Field Image" 
                    style={{ cursor: 'pointer', border: selectedImage === 'half' ? '2px solid blue' : 'none' }} 
                    className='img-fluid' 
                    onClick={() => handleSportSelection('half')}
                />
                }
            </div>
        </div>
    </div>

    </>
  )
}

export default SignUpChooseField