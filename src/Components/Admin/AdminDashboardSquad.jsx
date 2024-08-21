import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom';

const AdminDashboardSquad = () => {
    const [avatar, setAvatar] = useState(null);

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setAvatar(reader.result);
          };
          reader.readAsDataURL(file);
      }
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
              {/* <h3 className='fw-bold'>My Squad</h3> */}
              {/* <div className=' mx-5 pb-4 ' >
            <div className=" " >
            <div className=''>
            
            <div  className=" d-flex justify-content-center">
            <img src="./img/Admin/Notes/7182231_3582363 1 (1).png" alt="" className='img-fluid' />
            </div>
            <h4 className='fw-bold text-center'>No Player Yet</h4>
            <div  className=" d-flex justify-content-center">
            <h5 className='text-center col-md-6 mt-3'>Lorem ipsum dolor sit amet consectetur. Nascetur euismod hac dictum accumsan turpis orci nunc.</h5>
            </div>
            <div className="mb-2 d-flex justify-content-center mt-4 " >
                            <button type='button' className="btn btn-success rounded-pill mx-2 py-2 shadow " style={{height:'45px',width:'40%'}}>Add Player</button>
                          </div>
                          
            </div>
            </div>
        </div> */}
              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 col-md-8 justify-content-center">
  
  <form className='set-login-width mt-md-3'>

  <h3 className=" mb-1 pb-3 text-center font-600" style={{ letterSpacing: "1px" }}>Add Player</h3>
<p className=" mb-2 pb-3 text-center text-secondary" >Create Your Squad!</p>
<div className="text-center mb-2 mt-md-3 position-relative">
                      <img src={avatar ||"./img/user/login/image 114.png"} alt="avatar" className="rounded-circle img-fluid" width="200" style={{ width: '200px', height: '200px' }} />
                      <div className="position-absolute bottom-0 start-50 translate-middle-x " style={{marginLeft:'17.5%'}}>
                          <label htmlFor="avatarInput" className="btn btn-link">
                              <img src="./img/user/login/Edit-Square.png" alt="" />
                          </label>
                          <input type="file" id="avatarInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileInputChange} />
                      </div>
                  </div>
                  <div data-mdb-input-init class="form-outline mb-4">
    <label class="form-label font-600" for="form2Example18">Player Name</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
<div className="form-outline mb-4">
  <label className="form-label font-600" htmlFor="form2Example18">
    Select Position
  </label>
  <select
    id="form2Example18"
    className="form-control form-control-sm border-0 border-bottom"
    style={{
      border: "2px solid #C1C1C1",
      borderRadius: "0",
      appearance: "none",
      background: "url('./img/Admin/Squad/Arrow - Left 2.png') no-repeat right center",
    //   backgroundSize: "16px 12px",
      paddingRight: "24px"
    }}
  >
    <option value="" disabled selected>Select a position</option>
    <option value="goalkeeper">Goalkeeper</option>
    <option value="sweeper">Sweeper</option>
    <option value="defender">Defender</option>
    <option value="midfielder">Midfielder</option>
    <option value="winger">Winger</option>
    <option value="striker">Striker</option>
    <option value="attacking-midfielder">Attacking Midfielder</option>
    <option value="defensive-midfielder">Defensive Midfielder</option>
  </select>
</div>


  </form>

</div>
<div className="container ">
<div className="mt-5 d-flex justify-content-end">
  <div className="row w-auto mt-5">
    <div className="col-md-6">
      <button
        type="button"
        className="btn btn-outline-success rounded-pill px-3 mx-3 mt-3 py-2 w-100 shadow"
      >
        Add Another player
      </button>
    </div>
    <div className="col-md-6">
      <Link
        type="button"
        to='/admindashboardsquadplayers'
        className="btn btn-success rounded-pill px-5 mx-3 py-2 mt-3 shadow w-100"
      >
        Add
      </Link>
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

export default AdminDashboardSquad