import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler()
     {
         console.log('Event Handling from class component ')
     }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click on Button</button>
                
            </div>
        )
    }
}

export default ClassClick
 
