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
      title: "Long Run",
      daysOfWeek: [RunDays[0]],
      color: "#006633",
      description: "Long Run"
    };
    total++;
  }
  if (RunDays.length >= 2) {
    newEvents[total] = {
      start: new Date(),
      end: date,
      title: "Speed Run",
      daysOfWeek: [RunDays[1]],
      color: "#00CC00",
      description: "Tempo Run"
    };
    total++;
    if (RunDays.length >= 5) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Tempo Run",
        daysOfWeek: [RunDays[2]],
        color: "#00CC00",
        description: "Tempo Run"
      };
      total++;
    }
  }
  if (total < RunDays.length) {
    newEvents[total] = {
      start: new Date(),
      end: date,
      title: "Maintence Run",
      daysOfWeek: RunDays.length >= 5 ? RunDays.slice(3) : RunDays.slice(2),
      color: "#009900",
      description: "Maintenence Run"
    };
  }
  let temp = events.filter(x => !x.title?.includes("Run"));
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