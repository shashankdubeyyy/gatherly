import { useEffect, useState } from "react";
import API from "../api";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        API.get("/api/events")
            .then((res) => setEvents(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Events</h2>

            {events.length === 0 && <p>No events found</p>}

            {events.map((event) => (
                <div
                    key={event._id}
                    style={{ border: "1px solid gray", margin: 10, padding: 10 }}
                >
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <button>Join</button>
                </div>
            ))}
        </div>
    );
}
