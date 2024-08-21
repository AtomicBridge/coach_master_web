import React from 'react'
import AdminSidebar from '../Admin/AdminSidebar'
import AdminHeader from '../Admin/AdminHeader'
import { Link } from 'react-router-dom'

const CoachDashboardSquadPlayerInfo = () => {
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
            <h2 className=''>Player Info</h2>
              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 col-md-8 justify-content-center">
  
  <form className='set-login-width mt-md-3'>

<div className="text-center mb-2 mt-md-3 position-relative">
                      <img src="./img/user/profile/Frame 1686554350.png" alt="avatar" className="rounded-circle img-fluid" width="200" style={{ width: '200px', height: '200px' }} />
                      
                  </div>
                  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Player Name</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" value='Andrew' style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
<div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Player Position</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" value='Goalkeeper' style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
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

export default CoachDashboardSquadPlayerInfo