import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'

const AdminDashboardNotesCreate = () => {
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
              {/* <h3 className='fw-bold'>My Notes view</h3> */}
              <main className="content"  >
    <div className=" p-0">

	

		<div className="card rounded-4" style={{maxHeight:'664px'}}>
			<div className="row g-0">
				<div className="col-12 col-md-6 p-2">

				<div className='left-create-notes'>

				<div  className=" mx-3 my-2 rounded-5 py-3" style={{backgroundColor:'#34920a', color:'white'}}>
                <div className="d-flex justify-content-between px-2">
                <div className="d-flex justify-content-center">
                <img className='mt-2 mx-2' src="./img/Admin/Notes/whitenotes.png" alt="" style={{height:'40px',width:'40px'}}/>
                <h5 className='my-3 mx-0'>Notes </h5>
                </div>
                
                <img className=' p-3 img-fluid' src="./img/Admin/Notes/whitearrow .png" alt="" />
               
                
                </div>
                </div>
				</div>
					
					
				</div>
				<div className="col-12 col-md-6">
  <div>
    <div className="position-relative">
      <div className="p-4">
        {/* Add a textarea for note creation */}
        <textarea
          className="form-control notes-view border-0"
          rows="25"
          placeholder="Write your note here..."
          style={{ width: '100%', borderRadius: '8px', resize: 'none' }}
        ></textarea>
      </div>
    </div>
  </div>
</div>


			</div>
		</div>
	</div>
</main>
<div className="mt-4 d-flex justify-content-end">
  <div className="row w-auto mx-3">
    
    <div className="col-md-12 mx-3">
      <button
        type="button"
        className="btn btn-success rounded-pill px-5 mx-3 py-2 shadow w-100"
      >
        Save
      </button>
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

export default AdminDashboardNotesCreate