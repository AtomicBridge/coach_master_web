import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import './admindashboard.css';
import { Link } from 'react-router-dom';

const notesData = [
  { id: 1, title: 'Note 1', content: 'Content for Note 1' },
  { id: 2, title: 'Note 2', content: 'Content for Note 2' },
  { id: 3, title: 'Note 3', content: 'Content for Note 3' },
  { id: 3, title: 'Note 4', content: 'Content for Note 4' },
  { id: 3, title: 'Note 5', content: 'Content for Note 5' },
  { id: 3, title: 'Note 6', content: 'Content for Note 6' },
  { id: 3, title: 'Note 7', content: 'Content for Note 7' },
  { id: 3, title: 'Note 8', content: 'Content for Note 8' },
  { id: 3, title: 'Note 9', content: 'Content for Note 9' },
  { id: 3, title: 'Note 10', content: 'Content for Note 10' },
  // Add more notes here
];

const AdminDashboardNotesView = () => {
  const [selectedNote, setSelectedNote] = useState(notesData[0]);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  useEffect(() => {
    // Set the first note as selected by default
    setSelectedNote(notesData[0]);
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div className="row">
          {/* Sidebar */}
          <AdminSidebar />
          {/* Main Content */}
          <div className="col-md-10">
            {/* Header */}
            <AdminHeader />
            <div className="container my-4">
              <main className="content" >
                <div className="p-0">
                  <div className="card rounded-4" style={{ maxHeight: '664px' }}>
                    <div className="row g-0">
                      <div className="col-12 col-md-6 p-2">
                        <div className="left-chats">
                          {notesData.map((note) => (
                            <div
							key={note.id}
							className="left-notes mx-3 my-2 rounded-5 py-3"
							onClick={() => handleNoteClick(note)}
							style={{ cursor: 'pointer' }}
						  >
							<div className="d-flex justify-content-between px-2">
							  <div className="d-flex justify-content-center">
								<img
								  className="mt-2 mx-2 note-icon"
								  src="./img/Admin/Notes/notes.png"
								  alt=""
								  style={{ height: '40px', width: '40px' }}
								/>
								<img
								  className="mt-2 mx-2 note-icon-hover"
								  src="./img/Admin/Notes/whitenotes.png"  
								  alt=""
								  style={{ height: '40px', width: '40px'}}
								/>
								<h5 className="my-3 mx-0">{note.title}</h5>
							  </div>
							  <Link to="/admindashboardnotesview">
								<img
								  className="p-3 img-fluid note-icon"
								  src="./img/Admin/Notes/Group 1686553907Arrow - Down 2.png"
								  alt=""
								/>
								<img
								  className="p-3 img-fluid note-icon-hover"
								  src="./img/Admin/Notes/whitearrow .png"
								  alt=""
								/>
							  </Link>
							</div>
						  </div>
						  
                          ))}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="position-relative">
                          <div className="notes-view p-4">
                            {selectedNote && (
                              <>
                                <h4>{selectedNote.title}</h4>
                                <p>{selectedNote.content}</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
			  <div className="mt-4 d-flex justify-content-end">
  <div className="row w-auto">
    <div className="col-md-6">
      <button
        type="button"
        className="btn btn-outline-success rounded-pill px-3 mx-3 py-2 w-100 shadow"
      >
        Delete Note
      </button>
    </div>
    <div className="col-md-6">
      <button
        type="button"
        className="btn btn-success rounded-pill px-5 mx-3 py-2 shadow w-100"
      >
        Edit
      </button>
    </div>
  </div>
</div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardNotesView;
