import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from '../../Admin/AdminSidebar';
import AdminHeader from '../../Admin/AdminHeader';

const CoachDashboardYearPlanner = () => {
    const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

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


  const [monthIndex, setMonthIndex] = useState(1);
  const [days, setDays] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
//   const [notes, setNotes] = useState({});
const [notes, setNotes] = useState({
    '2024-1-1': { 
        dayEvent: 'Match Day',
        formattedFromTime: '10:00 AM',
        formattedToTime: '12:00 PM',
        selectedVenue: 'Hometown',
    },
    '2024-1-2': { 
        dayEvent: 'Training Session',
        formattedFromTime: '10:00 AM',
        formattedToTime: '12:00 PM',
        hashtags: ['push up', 'squeezing'],
        selectedVenue: 'Hometown',
    },
});
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
        navigate('/admindashboardyearplannermatchday')
      return;
      }
      else if (notes[noteKey]?.dayEvent === 'Training Session'){
        // alert('You have already added ');
        navigate('/admindashboardyearplannertrainingsession')

        return;
      }
    }
    setSelectedDay(day);
    setShowModalSelectEvent(true);
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
                      to={`/coachdashboardyearplanner?monthIndex=${index+1}`}
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

    </>
  )
}

export default CoachDashboardYearPlanner