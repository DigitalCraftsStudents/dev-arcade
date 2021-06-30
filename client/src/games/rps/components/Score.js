import './Score.css';

function Score(props) {
    return (
        <div id="score">
            <h2>Username</h2>
            <span>Score : {props.amount}</span> <span>Moves : {props.moves}</span>

        </div>

    )

}

export default Score