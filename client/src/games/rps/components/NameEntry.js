import React from 'react'
import './NameEntry.css'

function NameEntry({handleChange}) {

    const nameEntrySubmit = () => {
        const playerEntry = document.getElementById('playerEntry')
        playerEntry.style.display = 'none'
    }

    return (
        <div id='playerEntry'>
            <label for='playerName'>Enter player name here:<br></br>
                <input type='text' id='playerName' onChange={handleChange} placeholder='Player name here...'/>
                <button id="submitButton" type='button' onClick={nameEntrySubmit}>Submit Name</button>
            </label>
        </div>
    )
}

export default NameEntry