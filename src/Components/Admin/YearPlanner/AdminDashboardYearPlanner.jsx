import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'
import { Link } from 'react-router-dom';
import './adminyearplanner.css';
const AdminDashboardYearPlanner = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
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
      {months.map((month, index) => (
        <div className='col-lg-4 col-md-5 col-12'> 
        <Link 
        key={index} 
        to={`/admindashboardyearplannerdetails?monthIndex=${index+1}`} 
        className=" p-4 mb-2 shadow rounded-4  my-3 d-flex align-items-center justify-content-center text-center month-link">
        <h4>{month}</h4>
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

export default AdminDashboardYearPlanner