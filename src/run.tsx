import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

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

return (
  <div>
    Days a week of running: 
    <Days setDays={setRunDays} Days={runDays}/>
  </div>);
}
export default Run;