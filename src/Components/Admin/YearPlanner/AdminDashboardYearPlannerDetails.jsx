import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import './adminyearplanner.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminDashboardYearPlannerDetails = () => {
  const navigate = useNavigate();
  const [hashtags, setHashtags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [selectedVenue, setSelectedVenue] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [formattedFromTime, setFormattedFromTime] = useState('');
  const [formattedToTime, setFormattedToTime] = useState('');
  const [dayEvent, setDayEvent] = useState('Match Day');

  const handleFromTimeChange = (e) => {
    const time = e.target.value;
    setFromTime(time);

    const [hours, minutes] = time.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes} ${period}`;
    setFormattedFromTime(formattedTime);
  };
  const handleToTimeChange = (e) => {
    const time = e.target.value;
    setToTime(time);

    const [hours, minutes] = time.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes} ${period}`;
    setFormattedToTime(formattedTime);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      if (hashtags.length < 3 && !hashtags.includes(inputValue.trim())) {
        setHashtags([...hashtags, inputValue.trim()]);
        setInputValue('');
      }
    }
  };

  const removeHashtag = (index) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const exercises = [
    'Body pushing', 'Squats', 'Deadlift variations', 'Bench pressing', 'Dumbbell rows', 'TRX variations',
    'Vertical pushing', 'Pull-downs'
  ];

  const [selectedExercises, setSelectedExercises] = useState([]);
  const handleExerciseClick = (exercise) => {
    if (hashtags.includes(exercise)) {
      setHashtags(hashtags.filter((e) => e !== exercise));
    } else if (hashtags.length < 3) {
      setHashtags([...hashtags, exercise]);
    }
  };

  const daysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate(); // month is already 1-based here
};
const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    return (firstDay === 0 ? 6 : firstDay - 1); // Shift Sunday (0) to the end of the week (6)
};
  

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const monthIndexFromUrl = queryParams.get('monthIndex');
  const [showModalSelectEvent, setShowModalSelectEvent] = useState(false);
  const [showModalMatchDay, setShowModalMatchDay] = useState(false);
  const [showModalMatchDayNote, setShowModalMatchDayNote] = useState(false);
  const [showModalMatchDayEdit, setShowModalMatchDayEdit] = useState(false);

  const [showModalTrainingSession, setShowModalTrainingSession] = useState(false);
  const [showModalTrainingSessionExercise, setShowModalTrainingSessionExercise] = useState(false);
  const [showModalTrainingSessionNote, setShowModalTrainingSessionNote] = useState(false);

  const [monthIndex, setMonthIndex] = useState(monthIndexFromUrl);
  const [days, setDays] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [notes, setNotes] = useState({});
  const [totalPlayers, settotalPlayers] = useState('');
  const [mainEmphasis, setmainEmphasis] = useState('');
  useEffect(() => {
    if (monthIndexFromUrl) {
      setMonthIndex(parseInt(monthIndexFromUrl));
    }
  }, [monthIndexFromUrl]);

  useEffect(() => {
    if (monthIndex !== null) {
      const daysCount = daysInMonth(year, monthIndex);
      const firstDay = getFirstDayOfMonth(year, monthIndex);
      const emptyDays = Array.from({ length: firstDay }, () => null);
      const monthDays = Array.from({ length: daysCount }, (_, i) => i + 1);
      setDays([...emptyDays, ...monthDays]);
    }
  }, [monthIndex, year]);

  const incrementYear = () => {
    setYear(prevYear => prevYear + 1);
  };

  const decrementYear = () => {
    setYear(prevYear => prevYear - 1);
  };

  const handleDayClick = (day) => {
    const noteKey = `${year}-${monthIndex}-${day}`;
    if (notes[noteKey]) {
      // alert('You have already added a note for this day.');
      // return;
      if(notes[noteKey]?.dayEvent === 'Match Day'){
        setShowModalMatchDayNote(true);
      return;
      }
      else if (notes[noteKey]?.dayEvent === 'Training Session'){
        // alert('You have already added ');
        setShowModalTrainingSessionNote(true);
        return;
      }
    }
    setSelectedDay(day);
    setShowModalSelectEvent(true);
  };
  const createMatchDay = () => {
    setShowModalMatchDay(true);
    setShowModalSelectEvent(false);
    setDayEvent('Match Day');
  };
  const createTrainingSession = () => {
    setShowModalTrainingSession(true);
    setShowModalSelectEvent(false);
    setDayEvent('Training Session');
  };
  const handleSelectExercises = () => {
    setShowModalTrainingSession(false);
    setShowModalTrainingSessionExercise(true);
    setDayEvent('Training Session');
  };
  const handleOpenMatchDayEdit = () => {
    setShowModalMatchDayEdit(true);
    setShowModalMatchDayNote(false);
    setDayEvent('Match Day');
  };
  const handleOpenMatchDayEditYearPlanner = () => {
    navigate('/admindashboardyearplannermatchday');
    setDayEvent('Match Day');
  };
  const handleOpenTrainingSessionEditYearPlanner = () => {
    navigate('/admindashboardyearplannertrainingsession'); 
    setDayEvent('Match Day');
  };
  const handleSaveNoteMatchDay = () => {
    const noteKey = `${year}-${monthIndex}-${selectedDay}`;
    

    const note = {
      dayEvent,
      formattedFromTime,
      formattedToTime,
      selectedVenue,
    };
    setNotes(prevNotes => ({
      ...prevNotes,
      [noteKey]: note
    }));
    setShowModalMatchDay(false);
    setShowModalSelectEvent(false);
    setFromTime('');
    setFormattedFromTime('');
    setToTime('');
    setFormattedToTime('');
    setSelectedVenue([]);
    setInputValue('');
    // navigate('/admindashboardyearplannermatchday');
  };
  const handleSaveNoteTrainingSession = () => {
    const noteKey = `${year}-${monthIndex}-${selectedDay}`;
    

    const note = {
      dayEvent,
      formattedFromTime,
      formattedToTime,
      hashtags,
    };
    setNotes(prevNotes => ({
      ...prevNotes,
      [noteKey]: note
    }));
    setShowModalTrainingSessionExercise(false);
    setShowModalSelectEvent(false);
    setFromTime('');
    setFormattedFromTime('');
    setToTime('');
    setFormattedToTime('');
    setHashtags([]);
    // setSelectedExercises([])
    setInputValue('');
  };
  const handleCloseModalSelectEvent = () => {
    setShowModalSelectEvent(false);
  };
  const handleCloseModalMatchDay = () => {
    setShowModalMatchDay(false);
  };
  const handleCloseModalMatchDayNote = () => {
    setShowModalMatchDayNote(false);
  };
  const handleCloseModalMatchDayEdit = () => {
    setShowModalMatchDayEdit(false);
  };
  const handleCloseModalTrainingSession = () => {
    setShowModalTrainingSession(false);
  };
  const handleCloseModalTrainingSessionExercise = () => {
    setShowModalTrainingSessionExercise(false);
  };
  const handleCloseModalTrainingSessionNote = () => {
    setShowModalTrainingSessionNote(false);
  };
  return (
    <>
      <div className="overflow-hidden">
        <div className="row">
          <AdminSidebar />
          <div className="col-md-10">
            <AdminHeader />
            <div className='container my-4'>
              <div className="d-flex justify-content-between">
                <h4 className='my-3 text-default fw-bold'>Year {year}</h4>
                <div className="d-flex justify-content-center">
                  <div onClick={decrementYear}><img src="./img/Admin/YearPlanner/Button.png" className='img-fluid mb-2' style={{ cursor: 'pointer' }} alt="" /></div>
                  <div onClick={incrementYear}><img src="./img/Admin/YearPlanner/Button (1).png" className='img-fluid mb-2' style={{ cursor: 'pointer' }} alt="" /></div>
                </div>
              </div>
              <div className='row mx-1 mx-md-0'>
                {months.map((month, index) => (
                  <div className='col-lg-4 col-md-5 col-12' key={index}>
                    <Link
                      to={`/admindashboardyearplannerdetails?monthIndex=${index+1}`}
                      className={`px-2 shadow rounded-3 m-2 d-flex align-items-center justify-content-center text-center month-link ${monthIndex === index+1 ? 'selected-month' : ''}`}
                    >
                      <h4 className='pt-2'>{month}</h4>
                    </Link>
                  </div>
                ))}
              </div>
              <div className='calendar mt-4'>
              <div className='calendar-header text-center fw-bold'>
  <div>Mon</div>
  <div>Tue</div>
  <div>Wed</div>
  <div>Thu</div>
  <div>Fri</div>
  <div>Sat</div>
  <div>Sun</div>
</div>
                <div className='calendar-body'>
                  {days.map((day, index) => (
                    <div 
                      key={index} 
                      className={`calendar-day p-2 ${day !== null && notes[`${year}-${monthIndex}-${day}`] ? 'note-added' : ''}`} 
                      onClick={() => day !== null && handleDayClick(day)}
                      style={{ cursor: day !== null ? 'pointer' : 'default' }}
                    >
                      <div className="day-number">{day !== null ? day : ''}</div>
                      {day !== null && notes[`${year}-${monthIndex}-${day}`] && (
                        <>
                        <div className="note">
                          <div className='day-event-font'>{notes[`${year}-${monthIndex}-${day}`].dayEvent}</div>
                          <div>{notes[`${year}-${monthIndex}-${day}`].formattedFromTime} - {notes[`${year}-${monthIndex}-${day}`].formattedToTime}</div>
                          <div>
                            {notes[`${year}-${monthIndex}-${day}`].hashtags && notes[`${year}-${monthIndex}-${day}`].hashtags.map((hashtag, index) => (
                              <span key={index} className=""> #{hashtag} </span>
                            ))}
                          </div>
                          <div>Venue: {notes[`${year}-${monthIndex}-${day}`].selectedVenue}</div>
                        </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalSelectEvent && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-lg w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalSelectEvent}
                    />
                    
                    <div className="d-flex flex-column align-items-center justify-content-center mx-auto w-100 py-4">
                      <img src="./img/Admin/YearPlanner/7182231_3582363 1 (2).png" alt="" />
  <h4 className="mt-3 mb-2 text-center">
    <b>No Events Yet</b>
  </h4>
  
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>
<div className="mb-4 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={createTrainingSession}>Create training Session</button>
                          </div>
<div className="mb-5 mt-3 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-outline-success rounded-pill px-5 py-2 shadow w-50" onClick={createMatchDay}>Create Match Day</button>
                          </div>
                          
                </div>
            </div>
        </div>
    </div>
)}
      {showModalMatchDay && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-xl w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalMatchDay}
                    />
                    
                    <div className=" mx-auto w-100 py-4">
  <h4 className="mt-3 mb-5 text-center">
    <b>Match Day</b>
  </h4>
  <div className="row mx-md-5 mx-2">
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="fromInput" >From</label>
      <input type="time" id="fromInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={fromTime} onChange={handleFromTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >To</label>
      <input type="time" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="matchInput" >Match Venue</label>
      {/* <input type="text" id="matchInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} /> */}
      <div className="dropdown">
  <select
    id="matchInput"
    className="form-select form-select-sm border-0 border-bottom"
    style={{ border: '2px solid #C1C1C1', borderRadius: '0', cursor: 'pointer' }}
    onChange={(e) => setSelectedVenue(e.target.value)}
    value={selectedVenue}  // To keep the value in sync with the state
  >
    <option value="" disabled>Select Venue</option>
    <option value="Hometown">Hometown</option>
    <option value="Away">Away</option>
  </select>
</div>



    </div>
    </div>
    {/* <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1">
      <label className="form-label font-600" htmlFor="hashtagInput">Enter Hashtags</label>
      <input
        type="text"
        id="hashtagInput"
        className="form-control form-control-sm border-0 border-bottom"
        style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Press Enter to add hashtags"
      />
      <div className="mt-2">
        {hashtags.map((hashtag, index) => (
          <span key={index} className="badge bg-success me-1">
            #{hashtag}
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close" onClick={() => removeHashtag(index)}></button>
          </span>
        ))}
      </div>
    </div>
    </div> */}
  </div>
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>

<div className="mb-5 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleSaveNoteMatchDay}>Done</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
{showModalMatchDayNote && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-xl w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalMatchDayNote}
                    />
                    
                    <div className=" mx-auto w-100 py-4">
  <h4 className="mt-3 mb-5 text-center">
    <b>Match Day</b>
  </h4>
  <div className="row mx-md-5 mx-2">
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="fromInput" >From</label>
      <input type="time" id="fromInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={fromTime} onChange={handleFromTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >To</label>
      <input type="time" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="matchInput" >Match Venue</label>
      {/* <input type="text" id="matchInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} /> */}
      <div className="dropdown">
  <select
    id="matchInput"
    className="form-select form-select-sm border-0 border-bottom"
    style={{ border: '2px solid #C1C1C1', borderRadius: '0', cursor: 'pointer' }}
    onChange={(e) => setSelectedVenue(e.target.value)}
    value={selectedVenue}  // To keep the value in sync with the state
  >
    <option value="" disabled>Select Venue</option>
    <option value="Hometown">Hometown</option>
    <option value="Away">Away</option>
  </select>
</div>



    </div>
    </div>
    {/* <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1">
      <label className="form-label font-600" htmlFor="hashtagInput">Enter Hashtags</label>
      <input
        type="text"
        id="hashtagInput"
        className="form-control form-control-sm border-0 border-bottom"
        style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Press Enter to add hashtags"
      />
      <div className="mt-2">
        {hashtags.map((hashtag, index) => (
          <span key={index} className="badge bg-success me-1">
            #{hashtag}
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close" onClick={() => removeHashtag(index)}></button>
          </span>
        ))}
      </div>
    </div>
    </div> */}
  </div>
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>
<div className="mb-3 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-outline-success rounded-pill px-5 py-2 shadow w-50" onClick={handleOpenMatchDayEdit}>Edit</button>
                          </div>
<div className="mb-4 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleOpenMatchDayEditYearPlanner}>Edit Year Planner</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
{showModalMatchDayEdit && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-xl w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalMatchDayEdit}
                    />
                    
                    <div className=" mx-auto w-100 py-4">
  <h4 className="mt-3 mb-5 text-center">
    <b>Match Day</b>
  </h4>
  <div className="row mx-md-5 mx-2">
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="fromInput" >From</label>
      <input type="time" id="fromInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={fromTime} onChange={handleFromTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >To</label>
      <input type="time" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="matchInput" >Match Venue</label>
      {/* <input type="text" id="matchInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} /> */}
      <div className="dropdown">
  <select
    id="matchInput"
    className="form-select form-select-sm border-0 border-bottom"
    style={{ border: '2px solid #C1C1C1', borderRadius: '0', cursor: 'pointer' }}
    onChange={(e) => setSelectedVenue(e.target.value)}
    value={selectedVenue}  // To keep the value in sync with the state
  >
    <option value="" disabled>Select Venue</option>
    <option value="Hometown">Hometown</option>
    <option value="Away">Away</option>
  </select>
</div>



    </div>
    </div>
    {/* <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1">
      <label className="form-label font-600" htmlFor="hashtagInput">Enter Hashtags</label>
      <input
        type="text"
        id="hashtagInput"
        className="form-control form-control-sm border-0 border-bottom"
        style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Press Enter to add hashtags"
      />
      <div className="mt-2">
        {hashtags.map((hashtag, index) => (
          <span key={index} className="badge bg-success me-1">
            #{hashtag}
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close" onClick={() => removeHashtag(index)}></button>
          </span>
        ))}
      </div>
    </div>
    </div> */}
  </div>
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>

<div className="mb-5 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleSaveNoteMatchDay}>Save</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
{showModalTrainingSession && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-xl w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalTrainingSession}
                    />
                    
                    <div className=" mx-auto w-100 py-4">
  <h4 className="mt-3 mb-5 text-center">
    <b>Training Session</b>
  </h4>
  <div className="row mx-md-5 mx-2">
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="fromInput" >From</label>
      <input type="time" id="fromInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={fromTime} onChange={handleFromTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >To</label>
      <input type="time" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >Number of Players</label>
      <input type="number" id="toInput" min='0' className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}  value={totalPlayers} onChange={(e) => settotalPlayers(e.target.value)}/>
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >Main Emphasis</label>
      <input type="text" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}  value={mainEmphasis} onChange={(e) => setmainEmphasis(e.target.value)}/>
    </div>
    </div>
  </div>
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>

<div className="mb-5 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleSelectExercises}>Next</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
{showModalTrainingSessionExercise && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-xl w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalTrainingSessionExercise}
                    />
                    
                    <div className=" mx-auto w-100 py-4">
  <h4 className="mt-3 mb-5 text-center">
    <b>Training Session</b>
  </h4>
  <div className='row mx-md-5'>
      {exercises.map((exercise, index) => (
        <div className='col-lg-4 col-md-5 col-12' key={index}>
          <div
            onClick={() => handleExerciseClick(exercise)}
            className={`p-4 mb-2 shadow rounded-4 my-3 d-flex align-items-center justify-content-center text-center month-link ${hashtags.includes(exercise) ? 'selected' : ''}`}
            style={{ cursor: 'pointer', backgroundColor: hashtags.includes(exercise) ? '#add8e6' : 'inherit' }}
          >
            <h4>{exercise}</h4>
          </div>
        </div>
      ))}
    </div>
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>

<div className="mb-5 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleSaveNoteTrainingSession}>Next</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
{showModalTrainingSessionNote && (
    <div
        className="modal show d-flex align-items-center justify-content-center "
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div className="modal-dialog modal-xl w-100"> {/* Increase modal size */}
            <div className="modal-content my-1 rounded-4">
                <div className="modal-body  position-relative">
                    <img
                    src='./img/Admin/Frame (7).png'
                        type="button"
                        className=" position-absolute"
                        style={{ top: '10px', right: '10px' }}
                        
                        onClick={handleCloseModalTrainingSessionNote}
                    />
                    
                    <div className=" mx-auto w-100 py-4">
  <h4 className="mt-3 mb-5 text-center">
    <b>Training Session</b>
  </h4>
  <div className="row mx-md-5 mx-2">
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="fromInput" >From</label>
      <input type="time" id="fromInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={fromTime} onChange={handleFromTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >To</label>
      <input type="time" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }} value={toTime} onChange={handleToTimeChange} />
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >Number of Players</label>
      <input type="number" id="toInput" min='0' className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}  value={totalPlayers} onChange={(e) => settotalPlayers(e.target.value)}/>
    </div>
    </div>
    <div className="col-md-6">
    <div data-mdb-input-init className="form-outline w-100 mb-4 mx-1" >
      <label className="form-label font-600" htmlFor="toInput" >Main Emphasis</label>
      <input type="text" id="toInput" className="form-control form-control-sm border-0 border-bottom" style={{ border: '2px solid #C1C1C1', borderRadius: '0' }}  value={mainEmphasis} onChange={(e) => setmainEmphasis(e.target.value)}/>
    </div>
    </div>
  </div>
  {/* <div class="form-control text-default bg-light border-0 rounded-5 mt-4 mb-4" type="text" ><p className='py-2 my-auto'>Lorem ipsum dolor sit amet consectetur. N</p></div> */}
</div>

<div className="mb-3 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-outline-success rounded-pill px-5 py-2 shadow w-50" >Save Changes</button>
                          </div>
<div className="mb-4 mt-2 d-flex align-items-center justify-content-center mx-auto">
                            <button type='button' className="btn btn-success rounded-pill px-5 py-2 shadow w-50" onClick={handleOpenTrainingSessionEditYearPlanner}>Edit Year Planner</button>
                          </div>
                </div>
            </div>
        </div>
    </div>
)}
    </>
  );
};

export default AdminDashboardYearPlannerDetails;
