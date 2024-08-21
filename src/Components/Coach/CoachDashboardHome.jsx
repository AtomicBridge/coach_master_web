import React, { useEffect, useState } from 'react'
import "./coachdashboard.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from '../Admin/AdminSidebar';
import AdminHeader from '../Admin/AdminHeader';
const CoachDashboardHome = () => {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [currentURL, setCurrentURL] = useState(location.pathname);
    const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))

  const [linkText, setLinkText] = useState('Lorem ipsum dolor sit amet consectetur. N');


  const navigate = useNavigate();
    useEffect(() => {
      setCurrentURL(location.pathname);
    }, [location.pathname]);


      const handleLogout = () => {
        // Remove data of 'loggedInUser' from localStorage
        localStorage.removeItem('loggedInUser');
        // Update the userlogged state to false
        setuserlogged(false);
        navigate('/login');
    };

  return (
    <>
      <div className="overflow-hidden">
        <div className="row">
          {/* Sidebar */}
          <AdminSidebar/>
          {/* Main Content */}
          <div className="col-md-10">
          {/* Header */}
          <AdminHeader/>
            <div className='container-fluid my-3 my-md-0'>
              {/* <h3 className='fw-bold'>My Courses</h3> */}
              <div className='row'>
              <div className="col-md-7 col-12 ">
           <div className="row  instructorcreatecoursemidborder p-2">
           <div>
                
                <div className="instructordropzoneuploadimg-container">
    <div className="instructordropzoneuploadimg">
        <img src='./img/Coach/Frame 1686554411.png' alt="Uploaded" className="instructoruploaded-image" />
    </div>
</div>  

        </div>
    <div className='mt-5'>
    <div className="text-center d-flex flex-column justify-content-center mt-5">
    
        <div className="row ">
            <div className="col-md-6 ">
            <Link to='/coachdashboardyearplanner' className='text-dark' style={{textDecoration:'none'}}>
                <div className=" shadow mx-1 my-3 my-md-0 rounded-4 py-3">
                <img className='mt-2' src="./img/Admin/Calendar.png" alt="" />
                <h4 className='my-2'>Year Planner</h4>
                </div>
                </Link>
            </div>
            <div className="col-md-6 ">
            <Link to={userlogged === 'admin'? '/admindashboardsquad' : '/admindashboardsquadplayers'} className='text-dark' style={{textDecoration:'none'}}>
                <div className=" shadow mx-1 rounded-4 py-3">
                <img className='mt-2' src="./img/Admin/Frame (5).png" alt="" />
                <h4 className='my-2'>Squad</h4>
                </div>
                </Link>
            </div>
        </div>
        
    
</div>

                            
                            
    </div>




</div>

           </div>
           <div className="col-md-5 paddingtoadjustmiduploadlogo" >
           <div className="text-center mb-2 mt-md-3 position-relative">
            <label htmlFor="avatarInput">
                <img
                    src='./img/Coach/Frame 1686554412 (1).png'
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: '257px', height: '257px' }}
                />
            </label>
            
        </div>

        <div className=' mx-5 pb-4 mt-5' >
            <div className="shadow p-4 pt-5" style={{height:'100%', borderRadius:'72px'}}>
            <div className='position-relative'>
            <h4 className='fw-bold'>Coordinate with your </h4>
            <h4 className='fw-bold'>colleagues</h4>
            {/* <div  className=" d-flex justify-content-center mt-3">
            <img src="./img/Admin/7182231_3582363 1.png" alt="" className='img-fluid' style={{height:'155px', width:'155px'}}/>
            </div>
            <h5 className='text-center text-secondary'>No Colleague Yet</h5> */}

<div className="scroll-container-invite ">
    <table className="table">
        {[...Array(10)].map((_, index) => (
            <tr key={index}>
                <td width="60px">
                    <div className="imgBx">
                        <img src="./img/Admin/Ellipse 2353.png" alt="" />
                    </div>
                </td>
                <td>
                    <p className='pt-2 fw-bold mb-0'>
                        Benjamin Eta <br />
                        <span className="d-inline-block fw-normal" style={{ fontSize: '14px' }}>Admin</span>
                    </p>
                </td>
                
            </tr>
        ))}
    </table>
</div>
<div className="position-absolute" style={{ bottom: '50px', right: '10px', cursor:'pointer' }}>
        <img src="./img/Admin/Caht icon.png" alt="Chat Icon" />
    </div>

            {/* <div className="mb-2 d-flex justify-content-center" style={{marginTop:'19%'}}>
                            <button type='button' className="btn btn-success rounded-pill mx-2 py-2 shadow " style={{height:'45px', width:'11rem'}}>Invite</button>
                          </div> */}
                          <div className="mt-2 d-flex justify-content-center">
                         <br />
                          </div>
            </div>
            </div>
        </div>
           </div>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
     
    </>
  )
}

export default CoachDashboardHome