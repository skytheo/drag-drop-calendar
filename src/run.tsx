import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

const Run = (props: any) => {

    const [runDays, setRunDays] = useState<string[]>([]);
    useEffect(() => {
      props.setEvents(getRunDays(props.events, runDays, props.date));
    }, [runDays]);

function getRunDays(events: EventInput[], RunDays: string[], date: Date): EventInput[] {
  let total = 0;
  let newEvents = [];
  if (RunDays.length >= 1) {
    newEvents[0] = {
      start: new Date(),
      end: date,
      title: "Running",
      daysOfWeek: [RunDays[0]],
      color: "Green",
      description: "Long Run"
    };
    total++;
  }
  if (RunDays.length >= 2) {
    newEvents[total] = {
      start: new Date(),
      end: date,
      title: "Running",
      daysOfWeek: [RunDays[1]],
      color: "Yellow",
      description: "Tempo Run"
    };
    total++;
    if (RunDays.length >= 5) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Running",
        daysOfWeek: [RunDays[2]],
        color: "Yellow",
        description: "Tempo Run"
      };
      total++;
    }
  }
  if (total < RunDays.length) {
    newEvents[total] = {
      start: new Date(),
      end: date,
      title: "Running",
      daysOfWeek: RunDays.length >= 5 ? RunDays.slice(3) : RunDays.slice(2),
      color: "Orange",
      description: "Maintenence Run"
    };
  }
  let temp = events.filter(x => x.title != "Running");
  return [
    ...temp,
    ...newEvents,
  ]
}

return (
  <div>
    Days a week of running: 
    <Days setDays={setRunDays} Days={runDays}/>
  </div>);
}
export default Run;