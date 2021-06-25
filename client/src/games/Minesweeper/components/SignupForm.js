import React from 'react';

class SignupForm extends React.Component {
    render() {
        return (
            <form>
                <h1 style={{color: "#FAEB2C"}}>Player Name</h1>

                <div className="form-group">
                    <label className="control-label"></label>
                    <input
                        type="text"
                        name="username"
                        />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                      Enter
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;