import { EventInput } from '@fullcalendar/core';

function getBikeDays(events: EventInput[], BikeDays: string[], date: Date): EventInput[]{
  let temp = events.filter(x=> x.title != "Biking");
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

export default getBikeDays;