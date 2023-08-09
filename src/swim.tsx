import { EventInput } from '@fullcalendar/core';

function getSwimDays(events: EventInput[], swimDays: string[], date: Date): EventInput[]{
  let temp = events.filter(x=> x.title != "Swimming");
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

export default getSwimDays;