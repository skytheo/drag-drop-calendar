import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

const Bike = (props: any) => {

  const [bikeDays, setBikeDays] = useState<string[]>([]);
  useEffect(() => {
    props.setEvents(getBikeDays(props.events, bikeDays, props.date));
  }, [bikeDays]);
  function getBikeDays(events: EventInput[], BikeDays: string[], date: Date): EventInput[] {
    let total = 0;
    let newEvents = [];
    if (BikeDays.length >= 1) {
      newEvents[0] = {
        start: new Date(),
        end: date,
        title: "Long Bike",
        daysOfWeek: [BikeDays[0]],
        color: "#CC6600",
        description: "Long Bike"
      };
      total++;
    }
    if (BikeDays.length >= 2) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Tempo Bike",
        daysOfWeek: [BikeDays[1]],
        color: "#FFBB66",
        description: "Tempo Bike"
      };
      total++;
      if (BikeDays.length >= 5) {
        newEvents[total] = {
          start: new Date(),
          end: date,
          title: "Speed Bike",
          daysOfWeek: [BikeDays[2]],
          color: "#FFBB66",
          description: "Speed Bike"
        };
        total++;
      }
    }
    if (total < BikeDays.length) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Maintenence Bike",
        daysOfWeek: BikeDays.length >= 5 ? BikeDays.slice(3) : BikeDays.slice(2),
        color: "#FF8800",
        description: "Maintenence Bike"
      };
    }
    let temp = events.filter(x => !x.title?.includes("Bike"));
    return [
      ...temp,
      ...newEvents,
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