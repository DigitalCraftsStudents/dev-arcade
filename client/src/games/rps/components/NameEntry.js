import React from 'react'
import './NameEntry.css'

function NameEntry({handleChange}) {

    const nameEntrySubmit = () => {
        const board = document.getElementById('board')
        const playerEntry = document.getElementById('playerEntry')
        board.style.display = 'block'
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