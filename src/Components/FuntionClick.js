import React from 'react'

function FuntionClick() {
    
  function clickHandler(){
      console.log('Event Handling from funtion component ')
  }
    return (
        <div>
            
            <button  onClick={clickHandler}>Click It</button>
        </div>
    )
}

export default FuntionClick
