import React, { useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'
import { Link } from 'react-router-dom';

const AdminDashboardYearPlannerTrainingSession = () => {
  const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))
  const getRedirectPath = () => {
    if (userlogged === 'admin') {
      return '/yearplannereditor';
    } else if (userlogged === 'coach') {
      return '/yearplannereditor';
    } else {
      return '/advisoryearplannerdetailsfield';
    }
  };
  const renderStars = (value) => {
    // console.log(value)
    const fullStars = Math.floor(value); 
    const remainingStars = 5 - fullStars; 
    const stars = [];
  
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} class="fa-solid fa-star" style={{color: '#FFD43B'}}></i>);
    }
  
    // Add remaining stars
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={fullStars + i} class="fa-regular fa-star" style={{color: '#FFD43B'}}></i>);
    }
  
    return stars;
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
            <div className='container-fluid my-4'>
              {/* <h3 className='fw-bold'>My Training Session</h3> */}
              <div className='row'>
              <div className="col-md-5 mx-md-4">
<div className="row">
<div className="col-md-6">
<h2 className='py-1 mt-3 mt-md-0'>01 Jan</h2>
<h2 className='py-1 mt-3 mt-md-0'>Monday</h2>

                </div>
                <div className="col-md-6">
                <div className='rounded-4 p-3' style={{border:'2px solid black'}}>
                <h5 className='py-1 mt-3 mt-md-0'>Number: 10</h5>
                <h5 className='py-1 mt-3 mt-md-0'>Main emphasis: Focus</h5>
                </div>
     
              </div>
</div>
<div className='mt-3'>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 '>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
</div>
<div className="row">
<div className="col-6 col-md-4">
<Link to={getRedirectPath()}><img className=' mt-3' src="./img/Admin/YearPlanner/TrainingSession/Group.png" width='170' alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-8">
                  <div className='mt-3'>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 '>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<p className="text-end" style={{fontSize:'20px'}}> {renderStars(2)}</p>
</div>
                  </div>
              </div>
              <div className="row">
<div className="col-6 col-md-4">
<Link to={getRedirectPath()}><img className=' mt-3' src="./img/Admin/YearPlanner/TrainingSession/Group.png" width='170' alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-8">
                  <div className='mt-3'>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 '>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<p className="text-end" style={{fontSize:'20px'}}> {renderStars(5)}</p>
</div>
                  </div>
              </div>
              </div>
              
              <div className="col-md-5 ">
              <div className="row">
<div className="col-6 col-md-4">
<Link to={getRedirectPath()}><img className=' mt-3' src="./img/Admin/YearPlanner/TrainingSession/Group.png" width='170' alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-8">
                  <div className='mt-3'>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 '>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<p className="text-end" style={{fontSize:'20px'}}> {renderStars(3)}</p>
</div>
                  </div>
              </div>
              <div className="row">
<div className="col-6 col-md-4">
<Link to={getRedirectPath()}><img className=' mt-3' src="./img/Admin/YearPlanner/TrainingSession/Group.png" width='170' alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-8">
                  <div className='mt-3'>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 '>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<p className="text-end" style={{fontSize:'20px'}}> {renderStars(5)}</p>
</div>
                  </div>
              </div>
              <h3 className='py-1 mt-4 mb-3 fw-bold'>Organization</h3>
              <div className="row">
<div className="col-6 col-md-4">
<Link to={getRedirectPath()}><img className=' mt-3' src="./img/Admin/YearPlanner/TrainingSession/Group 175.png"  alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-8">
                  <div className='mt-3'>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 '>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-2 pb-1 px-3 rounded-4 my-2'>
<h5>Any Note...</h5>
</div>
<div className="container ">
<div className="mt-5 d-flex justify-content-end">
  <div className="row w-auto mt-5">
    
      <Link
        type="button"
        to='/admindashboardyearplanner'
        className="btn btn-success rounded-pill px-5 mx-3 py-2 mt-3 shadow w-100"
      >
        Done
      </Link>
    
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
          
        </div>
      </div>
    
    </>
  )
}

export default AdminDashboardYearPlannerTrainingSession