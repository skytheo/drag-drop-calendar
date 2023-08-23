import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

const Swim = (props: any) => {
  const [swimDays, setSwimDays] = useState<string[]>([]);
  useEffect(() => {
    props.setEvents(getSwimDays(props.events, swimDays, props.date, props.distance));
  }, [swimDays, props.date]);

  function getSwimDays(events: EventInput[], swimDays: string[], date: Date, distance: string): EventInput[] {
    let total = 0;
    let newEvents = [];

    if (swimDays.length >= 1) {
      newEvents[0] = {
        startRecur: new Date(),
        endRecur: date,
        title: "Long Swim",
        daysOfWeek: [swimDays[0]],
        color: "#000099",
        description: ""
      };
      total++;
    }
    if (swimDays.length >= 2) {
      newEvents[total] = {
        startRecur: new Date(),
        endRecur: date,
        title: "Tempo Swim",
        daysOfWeek: [swimDays[1]],
        color: "#0080FF",
        description: ""
      };
      total++;
      if (swimDays.length >= 5) {
        newEvents[total] = {
          startRecur: new Date(),
          endRecur: date,
          title: "Speed Swim",
          daysOfWeek: [swimDays[2]],
          color: "#0080FF",
          description: ""
        };
        total++;
      }
    }
    if (total < swimDays.length) {
      newEvents[total] = {
        startRecur: new Date(),
        endRecur: date,
        title: "Maintenence Swim",
        daysOfWeek: swimDays.length >= 5 ? swimDays.slice(3) : swimDays.slice(2),
        color: "#0000FF",
        description: ""
      };
    }
    let temp = events.filter(x => !x.title?.includes("Swim"));
    return [
      ...temp,
      ...newEvents,
    ]
  }

  return (
    <div>
      Days a week of swimming:
      <Days setDays={setSwimDays} Days={swimDays} />
    </div>
  );
}
export default Swim;