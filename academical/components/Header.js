import Button from "./Button";

export default function Header(props)
{
    return (
        <div>
            <Button>Calendar</Button>
            <h1>AcademiCal</h1>
            {props.authorized ? <Button>Logout</Button> : <Button>Login</Button>}
        </div>
    );
}