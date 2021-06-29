import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actionType from '../games/counter/actions/index.js'
import { Provider } from 'react-redux';
import { reduxStore } from '../games/counter/store'

function ReduxGame(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [score, setScore] = useState(0)
    const [game, setGame] = useState('Tetris')
    const [credentials, setCrendentials] = useState([])

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleScore = (e) => {
        setScore(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCrendentials([firstName, lastName, score, game])
    }

    const addScoreToCredentials1 = (credentials, e) => {
        e.preventDefault();
        props.addScoreToCredentials(credentials)
    }


    

    return (
        <Provider store={reduxStore}>
            <div>
                <input type='text' placeholder='First Name' onChange = {handleFirstName}></input>
                <input type='text' placeholder='Last Name' onChange = {handleLastName}></input>
                <input type='number' placeholder='Enter Score' onChange = {handleScore}></input>
                <input type='hidden' value='tetris'></input>
                <button type='submit' onClick = {handleSubmit}>Submit</button>   
                <button type='submit' onClick = {addScoreToCredentials1(credentials)}></button>
            </div>
        </Provider>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         credentials: state.credentials
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addScoreToCredentials: (credentials) => dispatch(actionType.actionAddScore(credentials))
    }
}

export default connect(null, mapDispatchToProps)(ReduxGame)