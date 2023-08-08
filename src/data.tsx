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

const newMonth: Month = {
        name: "October",
        start: "Monday",
        numDays: 31,
        days: [
            {date: 1, events:[{type:"Other", contents:"Dr. appointment"}]},
            {date: 2, events:[{type:"Run", contents: "3mi"}]},
            {date: 3, events:[]},
            {date: 5, events:[]},
            {date: 5, events:[{type:"Bike", contents: "Hill repeats"}]},
            {date: 6, events:[]},
            {date: 7, events:[]},
            {date: 8, events:[]},
            {date: 9, events:[]},
            {date: 10, events:[]},
            {date: 11, events:[]},
            {date: 12, events:[{type:"Run", contents: "Tempo session"}]},
            {date: 13, events:[]},
            {date: 14, events:[]},
            {date: 15, events:[]},
            {date: 16, events:[]},
            {date: 17, events:[]},
            {date: 18, events:[]},
            {date: 19, events:[]},
            {date: 20, events:[]},
            {date: 21, events:[]},
            {date: 22, events:[]},
            {date: 23, events:[]},
            {date: 24, events:[{type:"Swim", contents: "1500yds"}, {type:"Bike", contents:"15mi"}]},
            {date: 25, events:[]},
            {date: 26, events:[]},
            {date: 27, events:[]},
            {date: 28, events:[]},
            {date: 29, events:[]},
            {date: 30, events:[]},
            {date: 31, events:[{type:"Run", contents: "5K Race"}]}
        ]
}

export default newMonth;