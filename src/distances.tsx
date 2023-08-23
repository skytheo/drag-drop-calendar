export function getDistances(distance: string): number[] {
    const sprintSwimStart = 0;
    const sprintSwimEnd = 750;
    const sprintBikeStart = 0;
    const sprintBikeEnd = 12.5;
    const sprintRunStart = 0;
    const sprintRunEnd = 3.1;

    const olympicSwimStart = sprintSwimEnd;
    const olympicSwimEnd = 1500;
    const olympicBikeStart = sprintBikeEnd;
    const olympicBikeEnd = 25;
    const olympicRunStart = sprintRunEnd;
    const olympicRunEnd = 6.2;

    const halfSwimStart = olympicSwimEnd;
    const halfSwimEnd = 2000;
    const halfBikeStart = olympicBikeEnd;
    const halfBikeEnd = 56;
    const halfRunStart = olympicRunEnd;
    const halfRunEnd = 13.1;

    const fullSwimStart = halfSwimEnd;
    const fullSwimEnd = 4000;
    const fullBikeStart = halfBikeEnd;
    const fullBikeEnd = 112;
    const fullRunStart = halfRunEnd;
    const fullRunEnd = 26.2;

    switch (distance) {
        case "Sprint": return [sprintSwimStart, sprintSwimEnd, sprintBikeStart, sprintBikeEnd, sprintRunStart, sprintRunEnd];
        case "Olympic": return [olympicSwimStart, olympicSwimEnd, olympicBikeStart, olympicBikeEnd, olympicRunStart, olympicRunEnd];
        case "70.3": return [halfSwimStart, halfSwimEnd, halfBikeStart, halfBikeEnd, halfRunStart, halfRunEnd];
        case "140.6": return [fullSwimStart, fullSwimEnd, fullBikeStart, fullBikeEnd, fullRunStart, fullRunEnd];
        default: return [];
    }
}

export function calculatePercent(date:Date, distance: string):number{
    let weeks = Math.round((date.getTime() - Date.now())/1000*60*60*24*7);
    let taper= distance === "70.3" ? 2 : distance === "140.6" ? 3 : 1;
    let percent = 1/(weeks - (weeks-taper)/4);
    if(percent > 25){//fix once we have a starting point
      alert("You have chosen a date that would require more than 20% increase week over week which is not recommended");
    }
    return percent;
}