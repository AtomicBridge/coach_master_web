import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
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
        navigate('/');
    };
   
  const handlenotification =() =>{
    navigate('/instructornotifications')
        }
        const handleinbox =() =>{
            navigate('/instructorinbox')
                }
  return (
    <>
    <div className="col-md-2 sidebarhide p-3 text-bg-light" style={{maxHeight:'1024px'}}>
            <div className="container">
            <div className="d-flex flex-column flex-shrink-0">
              <div className="d-flex align-items-center mb-3 me-md-auto  ">
                <img className='fs-4 mx-4 img-fluid' src="./img/Sidebar/Layer 3.png" alt="" />
              </div>
              
              <ul className="nav nav-pills flex-column mb-4 mt-5">
              <li className="nav-item my-2">
                   <> <Link to={userlogged === 'admin'? '/admindashboardhome' : '/coachdashboardhome'} className={`nav-link rounded-3 sidebarbtn ${currentURL === '/admindashboardhome' || currentURL ==='/admindashboardnotes' || currentURL ==='/admindashboardnotesview' || currentURL ==='/admindashboardnotescreate' 
                    || currentURL ==='/admindashboardsquad' || currentURL ==='/admindashboardexercises' || currentURL ==='/admindashboardyearplannertrainingsession' || currentURL ==='/admindashboardyearplannerdetails' || currentURL ==='/admindashboardyearplanner' 
                    || currentURL ==='/admindashboardyearplannermatchday' || currentURL ==='/coachdashboardhome' || currentURL ==='/coachdashboardyearplanner' || currentURL ==='/admindashboardsquadplayers' || currentURL ==='/coachdashboardsquadplayerinfo'? 'sidebarbtncolor' : ''}`} >
                  <div className="d-flex justify-content-start">
                    <div>
                    {currentURL === '/admindashboardhome'|| currentURL ==='/admindashboardnotes' || currentURL ==='/admindashboardnotesview' || currentURL ==='/admindashboardnotescreate' || currentURL ==='/admindashboardsquad' 
                    || currentURL ==='/admindashboardsquad' || currentURL ==='/admindashboardexercises' || currentURL ==='/admindashboardyearplannertrainingsession' || currentURL ==='/admindashboardyearplannerdetails' || currentURL ==='/admindashboardyearplanner' 
                    || currentURL ==='/admindashboardyearplannermatchday' || currentURL ==='/coachdashboardhome' || currentURL ==='/coachdashboardyearplanner' || currentURL ==='/admindashboardsquadplayers' || currentURL ==='/coachdashboardsquadplayerinfo' ? <img src="./img/Sidebar/layout-dashboard.png" alt="" />:<img src="./img/Sidebar/layout-dashboard (1).png" alt="" />}
                    </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Dashboard</span>
                    </div>
                    </div>
                  </Link> </>
                </li>
                <li className="nav-item my-2">
                  <Link to='/admindashboardprofile' className={`nav-link rounded-3 sidebarbtn ${currentURL === '/admindashboardprofile' ? 'sidebarbtncolor' : ''}`}>
                  <div className="d-flex justify-content-start">
                    <div>
                  {currentURL === '/admindashboardprofile' ?<img src="./img/Sidebar/user (1).png" alt="" />:<img src="./img/Sidebar/user.png" alt="" />}
                  </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Profile</span>
                    </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item mt-2 mb-5">
                  <Link to='/admindashboardsettings' className={`nav-link rounded-3 sidebarbtn ${currentURL === '/admindashboardsettings' ? 'sidebarbtncolor' : ''}`}>
                    <div className="d-flex justify-content-start">
                    <div>
                  {currentURL === '/admindashboardsettings' ?<img src="./img/Sidebar/settings (1).png" alt="" />:<img src="./img/Sidebar/settings.png" alt=""/>}
                    </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Settings</span>
                    </div>
                    </div>
                  </Link>
                </li>
                <li className="nav-item my-5">
                  <Link to='/admindashboardmessages' className={`nav-link mt-5 rounded-3 sidebarbtn ${currentURL === '/admindashboardmessages' ? 'sidebarbtncolor' : ''}`}>
                    <div className="d-flex justify-content-start">
                    <div>
                  {currentURL === '/admindashboardmessages' ?<img src="./img/Sidebar/message-circle.png" alt="" />:<img src="./img/Sidebar/message-circle (1).png" alt=""/>}
                    </div>
                    <div style={{marginTop:'2px'}}>
                    <span className='sidebartext mx-2'>Messages</span>
                    </div>
                    </div>
                  </Link>
                  <hr />
                </li>
                
              </ul>
              <div style={{marginTop:'100%'}}>
              
              <ul className="nav nav-pills flex-column mb-auto" >
                <li className="nav-item my-2">
                  <button className='nav-link rounded-3 sidebarbtn '  onClick={handleLogout}>
                  <img src="./img/Sidebar/sign-out-alt 1.png" alt=""/>
                    <span className=' mx-2' style={{color:'#CC0000'}}>Logout</span>
                  </button>
                </li>
              </ul></div>
              {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center  text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                  <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div> */}
            </div>
            </div>
          </div>
    </>
  )
}

export default AdminSidebar