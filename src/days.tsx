const Days = (props: any) => {
    function setDaysOnClick(day: string){
        if(!props.Days.includes(day)){
            props.setDays([...props.Days, day]);
        } else {
            props.setDays(props.Days.filter((x:string)=> x !== day));
        }
    }
    let names=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let buttons = [];
    for(let i =0; i< 7;i++){
        buttons.push(
        <button onClick={() => setDaysOnClick(i.toString())} 
            className={props.Days.includes(i.toString()) ? "selected":"unselected"}>{names[i]}</button>
        );
    }
    return <div className="child">{buttons}</div>;
}
export default Days;