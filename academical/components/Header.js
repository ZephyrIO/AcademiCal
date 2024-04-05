import Button from "./Button";
import './Header.css';

export default function Header(props)
{
    return (
        <div className="header">
            <Button>Calendar</Button>
            <h1 className="title">AcademiCal</h1>
            {props.authorized ? <Button>Logout</Button> : <Button>Login</Button>}
        </div>
    );
}