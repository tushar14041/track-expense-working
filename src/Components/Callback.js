import React, { Component } from 'react'

class Callback extends Component {

//  constructor(){
//      super()

  

// }
    filterItems(){
        var todos = [ 
            {
                title : ' Avengers ',
                isDone : true
            },{
                title : ' Endgame ',
                isDone : true
            },{
                title : ' Logan ',
                isDone : false
            },{
                title : ' Evil dead ',
                isDone : false
            }        
    
        ]
       // const thingsDone = 
       console.log(todos.filter((todo) => todo.isDone == false))
      //console.log(todos)
      
    }
    render() {
        return (
            <div>
              <button onClick={this.filterItems}>Click to filter</button>

            </div>
        )
    }
}

export default Callback





// Here matter of scope ( paranthisis ) really matters. ( stucked for 2 hours )
// if todos is written outside of the funtion then I don't know how to do that as of now.