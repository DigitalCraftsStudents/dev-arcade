import React, { useState, useRef } from 'react';


const App = () => {
  const [timer, setTimer] = useState(3595)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="app">
      {/* <h3 style={{color: "#E900FF"}}>React Stopwatch</h3> */}
      <div className='stopwatch-card' style={{color: "#FAEB2C", fontSize: '40px', fontFamily: "primary-font"}}>
        <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart} style={{backgroundColor: "#E900FF", color: "yellow", fontFamily: "primary-font", fontSize: '40px', marginRight: "10px"}}>Start</button>
              : (
                isPaused ? <button onClick={handlePause} style={{backgroundColor: "#E900FF", color: "yellow", fontFamily: "primary-font", fontSize: '40px', marginRight: "10px"}}>Pause</button> :
                  <button onClick={handleResume} style={{backgroundColor: "#E900FF", color: "yellow", fontFamily: "primary-font", fontSize: '40px', marginRight: "10px"}}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}style={{backgroundColor: "#E900FF", color: "yellow", fontFamily: "primary-font", fontSize: '40px'}}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;