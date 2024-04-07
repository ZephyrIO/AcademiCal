import './EventDate.css';
export default function EventDate(props)
{
    const date = new Date(props.date);

    return(
        <p>{date.toDateString()}</p>
    );
}