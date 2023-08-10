import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';

const Run = (props: any) => {

    const [runDays, setRunDays] = useState<string[]>([]);
    useEffect(() => {
      props.setEvents(getRunDays(props.events, runDays, props.date));
    }, [runDays]);

function getRunDays(events: EventInput[], RunDays: string[], date: Date): EventInput[]{
  let temp = events.filter(x=> x.title != "Running");
  return [
    ...temp,
    {
      start: new Date(),
      end: date,
      title: "Running",
      daysOfWeek: RunDays,
      color: "Orange"
    },
  ]
}

return (<div>
    Days a week of running:
    <button onClick={() => setRunDays([...runDays, "0"])}>Sun</button>
    <button onClick={() => setRunDays([...runDays, "1"])}>Mon</button>
    <button onClick={() => setRunDays([...runDays, "2"])}>Tue</button>
    <button onClick={() => setRunDays([...runDays, "3"])}>Wed</button>
    <button onClick={() => setRunDays([...runDays, "4"])}>Thu</button>
    <button onClick={() => setRunDays([...runDays, "5"])}>Fri</button>
    <button onClick={() => setRunDays([...runDays, "6"])}>Sat</button>
  </div>);
}
export default Run;