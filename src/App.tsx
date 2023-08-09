import './App.css';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { EventInput } from '@fullcalendar/core';
import getSwimDays from './swim';
import getBikeDays from './bike';
import getRunDays from './run';

function App() {

const [swimDays, setSwimDays] = useState<string[]>([]);
const [runDays, setRunDays] = useState<string[]>([]);
const [bikeDays, setBikeDays] = useState<string[]>([]);
const [date, setDate] = useState(new Date());
const [events, setEvents] = useState<EventInput[]>([]);


useEffect(()=>{
  setEvents(getSwimDays(events, swimDays, date));
},[swimDays]);

useEffect(()=>{
  setEvents(getRunDays(events, runDays, date));
},[runDays]);

useEffect(()=>{
  setEvents(getBikeDays(events, swimDays, date));
},[bikeDays]);

const changeDate = (event:any) => {
  setDate(event.target.value)
};
//todo:
//add types of workouts, see written notes
//fix date
//ability to add custom events?
//add workouts to each event (don't forget 20% rule)
//ability to drag and drop and delete events
//tapering calculations, see data from 70.3
//long long term export?
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
