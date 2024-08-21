import React from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'

const AdminDashboardSettingsHelpCenter = () => {
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
            <h2 className=''>Help Center</h2>
              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 col-md-8 justify-content-center">
  
  <form className='set-login-width mt-md-5'>
  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Name</label>
    <input type="text" id="form2Example18" value='Amish Sabir' class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
<div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Email</label>
    <input type="email" id="form2Example18" value='amishsabir2@gmail.com' class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
<div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Subject</label>
    <input type="text" id="form2Example18" value='I want to confirm meeting' class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>

          <div className="mb-4 mt-5 mx-auto">
                            <Link to='/admindashboardhome' type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Done</Link>
                          </div>


  </form>

</div>

            </div>
           
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default AdminDashboardSettingsHelpCenter