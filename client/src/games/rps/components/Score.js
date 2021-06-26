import React from 'react';
import styled from 'styled-components';
import './Score.css'


function Score(props) {
    return (

        <div id="score">
            {/* <h2>3 : 2</h2> */}
            <p>{props.amount}</p>
        </div>

    )

}

export default Score