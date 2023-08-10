import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';

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
      <button onClick={() => setSwimDays([...swimDays, "0"])}>Sun</button>
      <button onClick={() => setSwimDays([...swimDays, "1"])}>Mon</button>
      <button onClick={() => setSwimDays([...swimDays, "2"])}>Tue</button>
      <button onClick={() => setSwimDays([...swimDays, "3"])}>Wed</button>
      <button onClick={() => setSwimDays([...swimDays, "4"])}>Thu</button>
      <button onClick={() => setSwimDays([...swimDays, "5"])}>Fri</button>
      <button onClick={() => setSwimDays([...swimDays, "6"])}>Sat</button>
    </div>
  );
}
export default Swim;