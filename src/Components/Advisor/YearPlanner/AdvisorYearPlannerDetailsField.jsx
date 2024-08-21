import React from 'react'
import AdminSidebar from '../../Admin/AdminSidebar'
import AdminHeader from '../../Admin/AdminHeader'

const AdvisorYearPlannerDetailsField = () => {
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
         
          <AdminSidebar/>
      
          <div className="col-md-10">
    
          <AdminHeader/>
            <div className='container my-3'>
              {/* <h3 className='fw-bold'>My Settings</h3> */}
              <div className="d-flex justify-content-md-end justify-content-center mx-auto">
  <img src="./img/Advisor/Entire Field (2).png" className="img-fluid" alt="Right Aligned Image" />
</div>

              <div className="row px-md-5 my-3">
<div className="col-12 col-md-6 col-lg-4 ">
<img className=' mt-3 d-flex  justify-content-center mx-auto' src="./img/Advisor/Group 175 (2).png"  alt="" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-8">
                  <div className='mt-5'>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3'>
<h4>Heading Here...</h4>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3'>
<h5>Any Note...</h5>
</div>
<div className='bg-light pt-3 pb-2 px-3 rounded-5 my-3'>
<h5>Any Note...</h5>
</div>
<p className="text-end" style={{fontSize:'20px'}}> {renderStars(5)}</p>
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

export default AdvisorYearPlannerDetailsField