import React from 'react';

class SignupForm extends React.Component {
    render() {
        return (
            <form>
                <h1 style={{color: "#FAEB2C", fontFamily: "primary-font", fontSize: "50px"}}>Player Name</h1>

                <div className="form-group">
                    <label className="control-label"></label>
                    <input
                        type="text"
                        name="username"
                        style={{backgroundColor:"#1685F8", color:"#FAEB2C", textAlign:"center", fontSize:"30px", marginBottom:"15px",fontFamily: "primary-font"}}
                        />
                </div>
                <div className="form-group">
                    <button  className="btn btn-primary btn-lg" style={{backgroundColor: "#E900FF", color: "yellow", fontFamily: "primary-font", fontSize: '40px', marginTop: "10px"}}>
                      Enter
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;