import './App.css';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Calendar, EventInput } from '@fullcalendar/core';

function App() {

const [swimDays, setSwimDays] = useState<string[]>([]);
const [runDays, setRunDays] = useState<string[]>([]);
const [bikeDays, setBikeDays] = useState<string[]>([]);
const [date, setDate] = useState(new Date());
const [events, setEvents] = useState<EventInput[]>([]);


useEffect(()=>{
  let temp = events.filter(x=> x.title != "Swimming");
    setEvents([
      ...temp,
      {
        start: new Date(),
        end: date,
        title: "Swimming",
        daysOfWeek: swimDays,
        color: "Blue"
      },
    ]);
},[swimDays]);

useEffect(()=>{
  let temp = events.filter(x=> x.title != "Running");
    setEvents([
      ...temp,
      {
        start: new Date(),
        end: date,
        title: "Running",
        daysOfWeek: runDays,
        color: "Orange"
      },
    ]);
},[runDays]);

useEffect(()=>{
  let temp = events.filter(x=> x.title != "Biking");
    setEvents([
      ...temp,
      {
        start: new Date(),
        end: date,
        title: "Biking",
        daysOfWeek: bikeDays,
        color: "Green"
      },
    ]);
},[bikeDays]);

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
            <button onClick={() => setSwimDays([...swimDays, "0"])}>Sun</button>
            <button onClick={() => setSwimDays([...swimDays, "1"])}>Mon</button>
            <button onClick={() => setSwimDays([...swimDays, "2"])}>Tue</button>
            <button onClick={() => setSwimDays([...swimDays, "3"])}>Wed</button>
            <button onClick={() => setSwimDays([...swimDays, "4"])}>Thu</button>
            <button onClick={() => setSwimDays([...swimDays, "5"])}>Fri</button>
            <button onClick={() => setSwimDays([...swimDays, "6"])}>Sat</button>
          </div>
          <div>
            Days a week of running:
            <button onClick={() => setRunDays([...runDays, "0"])}>Sun</button>
            <button onClick={() => setRunDays([...runDays, "1"])}>Mon</button>
            <button onClick={() => setRunDays([...runDays, "2"])}>Tue</button>
            <button onClick={() => setRunDays([...runDays, "3"])}>Wed</button>
            <button onClick={() => setRunDays([...runDays, "4"])}>Thu</button>
            <button onClick={() => setRunDays([...runDays, "5"])}>Fri</button>
            <button onClick={() => setRunDays([...runDays, "6"])}>Sat</button>
          </div>
          <div>
            Days a week of biking:
            <button onClick={() => setBikeDays([...bikeDays, "0"])}>Sun</button>
            <button onClick={() => setBikeDays([...bikeDays, "1"])}>Mon</button>
            <button onClick={() => setBikeDays([...bikeDays, "2"])}>Tue</button>
            <button onClick={() => setBikeDays([...bikeDays, "3"])}>Wed</button>
            <button onClick={() => setBikeDays([...bikeDays, "4"])}>Thu</button>
            <button onClick={() => setBikeDays([...bikeDays, "5"])}>Fri</button>
            <button onClick={() => setBikeDays([...bikeDays, "6"])}>Sat</button>
          </div>
        </div>
          <div>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth" 
              events={events}/>
          </div>
    </div>
  );
}

export default App;
