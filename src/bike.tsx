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
        title: "Biking",
        daysOfWeek: [BikeDays[0]],
        color: "Blue",
        description: "Long Bike"
      };
      total++;
    }
    if (BikeDays.length >= 2) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Biking",
        daysOfWeek: [BikeDays[1]],
        color: "Yellow",
        description: "Tempo Bike"
      };
      total++;
      if (BikeDays.length >= 5) {
        newEvents[total] = {
          start: new Date(),
          end: date,
          title: "Biking",
          daysOfWeek: [BikeDays[2]],
          color: "Yellow",
          description: "Tempo Bike"
        };
        total++;
      }
    }
    if (total < BikeDays.length) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Biking",
        daysOfWeek: BikeDays.length >= 5 ? BikeDays.slice(3) : BikeDays.slice(2),
        color: "Green",
        description: "Maintenence Bike"
      };
    }
    let temp = events.filter(x => x.title != "Biking");
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