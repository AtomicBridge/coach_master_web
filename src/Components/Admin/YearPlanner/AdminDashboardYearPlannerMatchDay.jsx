import React, { useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'
import { Link } from 'react-router-dom';

const AdminDashboardYearPlannerMatchDay = () => {
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
  // const [players, setPlayers] = useState([{ name: '', jersey: '' }]);

  // const addPlayer = () => {
  //   if (players.length < 10) {
  //     setPlayers([...players, { name: '', jersey: '' }]);
  //   }
  // };

  // const handleChange = (index, field, value) => {
  //   const updatedPlayers = players.map((player, i) => {
  //     if (i === index) {
  //       return { ...player, [field]: value };
  //     }
  //     return player;
  //   });
  //   setPlayers(updatedPlayers);
  // };
  const inputFields = Array.from({ length: 10 });
  const benchInputFields = Array.from({ length: 15 });
  return (
    <>
    <div className="overflow-hidden">
        <div className="row ">
          {/* Sidebar */}
          <AdminSidebar/>
          {/* Main Content */}
          <div className="col-md-10 ">
          {/* Header */}
          <AdminHeader/>
            <div className='container-fluid my-4 mx-md-2'>
              {/* <h3 className='fw-bold'>My Messages</h3> */}
              <div className='row '>
              
              <div className="col-md-3 col-lg-2 my-2">
<div className='shadow px-2 py-2 matchdayyearplannercardcolor rounded-4 '>
  <h4 className='py-1'>Match Day</h4>
  <h5 className='py-3'>Sunday</h5>
</div>
              </div>
              <div className="col-md-3 col-lg-2 my-2">
<div className='shadow px-2 py-2 matchdayyearplannercardcolor rounded-4 '>
  <h4 className='py-1'>Date</h4>
  <h5 className='py-3'>12-Dec-2024</h5>
</div>
              </div>
              <div className="col-md-3 col-lg-2 my-2">
<div className='shadow px-2 py-2 matchdayyearplannercardcolor rounded-4 '>
  <h4 className='py-1'>Match Day</h4>
  <h5 className='py-3'>Sunday</h5>
</div>
              </div>
              <div className="col-md-3 col-lg-2 my-2">
<div className='shadow px-2 py-2 matchdayyearplannercardcolor rounded-4 '>
  <h4 className='py-1'>Match Day</h4>
  <h5 className='py-3'>Sunday</h5>
</div>
              </div>
              <div className="col-md-3 col-lg-2 my-2">
<div className='shadow px-2 py-2 matchdayyearplannercardcolor rounded-4 '>
  <h4 className='py-1'>Match Day</h4>
  <h5 className='py-3'>Sunday</h5>
</div>
              </div>
              
              </div>
              <div className="row">
                <div className="col-md-6">
                <h2 className='py-1 mt-3 mt-md-0'>Line up</h2>
                <div className="row">
                  <div className="col-6 col-md-6">
<Link to={getRedirectPath()}><img className='img-fluid' src="./img/Admin/YearPlanner/MatchDay/Group 175.png" alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-5">
{inputFields.map((_, index) => (<div key={index} data-mdb-input-init class="form-outline mb-2">
    <label class="form-label font-600 mb-0" for="form2Example18">Player Name& Jersey NO</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>))}
                  {/* Here we can add playes according to our marzi */}
    {/* <div>
      {players.map((player, index) => (
        <div key={index} data-mdb-input-init className="form-outline mb-4">
          <label className="form-label font-600" htmlFor={`player${index}`}>
            Player Name & Jersey NO
          </label>
          <input
            type="text"
            id={`player${index}`}
            className="form-control form-control-sm border-0 border-bottom"
            style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
            value={player.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            placeholder="Player Name"
          />
          <input
            type="text"
            id={`jersey${index}`}
            className="form-control form-control-sm border-0 border-bottom mt-2"
            style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
            value={player.jersey}
            onChange={(e) => handleChange(index, 'jersey', e.target.value)}
            placeholder="Jersey NO"
          />
        </div>
      ))}
      {players.length < 10 && (
        <button type="button" className="btn btn-primary" onClick={addPlayer}>
          Add Player
        </button>
      )}
    </div> */}
                  </div>
                </div>
                <div>
                <div className="d-flex justify-content-between mt-3">
                <div className='d-flex justify-content-center'>
                <img src="./img/Admin/YearPlanner/MatchDay/Group 1686554296mingcute_bank-line.png" className='mt-1' width='24' height='24' alt="" />

                <h3 className=' mx-2 ' style={{fontSize:'26px'}}>Bench</h3>
                </div>
                <div className='d-flex justify-content-center'>
                <img src="./img/Admin/YearPlanner/MatchDay/mdi_3d-rotation.png" className='mt-1' width='24' height='24' alt="" />

                <h3 className=' mx-2 ' style={{fontSize:'26px'}}>Change</h3>
                </div>
                </div>
                <div className="row my-3">
                {benchInputFields.map((_, index) => (
                    <div className="col-md-4 col-6" key={index}>
                      <div  data-mdb-input-init class="form-outline mb-2">
    <label class="form-label font-600 mb-0" for="form2Example18">Player Name</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
                    </div>
                  ))}
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <h2 className='py-1 mt-3 mt-md-0'>Standards</h2>
                <div className="row">
                  <div className="col-6 col-md-6">
                  <Link to={getRedirectPath()}><img className='img-fluid' src="./img/Admin/YearPlanner/MatchDay/Frame 1686554899.png" alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-6">
                  <Link to={getRedirectPath()}><img className='img-fluid' src="./img/Admin/YearPlanner/MatchDay/Frame 1686554899.png" alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-6">
                  <Link to={getRedirectPath()}><img className='img-fluid' src="./img/Admin/YearPlanner/MatchDay/Frame 1686554899.png" alt="" /></Link>
                  </div>
                  <div className="col-6 col-md-6">
                  <Link to={getRedirectPath()}><img className='img-fluid' src="./img/Admin/YearPlanner/MatchDay/Frame 1686554899.png" alt="" /></Link>
                  </div>
                  </div>
                  
                    
                    <h3 className='py-1 my-4'>Opponent Goals</h3>
                    <div className="row ">
                    <div className="col-5 col-md-3 ">
                    <Link to={getRedirectPath()}><img className='img-fluid' src="./img/Admin/YearPlanner/MatchDay/Group 48095842.png" alt="" /></Link>
                  </div>
                  <div className="col-7 col-md-8 ">
                  <div className="row">
                  {inputFields.map((_, index) => (
                    <div className="col-md-6" key={index}>
                      <div  data-mdb-input-init class="form-outline mb-2">
    <label class="form-label font-600 mb-0" for="form2Example18">Player Name & NO. Goals</label>
    <input type="text" id="form2Example18" class="form-control form-control-sm border-0 border-bottom" style={{border: "2px solid #C1C1C1", borderRadius: "0"}} />
</div>
                    </div>
                  ))}
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
    
    </>
  )
}

export default AdminDashboardYearPlannerMatchDay