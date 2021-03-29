import React from 'react'

function ChildComponent(props) {

    return (
        <div>
         <button onClick={() => props.greetHandler('Child')}> Greet Parent </button>
        </div>
    )
}
export default ChildComponent

//lecture 15
// parentComponent se jo parameter aaye use props me store krke greetHandler ko call kiya jo ki parentComponent ke andar hai