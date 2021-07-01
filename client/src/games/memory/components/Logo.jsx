import React from "react";
import MemoryLogo from "./MemoryLogo.png"

function Logo(){
    return(
    <div>
        <img className="logo" src={MemoryLogo} alt="logo"/>
    </div>
    )
}

export default Logo;