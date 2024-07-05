import React, { useEffect, useState } from 'react';

function AdventureDetails() {
    const [adventure, setAdventure] = useState(null);
    const adventureId = new URLSearchParams(window.location.search).get('id');

    useEffect(() => {
        async function fetchAdventureDetails() {
            const result = await fetch(`https://makemytrip-backend-w2d2.onrender.com/cities/${adventureId}`);
            const data = await result.json();
            setAdventure(data);
        }

        fetchAdventureDetails();
    }, [adventureId]);

    if (!adventure) {
        return <div>Loading...</div>;
    }

    return (
        <div id="adventure-details">
            <h1>{adventure.city}</h1>
            <img src={adventure.image} alt={adventure.city} />
            <p>{adventure.description}</p>
        </div>
    );
}

export default AdventureDetails;
