import React, { useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'
import { Link, useNavigate } from 'react-router-dom'

const AdminDashboardSettingsChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const toggleConfirmNewPasswordVisibility = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };
    const handlePassword = () => {
        if ( confirmPassword === confirmNewPassword) 
        {
            navigate('/admindashboardhome')
        }
else
{
    alert("Confirm New Password Not Match...!")
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
            <div className='container my-4'>
            <h2 className=''>Change Password</h2>
              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 col-md-8 justify-content-center">
  
  <form className='set-login-width mt-md-5'>
  <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label font-600" htmlFor="form2Example28">Current Password</label>
            <div className="input-group">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="form2Example28"
                    className="form-control form-control-sm border-0 border-bottom"
                    style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div
                    className="border-0 border-bottom px-1"
                    type="button"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                </div>
            </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label font-600" htmlFor="form2Example28">New Password</label>
            <div className="input-group">
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="form2Example28"
                    className="form-control form-control-sm border-0 border-bottom"
                    style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                    className="border-0 border-bottom px-1"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                >
                    {showConfirmPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                </div>
            </div>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label font-600" htmlFor="form2Example28">Confirm Password</label>
            <div className="input-group">
                <input
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    id="form2Example28"
                    className="form-control form-control-sm border-0 border-bottom"
                    style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <div
                    className="border-0 border-bottom px-1"
                    type="button"
                    onClick={toggleConfirmNewPasswordVisibility}
                >
                    {showConfirmNewPassword ? <i class="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                </div>
            </div>
        </div>

          <div className="mb-4 mt-5 mx-auto">
                            <button type='button' onClick={handlePassword} className="btn btn-success rounded-pill px-5 py-2 shadow w-100">Continue</button>
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

export default AdminDashboardSettingsChangePassword