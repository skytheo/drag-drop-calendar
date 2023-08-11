import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

const Bike = (props: any) => {

  const [bikeDays, setBikeDays] = useState<string[]>([]);
  useEffect(() => {
    props.setEvents(getBikeDays(props.events, bikeDays, props.date));
  }, [bikeDays]);
  function getBikeDays(events: EventInput[], BikeDays: string[], date: Date): EventInput[] {
    let temp = events.filter(x => x.title != "Biking");
    return [
      ...temp,
      {
        start: new Date(),
        end: date,
        title: "Biking",
        daysOfWeek: BikeDays,
        color: "Green"
      },
    ]
  }

  return (
    <div>
      Days a week of biking: 
      <Days setDays={setBikeDays} Days={bikeDays}/>
    </div>
  );
}
export default Bike;