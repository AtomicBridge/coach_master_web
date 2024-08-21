import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'

const AdminDashboardExercises = () => {
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
            <div className='container-fluid my-4 '>
              <h2 className='mx-md-5' style={{fontSize:'36px'}}>Select Month</h2>
              <div className='row mx-md-5'>
      {[...Array(6)].map((_, index) => (
        <div className='col-lg-4 col-md-5 col-12'>
        <Link
          key={index}
          to=''
          className="card border-0 mb-2 shadow rounded-4 my-3 month-link"
        >
          <img
            className="card-img-top pt-2 px-2 "
            src="./img/Admin/Exercise/Group 175 (cut).png"
            alt="Card image cap"
          />
          <div className="card-body rounded-bottom-4" style={{ backgroundColor: "#D9D9D9" }}>
            <h5 className="card-title">Exercise Name</h5>
            <div>
            <div className="d-flex justify-content-start">
                <img src="./img/Admin/Exercise/Group 1686554295av.png" alt="" className='' width='20' height='20' />
                <p className='mx-2'>10-15 Players</p>
            </div>
            <div className="d-flex justify-content-start">
                <img src="./img/Admin/Exercise/icon-park-outline_time.png" alt="" className='my-0' width='20' height='20' />
                <p className='mx-2 my-0'>0:15</p>
            </div>
            </div>
          </div>
        </Link>
      </div>
      ))}
    </div>
            </div>
           
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default AdminDashboardExercises