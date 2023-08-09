import { EventInput } from '@fullcalendar/core';

function getRunDays(events: EventInput[], RunDays: string[], date: Date): EventInput[]{
  let temp = events.filter(x=> x.title != "Running");
  return [
    ...temp,
    {
      start: new Date(),
      end: date,
      title: "Running",
      daysOfWeek: RunDays,
      color: "Orange"
    },
  ]
}

export default getRunDays;