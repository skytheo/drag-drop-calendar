import { type } from "@testing-library/user-event/dist/type"

export type Day = {
    date: number
    events: Event[]
}

export type Event = {
    type: string
    contents: string
}

export type Month = {
    days: Day[]
    start: string
    name: string
    numDays: number
}

const newMonth = (): Month => {
    return {
        name: "October",
        start: "Monday",
        numDays: 31,
        days: [
            {date: 1, events:[{type:"Other", contents:"Dr. appointment"}]},
            {date: 2, events:[{type:"Run", contents: "3mi"}]},
            {date: 5, events:[{type:"Bike", contents: "Hill repeats"}]},
            {date: 12, events:[{type:"Run", contents: "Tempo session"}]},
            {date: 24, events:[{type:"Swim", contents: "1500yds"}, {type:"Bike", contents:"15mi"}]},
            {date: 31, events:[{type:"Run", contents: "5K Race"}]}
        ]
    }
}