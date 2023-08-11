import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

const Swim= (props: any)=>{
  const [swimDays, setSwimDays] = useState<string[]>([]);
  useEffect(() => {
    props.setEvents(getSwimDays(props.events, swimDays, props.date));
  }, [swimDays]);

  function getSwimDays(events: EventInput[], swimDays: string[], date: Date): EventInput[] {
    let temp = events.filter(x => x.title != "Swimming");
    return [
      ...temp,
      {
        start: new Date(),
        end: date,
        title: "Swimming",
        daysOfWeek: swimDays,
        color: "Blue",
        description: "Long Swim"
      },
    ]
  }

  return (
    <div>
      Days a week of swimming: 
      <Days setDays={setSwimDays} Days={swimDays}/>
    </div>
  );
}
export default Swim;