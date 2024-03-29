import React, { useEffect, useState } from 'react';
import Navbar from "../navbar/Navbar";
import RenderCard from "../items/RenderCard";
import Calender from "../calender/Calender";
import ModalForm from "../noteForm/ModalForm";
import NoteForm from "../noteForm/NoteForm";
import useNoteStore from "../store/NoteStore"
import './Home.css'
import HeaderBar from "../header/HeaderBar";
import useSearchStore from "../store/SearchStore";
import useFilterStore from '../store/FilterStore';


function Home({NoteDataArr}) {
  const {deleteNote} = useNoteStore();
  const {SearchLabel} = useSearchStore();
  const [defaultNote, setdefaultNote] = useState({});
  const {FilterLabel} = useFilterStore();

  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setDisplayWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const minWidth = Math.min(200000,displayWidth*0.63);
  
  

  const [showModal, setshowModal] = useState(false);
  const toggleModal = ()=> {
    if (showModal){
      setshowModal(false);
    }
    else{
      setshowModal(true);
    }
  }
  const updateNote = (note)=>{
    setdefaultNote(note);
    // console.log(note);
    toggleModal();
  }



  return (
    <div className="container-fluid">

      <ModalForm showModal = {showModal} toggleModal = {toggleModal}>
          <NoteForm setshowModal = {setshowModal} defaultNote={defaultNote} setdefaultNote = {setdefaultNote}></NoteForm>
      </ModalForm>

      <div className="row">
        <div className="col-md-2 sidebar">
          <Navbar toggleModal = {toggleModal}></Navbar>
        </div>

        <div className="col-md-7" style={{ minWidth: `${minWidth}px` }}>

          <HeaderBar headerText = {FilterLabel?`${SearchLabel}  ${NoteDataArr.length } ` + FilterLabel:  `${SearchLabel}  ${NoteDataArr.length } `}></HeaderBar>
          
          <div className="row d-flex justify-content-center">
            {NoteDataArr.map((item, i) => {
              return <RenderCard item={item} key={i} updateNote={updateNote} deleteNote = {deleteNote}></RenderCard>;
            })}
          </div>
        </div>

        <div className="col d-flex justify-content-center" style={{ backgroundColor: "#141e33", width: `${displayWidth*0.15}px`}}>
          <div className="right-sidebar">
            <Calender></Calender>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
