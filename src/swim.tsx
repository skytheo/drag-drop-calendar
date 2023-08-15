import { EventInput } from '@fullcalendar/core';
import React, { useEffect, useState } from 'react';
import Days from './days';

const Swim = (props: any) => {
  const [swimDays, setSwimDays] = useState<string[]>([]);
  useEffect(() => {
    props.setEvents(getSwimDays(props.events, swimDays, props.date));
  }, [swimDays]);

  function getSwimDays(events: EventInput[], swimDays: string[], date: Date): EventInput[] {
    let total = 0;
    let newEvents = [];
    if (swimDays.length >= 1) {
      newEvents[0] = {
        start: new Date(),
        end: date,
        title: "Swimming",
        daysOfWeek: [swimDays[0]],
        color: "Green",
        description: "Long Swim"
      };
      total++;
    }
    if (swimDays.length >= 2) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Swimming",
        daysOfWeek: [swimDays[1]],
        color: "Yellow",
        description: "Tempo Swim"
      };
      total++;
      if (swimDays.length >= 5) {
        newEvents[total] = {
          start: new Date(),
          end: date,
          title: "Swimming",
          daysOfWeek: [swimDays[2]],
          color: "Yellow",
          description: "Tempo Swim"
        };
        total++;
      }
    }
    if (total < swimDays.length) {
      newEvents[total] = {
        start: new Date(),
        end: date,
        title: "Swimming",
        daysOfWeek: swimDays.length >= 5 ? swimDays.slice(3) : swimDays.slice(2),
        color: "Blue",
        description: "Maintenence Swim"
      };
    }
    let temp = events.filter(x => x.title != "Swimming");
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