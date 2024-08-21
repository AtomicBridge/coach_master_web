import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'

const AdminDashboardSettings = () => {
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
            <div className='container my-4'>
              <h2 className=''>Settings</h2>
              <div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3'>
<div className="d-flex justify-content-between text-secondary">
<h5>Notification</h5>
<div class="form-check form-switch form-switch-lg" >
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
</div>
</div>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3' style={{cursor:'pointer'}}>
<Link to='/admindashboardsettingschangepassword' className="d-flex text-secondary justify-content-between text-decoration-none">
<h5>Change Password</h5>
<img src="./img/Admin/Settings/Group 12.png" className='img-fluid pb-1' height='32' width='32' alt="" />
</Link>
</div>

<h2 className='mt-4'>Support</h2>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3' style={{cursor:'pointer'}}>
<Link to='/admindashboardsettingshelpcenter' className="d-flex text-secondary justify-content-between text-decoration-none">
<h5>Contact Us </h5>
<img src="./img/Admin/Settings/Group 12.png" className='img-fluid pb-1' height='32' width='32' alt="" />
</Link>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3' style={{cursor:'pointer'}}>
<Link to='/admindashboardsettingsaboutus' className="d-flex text-secondary justify-content-between text-decoration-none">
<h5>About Us</h5>
<img src="./img/Admin/Settings/Group 12.png" className='img-fluid pb-1' height='32' width='32' alt="" />
</Link>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3' style={{cursor:'pointer'}}>
<Link to='/admindashboardsettingsterms' className="d-flex text-secondary justify-content-between text-decoration-none">
<h5>Terms Of Use</h5>
<img src="./img/Admin/Settings/Group 12.png" className='img-fluid pb-1' height='32' width='32' alt="" />
</Link>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3' style={{cursor:'pointer'}}>
<Link to='/admindashboardsettingsprivacypolicy' className="d-flex text-secondary justify-content-between text-decoration-none">
<h5>Privacy Policy</h5>
<img src="./img/Admin/Settings/Group 12.png" className='img-fluid pb-1' height='32' width='32' alt="" />
</Link>
</div>
            </div>
           
          </div>
          
        </div>
      </div>
        
      {/* <>
        <div className="overflow-hidden">
        <div className="row">
         
          <AdminSidebar/>
      
          <div className="col-md-10">
    
          <AdminHeader/>
            <div className='container-fluid my-4'>
              <h3 className='fw-bold'>My Settings</h3>
              <div className='row'>
              
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
        
        </> */}
        </>
  )
}

export default AdminDashboardSettings