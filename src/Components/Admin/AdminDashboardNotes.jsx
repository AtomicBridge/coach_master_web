import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'

const AdminDashboardNotes = () => {
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
            <div className=' my-4 col-md-10'>
              <div className="container mx-md-5">
              <div className="d-flex justify-content-between">
              <h1 className=''>Notes</h1>
              <Link to='/admindashboardnotescreate'><img src="./img/Admin/Notes/Caht icon (1).png" className='mx-md-5 mb-2' style={{cursor:'pointer'}} alt="" /></Link>
              </div>
              {/* <div className=' mx-5 pb-4 ' >
            <div className=" " >
            <div className=''>
            
            <div  className=" d-flex justify-content-center">
            <img src="./img/Admin/Notes/7182231_3582363 1 (1).png" alt="" className='img-fluid' />
            </div>
            <h4 className='fw-bold text-center'>No Notes Yet</h4>
            <div  className=" d-flex justify-content-center">
            <h5 className='text-center col-md-6 mt-3'>Lorem ipsum dolor sit amet consectetur. Nascetur euismod hac dictum accumsan turpis orci nunc.</h5>
            </div>
            <div className="mb-2 d-flex justify-content-center mt-4 " >
                            <button type='button' className="btn btn-success rounded-pill mx-2 py-2 shadow " style={{height:'45px',width:'40%'}}>Create</button>
                          </div>
                          
            </div>
            </div>
        </div> */}
        
              <div className='row'>
              {[...Array(10)].map((_, index) => (
              <div className="col-md-6 my-3" key={index}>
                <div className=" bg-light mx-1  rounded-5 py-3">
                <div className="d-flex justify-content-between px-2">
                <div className="d-flex justify-content-center">
                <img className='mt-2 mx-2' src="./img/Admin/Notes/notes.png" alt="" style={{height:'40px',width:'40px'}}/>
                <h5 className='my-3 mx-0'>Notes </h5>
                </div>
                <Link to='/admindashboardnotesview'>
                <img className=' p-3 img-fluid' src="./img/Admin/Notes/Group 1686553907Arrow - Down 2.png" alt="" />
                </Link>
                
                </div>
                </div>
            </div> ))}
  
         
              </div>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
        
        </>
  )
}

export default AdminDashboardNotes