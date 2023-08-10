import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';

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
      <button onClick={() => setBikeDays([...bikeDays, "0"])}>Sun</button>
      <button onClick={() => setBikeDays([...bikeDays, "1"])}>Mon</button>
      <button onClick={() => setBikeDays([...bikeDays, "2"])}>Tue</button>
      <button onClick={() => setBikeDays([...bikeDays, "3"])}>Wed</button>
      <button onClick={() => setBikeDays([...bikeDays, "4"])}>Thu</button>
      <button onClick={() => setBikeDays([...bikeDays, "5"])}>Fri</button>
      <button onClick={() => setBikeDays([...bikeDays, "6"])}>Sat</button>
    </div>
  );
}
export default Bike;