import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import LogIn from './Components/User/Authentication/LogIn';
import SignUp from './Components/User/Authentication/SignUp/SignUp';
import SignUpUploadProfile from './Components/User/Authentication/SignUp/SignUpUploadProfile';
import SignUpChooseSport from './Components/User/Authentication/SignUp/SignUpChooseSport';
import SignUpChooseField from './Components/User/Authentication/SignUp/SignUpChooseField';
import SignUpSuccessfull from './Components/User/Authentication/SignUp/SignUpSuccessfull';
import ForgotPassword from './Components/User/Authentication/ForgotPassword';
import ForgotPasswordOtp from './Components/User/Authentication/ForgotPasswordOtp';
import ForgotNewPassword from './Components/User/Authentication/ForgotNewPassword';
import ForgotPasswordSuccessfull from './Components/User/Authentication/ForgotPasswordSuccessfull';
import AdminDashboardHome from './Components/Admin/AdminDashboardHome';
import AdminDashboardProfile from './Components/Admin/AdminDashboardProfile';
import AdminDashboardSettings from './Components/Admin/AdminDashboardSettings';
import AdminDashboardMessages from './Components/Admin/AdminDashboardMessages';
import AdminDashboardNotes from './Components/Admin/AdminDashboardNotes';
import AdminDashboardNotesView from './Components/Admin/AdminDashboardNotesView';
import AdminDashboardNotesCreate from './Components/Admin/AdminDashboardNotesCreate';
import AdminDashboardSquad from './Components/Admin/AdminDashboardSquad';
import AdminDashboardSquadPlayers from './Components/Admin/AdminDashboardSquadPlayers';
import AdminDashboardSquadEditPlayer from './Components/Admin/AdminDashboardSquadEditPlayer';
import AdminDashboardYearPlanner from './Components/Admin/YearPlanner/AdminDashboardYearPlanner';
import AdminDashboardYearPlannerDetails from './Components/Admin/YearPlanner/AdminDashboardYearPlannerDetails';
import AdminDashboardYearPlannerMatchDay from './Components/Admin/YearPlanner/AdminDashboardYearPlannerMatchDay';
import AdminDashboardYearPlannerTrainingSession from './Components/Admin/YearPlanner/AdminDashboardYearPlannerTrainingSession';
import AdminDashboardExercises from './Components/Admin/AdminDashboardExercises';
import AdminDashboardSettingsChangePassword from './Components/Admin/Settings/AdminDashboardSettingsChangePassword';
import AdminDashboardSettingsHelpCenter from './Components/Admin/Settings/AdminDashboardSettingsHelpCenter';
import AdminDashboardSettingsAboutUs from './Components/Admin/Settings/AdminDashboardSettingsAboutUs';
import AdminDashboardSettingsTerms from './Components/Admin/Settings/AdminDashboardSettingsTerms';
import AdminDashboardSettingsPrivacyPolicy from './Components/Admin/Settings/AdminDashboardSettingsPrivacyPolicy';
import { useState } from 'react';
import CoachDashboardHome from './Components/Coach/CoachDashboardHome';
import CoachDashboardYearPlanner from './Components/Coach/YearPlanner/CoachDashboardYearPlanner';
import CoachDashboardSquadPlayerInfo from './Components/Coach/CoachDashboardSquadPlayerInfo';
import AdvisorYearPlannerDetailsField from './Components/Advisor/YearPlanner/AdvisorYearPlannerDetailsField';
import YearPlannerEditor from './Components/Admin/YearPlanner/YearPlannerEditor';

function App() {
  const [userlogged, setuserlogged] = useState(localStorage.getItem('loggedInUser'));
  console.log(userlogged);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              <Outlet />
              {/* <Footer /> */}
            </>
          }
        >
          <Route index element={<LogIn setuserlogged={setuserlogged}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupuploadprofile" element={<SignUpUploadProfile />} />
          <Route path="/signupchoosesport" element={<SignUpChooseSport/>} />
          <Route path="/signupchoosefield" element={<SignUpChooseField/>} />
          <Route path="/signupsuccessfull" element={<SignUpSuccessfull/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp/>} />
          <Route path="/forgotnewpassword" element={<ForgotNewPassword/>} />
          <Route path="/forgotpasswordsuccessfull" element={<ForgotPasswordSuccessfull/>} />
          <Route path="/yearplannereditor" element={<YearPlannerEditor/>} />

{/* Admin Dashboard */}
{userlogged === 'admin' && <>
<Route path="/admindashboardhome" element={<AdminDashboardHome />} />
<Route path="/admindashboardnotes" element={<AdminDashboardNotes />} />
<Route path="/admindashboardnotesview" element={<AdminDashboardNotesView />} />
<Route path="/admindashboardnotescreate" element={<AdminDashboardNotesCreate />} />
<Route path="/admindashboardsquad" element={<AdminDashboardSquad />} />
<Route path="/admindashboardsquadeditplayer" element={<AdminDashboardSquadEditPlayer />} />
<Route path="/admindashboardyearplanner" element={<AdminDashboardYearPlanner />} />
<Route path="/admindashboardyearplannerdetails" element={<AdminDashboardYearPlannerDetails />} />
<Route path="/admindashboardexercises" element={<AdminDashboardExercises />} />
</>}

{/* Coach Dashboard */}
{(userlogged === 'coach' || userlogged === 'advisor') && <>
<Route path="/coachdashboardhome" element={<CoachDashboardHome />} />
<Route path="/coachdashboardyearplanner" element={<CoachDashboardYearPlanner />} />

</>}
{/* Advisor Dashboard */}
{userlogged === 'advisor' && <>
  <Route path="/advisoryearplannerdetailsfield" element={<AdvisorYearPlannerDetailsField />} />
  </>}
  {(userlogged === 'admin' || userlogged === 'coach' || userlogged === 'advisor') && <>
    <Route path="/admindashboardsquadplayers" element={<AdminDashboardSquadPlayers />} />
    <Route path="/coachdashboardsquadplayerinfo" element={<CoachDashboardSquadPlayerInfo />} />
    <Route path="/admindashboardyearplannermatchday" element={<AdminDashboardYearPlannerMatchDay />} />
<Route path="/admindashboardyearplannertrainingsession" element={<AdminDashboardYearPlannerTrainingSession />} />
<Route path="/admindashboardprofile" element={<AdminDashboardProfile />} />
<Route path="/admindashboardsettings" element={<AdminDashboardSettings />} />
<Route path="/admindashboardsettingschangepassword" element={<AdminDashboardSettingsChangePassword />} />
<Route path="/admindashboardsettingshelpcenter" element={<AdminDashboardSettingsHelpCenter />} />
<Route path="/admindashboardsettingsaboutus" element={<AdminDashboardSettingsAboutUs />} />
<Route path="/admindashboardsettingsterms" element={<AdminDashboardSettingsTerms />} />
<Route path="/admindashboardsettingsprivacypolicy" element={<AdminDashboardSettingsPrivacyPolicy/>} />
<Route path="/admindashboardmessages" element={<AdminDashboardMessages />} />
</>}
        </Route>
        {/* <Route path="/login" element={<Login setuserlogged={setuserlogged}/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
