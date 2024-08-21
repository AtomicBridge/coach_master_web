import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'

const AdminDashboardSquadPlayers = () => {
  const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'))

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
              <h1 className=''>Squad</h1>
              {userlogged === 'admin'? <Link to='/admindashboardsquad'><img src="./img/Admin/Notes/Caht icon (1).png" className='mx-md-5 mb-2' style={{cursor:'pointer'}} alt="" /></Link>: <></>}
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
              <div className="col-md-6 col-lg-3" key={index}>
              <div className="d-flex justify-content-center container mt-4">
                  <div className="card p-3 bg-white border-0 shadow rounded-4">
                      <div className="about-product text-center "><img className='img-fluid' src="./img/Admin/Squad/player.png" width="300" />
                          {/* <div>
      <h4>Believing is seeing</h4>
      <h6 className="mt-0 text-black-50">Apple pro display XDR</h6>
  </div> */}
                      </div>
                      <div className="stats mt-2">
                          <div className="d-flex justify-content-between p-price my-2"><Link to='/coachdashboardsquadplayerinfo' style={{ textDecoration: 'none',color:'black' }}><b>Andrew Ainsley</b></Link>
                          {userlogged === 'admin'?<div className='mt-1 position-relative'>
  <i className="fa-solid fa-lg fa-ellipsis-vertical " style={{cursor:'pointer'}}
    data-bs-toggle="dropdown"
    aria-expanded="false"></i>
  <ul className="dropdown-menu px-2 border-0 mt-2" style={{ left: '-100%' }}>
    <li><Link to='/admindashboardsquadeditplayer' className="dropdown-item border-bottom px-2 my-1" > <img className='mb-1 ' src="./img/Navbar/Edit.png" alt="" /> Edit </Link></li>
    <li><button className="dropdown-item  px-2 my-1" ><img className='mb-1' src="./img/courseinstructor/home/Delete.png" alt="" /> Delete</button></li>
   
  </ul>
</div>:<></>}
                          </div>
                          <div className="d-flex justify-content-between p-price mt-2 text-secondary">Goalkeeper</div>
                      </div>
                  </div>
              </div>
          </div>
         ))}
  
         
              </div>
              </div>
            </div>
           
          </div>
          
        </div>
      </div>
        
        </>
  )
}

export default AdminDashboardSquadPlayers