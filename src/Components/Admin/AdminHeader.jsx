import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const location = useLocation();
    const [currentURL, setCurrentURL] = useState(location.pathname);
    const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))
  const navigate = useNavigate();
    useEffect(() => {
      setCurrentURL(location.pathname);
    }, [location.pathname]);
    // const [activeLink, setActiveLink] = useState(null);

    // const handleLinkClick = (event) => {
    //   setActiveLink(currentURL);
    // };
    // const handleLinkClickProgress = (event) => {
    //     setActiveLink(event.target.innerText);
    //   };
    //   const handleLinkClickSettings = (event) => {
    //     setActiveLink(event.target.innerText);
    //   };


      const handleLogout = () => {
        // Remove data of 'loggedInUser' from localStorage
        localStorage.removeItem('loggedInUser');
        // Update the userlogged state to false
        setuserlogged(false);
        navigate('/login');
    };
   
//   const handlenotification =() =>{
//     navigate('/instructornotifications')
//         }
        const handleinbox =() =>{
            navigate('/instructorinbox')
                }

           
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid" style={{ maxWidth: "90%" }}>
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{marginLeft:'10%'}} id="navbarSupportedContent">
           
            <div className="navbar-nav ms-2 setsearchbarwidth mb-md-5"> 
            {/* <div className="px-2 ">
                  <div className="d-flex align-items-center " >
                    <div className="flex-grow-1 position-relative " >
                      <input type="text" className="form-control my-1 border-0 py-2" placeholder="Search agent" style={{backgroundColor:'#FAFAFA'}}/>
                      <div className="position-absolute top-50 start-0 translate-middle-y">
                        <i className="fas fa-search text-muted mx-3 "></i> 
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="input-group my-2">
    
    <input
        type="text"
        className="form-control border-0 "
        placeholder="Search"
        style={{ backgroundColor: '#FAFAFA', borderRadius: '0',borderTopLeftRadius:'30px',borderBottomLeftRadius:'30px' }}
    />
    <div className="input-group-prepend">
        <span className="input-group-text bg-light border-0" style={{borderRadius: '0',borderTopRightRadius:'30px',borderBottomRightRadius:'30px'}}>
            <i className="fas fa-search text-muted py-2 px-3"></i>
        </span>
    </div>
</div>


            </div>
            <div className="showsidebarnav">
            <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to='/admindashboardhome'>Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/admindashboardprofile'>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/admindashboardsettings' >Settings</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/admindashboardmessages' >Messages</Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link" onClick={handleLogout} >Logout</span>
                </li>
            </ul>
            </div>
            <ul className="navbar-nav ms-auto mb-md-5">
                
    <li className="nav-item my-2 mx-md-4 ">
    
        <img
      src="./img/Sidebar/Ellipse 2364.png"
      // className="dropdown-toggle"
      // data-bs-toggle="dropdown"
      // aria-expanded="false"
      alt=""
      className='mx-4'
      style={{ width: '48px', height: '48px' }}
    />
        <img className='mx-2' onClick={handleinbox} style={{cursor:'pointer'}} src="./img/Sidebar/Frame (4).png" alt="" />

    </li>

</ul>
            



        </div>
              </div>
            </nav>
    </>
  )
}

export default AdminHeader