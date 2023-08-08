import './App.css';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Calendar } from '@fullcalendar/core';

function App() {

const [swimDays, setSwimDays] = useState(-1);
const [runDays, setRunDays] = useState(-1);
const [bikeDays, setBikeDays] = useState(-1);
const [date, setDate] = useState(new Date());


useEffect(()=>{
var calendarEl = document.getElementById('calendar');
if(calendarEl !== null){
var calendar = new Calendar(calendarEl as HTMLElement, {
  plugins: [ dayGridPlugin ],
  events: [],
  editable: true
});
  calendar.addEvent({title: "Swimming", 
  date: "2023-08-15",
  allDay: true})
}
},[swimDays]);

const changeSwimDays = (event:any) => {
  setSwimDays(event.target.value);
};

const changeBikeDays = (event:any) => {
  setBikeDays(event.target.value)
};

const changeRunDays = (event:any) => {
  setRunDays(event.target.value)
};

const changeDate = (event:any) => {
  setDate(event.target.value)
};

  return (
    <div className="App">
      <header>
        Triathlon Calendar calculator
      </header>
      <div>
        Date of race
        <input type='date' onChange={changeDate}/>
      </div>
        <div>
          <div>
            Days a week of swimming:
            <input type='number' onChange={changeSwimDays}/>
            //for now swim starts of monday
          </div>
          <div>
            Days a week of running:
            <input type='number' onChange={changeBikeDays}/>
            //for now swim starts of wed
          </div>
          <div>
            Days a week of biking:
            <input type='number' onChange={changeRunDays}/>
            //for now swim starts of tues
          </div>
        </div>
        {runDays > -1 && bikeDays > -1 && swimDays > -1 &&
          <div>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth" />
          </div>
        }
    </div>
  );
}

export default App;
