import AddEvent from "@/components/AddEvent";
import {useState} from 'react';


function Home() {
    const testEvent = [
        {
            id: '1',
            title: 'test',
            description: 'test',
            image: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    ];
    const  [events, setEvents] = useState(testEvent);
    const addEventHandler = (event) => {
        setEvents([...events, event]);
    };
        
    return (
        <div>  
            <AddEvent onAdd={addEventHandler}/>
        </div>
    );
    
}
export default Home;
