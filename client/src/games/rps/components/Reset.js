import './Reset.css'

function Reset(props) {
    return(
        <div id="resetDiv">
            <button id="reset" onClick={props.onClick}>Reset</button>
        </div>
    )

}

export default Reset