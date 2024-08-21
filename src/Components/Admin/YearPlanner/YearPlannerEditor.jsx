import React, { useState, useEffect, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CanvasDraw from "react-canvas-draw";
import { SketchPicker } from 'react-color';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import { FaStar } from 'react-icons/fa';
// import './yearplannereditor.css';
// ToolSidebar Component
const ToolSidebar = ({ onSelectTool, activeTool }) => (
  <div className="tool-sidebar bg-light rounded-4 d-flex flex-column align-items-center py-4 px-2 pb-5">
    <button
      onClick={() => onSelectTool('draw')}
      className={activeTool === 'draw' ? 'btn btn-success py-1 my-2' : 'btn my-2'}
    >
      <img src="./img/YearPlanner/ToolbarIcons/mage_pen.png" alt="" />
    </button>
    <button
      onClick={() => onSelectTool('text')}
      className={activeTool === 'text' ? 'btn btn-success py-1 my-2' : 'btn my-2'}
    >
      <img src="./img/YearPlanner/ToolbarIcons/mage_pen (1).png" alt="" />
    </button>
    <button
      onClick={() => onSelectTool('player')}
      className={activeTool === 'player' ? 'btn btn-success py-1 my-2' : 'btn my-2'}
    >
            <img src="./img/YearPlanner/ToolbarIcons/carbon_person.png" alt="" />

    </button>
    <button
      onClick={() => onSelectTool('ball')}
      className={activeTool === 'ball' ? 'btn btn-success py-1 my-2' : 'btn my-2'}
    >
            <img src="./img/YearPlanner/ToolbarIcons/emojione-monotone_soccer-ball.png" alt="" />

    </button>
    <button
      onClick={() => onSelectTool('barrier')}
      className={activeTool === 'barrier' ? 'btn btn-success py-1 my-2' : 'btn my-2'}
    >
            <img src="./img/YearPlanner/ToolbarIcons/Frame (9).png" alt="" />

    </button>
    <button
      onClick={() => onSelectTool('erase')}
      className={activeTool === 'erase' ? 'btn btn-success py-1 my-2' : 'btn my-2'}
    >
      <i class="fa-solid fa-eraser fa-xl text-dark"></i>
    </button>
  </div>
);

// DraggableElement Component
const DraggableElement = ({ id, left, top, type, tool, onRemove }) => {
  const [, drag] = useDrag(() => ({
    type: 'element',
    item: { id, left, top, type },
  }));

  const handleClick = () => {
    if (tool === 'erase') {
      onRemove(id);
    }
  };

  return (
    <div
      ref={drag}
      style={{
        position: 'absolute',
        left,
        top,
        cursor: tool === 'erase' ? 'pointer' : 'move',
        zIndex: 1
      }}
      onClick={handleClick}
    >
      {/* {type === 'player' && <div>⚽️</div>}
      {type === 'text' && <div contentEditable>Text</div>}
      {type === 'ball' && <div>🏀</div>}
      {type === 'barrier' && <div>🛡️</div>} */}
      {type === 'player' && <div><img src="./img/YearPlanner/ToolbarIcons/carbon_person.png" alt="" width='32' /></div>}
      {type === 'text' && <div contentEditable>Text</div>}
      {type === 'ball' && <div><img src="./img/YearPlanner/ToolbarIcons/emojione-monotone_soccer-ball.png"  alt="" width='32' /></div>}
      {type === 'barrier' && <div><img src="./img/YearPlanner/ToolbarIcons/Frame (9).png" alt="" width='32'/></div>}
    </div>
  );
};

// FieldCanvas Component
const FieldCanvas = ({ tool, selectedColor, canvasRef, elements, setElements }) => {
  const [erasedElements, setErasedElements] = useState([]);
  
  const addElement = (type) => {
    if (tool !== 'draw' && tool !== 'erase') {
      setElements(prevElements => [
        ...prevElements,
        { id: prevElements.length, type, left: 50, top: 50 },
      ]);
    }
  };

  const moveElement = (id, newLeft, newTop) => {
    setElements(prevElements =>
      prevElements.map(el => 
        el.id === id ? { ...el, left: newLeft, top: newTop } : el
      )
    );
  };

  const removeElement = (id) => {
    const element = elements.find(el => el.id === id);
    if (element) {
      setErasedElements(prevErased => [...prevErased, element]);
      setElements(prevElements =>
        prevElements.filter(el => el.id !== id)
      );
    }
  };

  const undoErase = () => {
    if (erasedElements.length > 0) {
      const lastErased = erasedElements.pop();
      setElements(prevElements => [...prevElements, lastErased]);
      setErasedElements([...erasedElements]);
    }
    if (canvasRef.current) {
      canvasRef.current.undo(); // Undo the last brush erase
    }
  };

  const eraseAll = () => {
    if (canvasRef.current) {
      canvasRef.current.eraseAll(); // Clear the canvas drawing data
    }
  };

  const [, drop] = useDrop(() => ({
    accept: 'element',
    drop: (item, monitor) => {
      const clientOffset = monitor.getSourceClientOffset();

      if (!clientOffset) return;

      const canvasRect = canvasRef.current.canvas.drawing.getBoundingClientRect();

      const newLeft = Math.round(clientOffset.x - canvasRect.left);
      const newTop = Math.round(clientOffset.y - canvasRect.top);

      moveElement(item.id, newLeft, newTop);
    },
  }));

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.canvasContainer.style.cursor = tool === 'draw' || tool === 'erase' ? 'crosshair' : 'default';
    }
  }, [tool]);

  useEffect(() => {
    if (tool !== 'draw' && tool !== 'erase') {
      addElement(tool);
    }
  }, [tool]);

  return (
    <div
      className="field-canvas mx-md-5"
      ref={drop}
      style={{
        height: '100%',
        position: 'relative',
        // border: '1px solid red'
      }}
    >
      <CanvasDraw
        ref={canvasRef}
        brushColor={tool === 'draw' ? selectedColor : "white"}
        brushRadius={tool === 'draw' ? 2 : 4}
        lazyRadius={0}
        catenaryColor={"transparent"}
        canvasWidth={350}
        canvasHeight={450}
        hideGrid={true}
        style={{
          backgroundImage: `url('./img/YearPlanner/Group 175 (2).png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          overflow: 'hidden',
          position: 'relative',
          top: 0,
          left: 0,
          cursor: tool === 'draw' || tool === 'erase' ? 'crosshair' : 'default'
        }}
        disabled={tool !== 'draw' && tool !== 'erase'}
      />
      {elements.map(element => (
        <DraggableElement
          key={element.id}
          id={element.id}
          left={element.left}
          top={element.top}
          type={element.type}
          tool={tool}
          onRemove={removeElement}
        />
      ))}
    </div>
  );
};

// ColorPicker Component
const ColorPicker = ({ selectedColor, onChangeColor }) => {
  const [savedColors, setSavedColors] = useState([
    "#1abc9c", "#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#3498db",
    "#9b59b6", "#8e44ad", "#e84393", "#00cec9", "#6c5ce7", "#d63031"
  ]);

  const handleColorChange = (color) => {
    onChangeColor(color.hex);
  };

  const handleSaveColor = () => {
    if (!savedColors.includes(selectedColor)) {
      setSavedColors([...savedColors, selectedColor]);
    }
  };

  return (
    <div style={{ textAlign: 'center' }} className=' my-2'>
      <SketchPicker
        color={selectedColor}
        onChangeComplete={handleColorChange}
        presetColors={savedColors}
        disableAlpha={true}
        width={330}
        styles={{
          default: {
            picker: {
              boxShadow: 'none',
              borderRadius: '8px',
              border: '1px solid #ddd',
              
            },
            saturation: {
              borderRadius: '8px 8px 0 0',
            },
            controls: {
              display: 'flex',
              marginTop: '10px',
              padding: '0 10px',
            },
            color: {
              width: '25px',
              height: '25px',
              borderRadius: '50%',
            },
            swatch: {
              borderRadius: '50%',
              cursor: 'pointer',
            },
          },
        }}
      />
      {/* <div style={{ marginTop: '20px' }}>
        <h5>Saved colors:</h5>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {savedColors.map(color => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                margin: '5px',
                cursor: 'pointer',
                border: selectedColor === color ? '3px solid #ccc' : '2px solid #fff',
                boxShadow: selectedColor === color ? '0 0 5px rgba(0,0,0,0.3)' : 'none',
              }}
              onClick={() => onChangeColor(color)}
            />
          ))}
        </div>
      </div> */}
      <div className='d-flex '>
      <button onClick={handleSaveColor} className='btn btn-success rounded-pill px-4  py-2 my-3 shadow'>
        Save Color
      </button>
      </div>
    </div>
  );
};

// YearPlannerEditor Component
const YearPlannerEditor = () => {
  const [tool, setTool] = useState('draw');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const canvasRef = useRef(null);
  const [elements, setElements] = useState([]);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const backend = isMobile ? TouchBackend : HTML5Backend;

  const handleSave = () => {
    const savedData = canvasRef.current ? canvasRef.current.getSaveData() : null;
    const canvasElements = elements.map(el => ({ ...el, left: el.left, top: el.top }));
    console.log('Canvas Saved:', { savedData, elements: canvasElements, title, rating, notes });
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleHover = (value) => {
    setHover(value);
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="row">
          <AdminSidebar />
          <div className="col-md-10">
            <AdminHeader />
            <div className="container-fluid my-4">
              <DndProvider backend={backend}>
                <div className="editor-container d-flex flex-column flex-md-row">
                  <div className="tool-sidebar-wrapper ">
                    <ToolSidebar onSelectTool={setTool} activeTool={tool} />
                  </div>
                  <div className="field-and-colorpicker-wrapper row w-100">
                  <div className='col-lg-4 col-md-6 col-12'>
                    <FieldCanvas
                      tool={tool}
                      selectedColor={selectedColor}
                      canvasRef={canvasRef}
                      elements={elements}
                      setElements={setElements}
                    />
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <ColorPicker selectedColor={selectedColor} onChangeColor={setSelectedColor} />
                    </div>
                    
                    <div className="notes-sidebar-wrapper col-12 col-lg-4 col-md-6 mt-4 mt-md-0 ">
                    <div className="my-3 mx-auto">
                      <img src="./img/Advisor/Entire Field (2).png" className="img-fluid" alt="Right Aligned Image" />
                    </div>
                    <div className="notes-sidebar p-3 col-lg-8">
                      <div className="form-outline mb-2">
                        <label className="form-label font-600 mb-0" htmlFor="formTitle">Title</label>
                        <input
                          type="text"
                          id="formTitle"
                          className="form-control form-control-sm border-0 border-bottom"
                          style={{ border: "2px solid #C1C1C1", borderRadius: "0" }}
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label font-600 mb-0" htmlFor="formNotes">Any Note</label>
                        <input
                          type="text"
                          id="formNotes"
                          className="form-control form-control-sm border-0 border-bottom"
                          style={{ border: "2px solid #C1C1C1", borderRadius: "0" }}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <br />
                        <div className='d-flex justify-content-end'>
                          {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                              <FaStar
                                key={index}
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={30}
                                onClick={() => handleRating(ratingValue)}
                                onMouseEnter={() => handleHover(ratingValue)}
                                onMouseLeave={() => handleHover(0)}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className='d-flex justify-content-end my-4'>
                        <button onClick={handleSave} className="btn btn-success rounded-pill px-5 py-2 mt-3 shadow">Save</button>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                </div>
              </DndProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearPlannerEditor;
