import React, {useState} from 'react'
import { connect, useSelector, useDispatch } from "react-redux"; 
import { playerName, resume } from '../actions'

function Form({playerName}) {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { credential } = game;
    const [username, setUsername] = useState('')
    const _handleChange = (name) => {
        setUsername(name)
    }
    const _handleFormSubmit = (e) => {
        e.preventDefault()
        playerName({
            name: username
        })
        setUsername('')
        dispatch(resume());
    }

    return (
        <>
        {credential != null?
        <></>
        :
        <div>
            <form onSubmit={event => _handleFormSubmit(event)}>
                <label> Username
                    <input type='text' name='username' placeholder='enter name' onChange={event => _handleChange(event.target.value)} value={username}>
                    </input>
                </label>
                <button type='submit' >
                    Submit
                </button>
            </form>
        </div>
        }
        </>
    )
}

export default connect(null, {playerName}) (Form);