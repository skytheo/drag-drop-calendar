import './App.css';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventInput } from '@fullcalendar/core';
import Swim from './swim';
import Bike from './bike';
import Run from './run';
import Popup from 'reactjs-popup';

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<EventInput[]>([]);
  const [type, setType] = useState("");
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");

  const changeDate = (event: any) => {
    setDate(event.target.value);
    setEvents([{title:"Race Day", color:"black", editable:false, date: event.target.value, allDay:true}])
  };

  const changeType = (event: any) => {
    setType(event.target.value)
  };
  //todo:
  //ability to add custom events?
  //add workouts to each event (don't forget 20% rule) need to remove recurring events to do this
  //mertic vs imerial, button to switch 
  //ability to drag and drop and delete events
  //import calendar
  //tapering calculations, see data from 70.3
  //long long term export to ical?

  return (
    <div className="App">
      <header>
        Triathlon Calendar calculator
      </header>
      <div>
        Type of Race:
        <select onChange={changeType}>
          <option disabled selected> -- select an option -- </option>
          <option value="Sprint">Sprint</option>
          <option value="Olympic">Olympic/Internatioal</option>
          <option value="70.3">Half/70.3</option>
          <option value="140.6">Full/140.6</option>
        </select>
      </div>
      <div>
        Date of race
        <input type='date' onChange={changeDate} />
      </div>
      {type !== "" &&
        <div>
          <Swim date={date} setEvents={setEvents} events={events} distance={type}/>
          <Bike date={date} setEvents={setEvents} events={events} distance={type} />
          <Run date={date} setEvents={setEvents} events={events} distance={type} />
        </div>
      }
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events} 
          eventClick={(e) => {setTitle(e.event.title); setDescription(e.event.extendedProps.description); setOpen(true);}}
          droppable={true}
          editable={true}
          />
        <Popup open={open} modal onClose={()=> setOpen(false)}>
          <div className="modal">
            <div className="header">{title}</div>
            <div className="content">{description}</div>
            <button className="close" onClick={() => setOpen(false)}>x</button>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default App;