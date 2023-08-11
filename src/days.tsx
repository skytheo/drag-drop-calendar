const Days = (props: any) => {
    return (
    <>
    <button onClick={() => props.setDays([...props.Days, "0"])}>Sun</button>
    <button onClick={() => props.setDays([...props.Days, "1"])}>Mon</button>
    <button onClick={() => props.setDays([...props.Days, "2"])}>Tue</button>
    <button onClick={() => props.setDays([...props.Days, "3"])}>Wed</button>
    <button onClick={() => props.setDays([...props.Days, "4"])}>Thu</button>
    <button onClick={() => props.setDays([...props.Days, "5"])}>Fri</button>
    <button onClick={() => props.setDays([...props.Days, "6"])}>Sat</button></>
    );
}
export default Days;