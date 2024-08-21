import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./admindashboard.css";
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
const AdminDashboardHome = () => {
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [currentURL, setCurrentURL] = useState(location.pathname);
    const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))
    const [imageURL, setImageURL] = useState(null);
  const [showDropZone, setShowDropZone] = useState(true);
  const [linkText, setLinkText] = useState('Lorem ipsum dolor sit amet consectetur. N');

  const handleCopyLink = () => {
      navigator.clipboard.writeText(linkText)
          .then(() => {
              alert('Link copied to clipboard!');
          })
          .catch((err) => {
              console.error('Failed to copy: ', err);
          });
  };
  const handleInvite = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
};
  const handleFileSelect = (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = () => {
            setImageURL(reader.result);
            setShowDropZone(false); // Hide the drop zone after selecting an image
        };
        reader.readAsDataURL(selectedImage);
    }
};
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

        const handleinbox =() =>{
            navigate('/instructorinbox')
                }
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
            {showDropZone && (
                <div className="instructordropzone text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src="./img/Admin/Upload.png" className="instructorupload-icon" alt="Upload Icon" />
                        <h3 className="d-block mt-2 ">upload Team picture</h3>
                    </div>
                    <input
                        type="file"
                        className="instructorupload-input"
                        accept="image/*"
                        onChange={handleFileSelect}
                    />
                </div>
            )}
            {imageURL && !showDropZone && (
                <>
                
                <div className="instructordropzoneuploadimg-container">
    <div className="instructordropzoneuploadimg">
        <img src={imageURL} alt="Uploaded" className="instructoruploaded-image" />
        <div>
        
        <img src="./img/Admin/Group 1686554026.png" alt="" className="bottom-right-image" />
        <input
            type="file"
            className="instructoruploadimg-input rounded-circle"
            accept="image/*"
            onChange={handleFileSelect}
        /> 
        </div>
        {/* Uncomment the following input field if needed */}
        {/* <input
            type="file"
            className="instructoruploadimg-input"
            accept="image/*"
            onChange={handleFileSelect}
        /> */}
    </div>
</div>
                
                </>
            )}
        </div>
    <div className='mt-5'>
    <div className="text-center d-flex flex-column justify-content-center mt-5">
    
        <div className="row ">
            <div className="col-md-6 ">
            <Link to='/admindashboardyearplanner' className='text-dark' style={{textDecoration:'none'}}>
                <div className=" shadow mx-1 my-3 my-md-0 rounded-4 py-3">
                <img className='mt-2' src="./img/Admin/Calendar.png" alt="" />
                <h4 className='my-2'>Year Planner</h4>
                </div>
                </Link>
            </div>
            <div className="col-md-6 ">
            <Link to='/admindashboardnotes' className='text-dark' style={{textDecoration:'none'}}>
                <div className=" shadow mx-1 my-3 my-md-0 rounded-4 py-3">
                <img className='mt-2' src="./img/Admin/notes (2).png" alt="" />
                <h4 className='my-2'>Notes</h4>
                </div>
                </Link>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-md-6 ">
            <Link to='/admindashboardsquad' className='text-dark' style={{textDecoration:'none'}}>
                <div className=" shadow mx-1 rounded-4 py-3">
                <img className='mt-2' src="./img/Admin/Frame (5).png" alt="" />
                <h4 className='my-2'>Squad</h4>
                </div>
                </Link>
            </div>
            <div className="col-md-6 ">
            <Link to='/admindashboardexercises' className='text-dark' style={{textDecoration:'none'}}>
                <div className=" shadow mx-1 my-4 my-md-0 rounded-4 py-3">
                <img className='mt-2' src="./img/Admin/Frame (6).png" alt="" />
                <h4 className='my-2'>Exercises</h4>
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
                    src={avatar || "./img/Admin/Frame 1686554412.png"}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: '257px', height: '257px', cursor: 'pointer' }}
                />
            </label>
            <input
                type="file"
                id="avatarInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
            />
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
                <td className="text-end">
                    {/* <div>
                        <img src="./img/Admin/Vector (5).png" alt="" />
                    </div> */}
                    <div className='mt-1 position-relative'>
  <i className="fa-solid fa-xl fa-ellipsis " style={{cursor:'pointer'}}
    data-bs-toggle="dropdown"
    aria-expanded="false"></i>
  <ul className="dropdown-menu px-2  mt-2" style={{ left: '-100%' }}>
    <li><button className="dropdown-item border-bottom px-2 my-1 fw-bold" > Make Advisor </button></li>
    <li><button className="dropdown-item fw-bold px-2 my-1" > Make Coach</button></li>
   
  </ul>
</div>
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
                            <button type='button' onClick={handleInvite} className="btn btn-success rounded-pill mx-2 py-2 shadow " style={{height:'45px', width:'11rem'}}>Invite</button>
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
      {showModal && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-lg "> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body text-center position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModal}
                    />
                    
                    <div className="d-flex flex-column align-items-center justify-content-center col-md-7 mx-auto py-4">
    <h4 className="my-3">
        <b>Copy link to invite Trainers</b>
    </h4>
    <h6>
        Lorem ipsum dolor sit amet consectetur. Nascetur euismod hac dictum accumsan turpis orci nunc.
    </h6>
    <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div>
    
</div>
<div className="mb-5 mt-4  mx-auto">
                            <button  type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleCopyLink}>Copy link</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
    </>
  )
}

export default AdminDashboardHome