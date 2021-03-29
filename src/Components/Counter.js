import React, { Component } from 'react'

class Counter extends Component {
    
    render() {
    
          const { name, done} =this.props
              return(
                  <h1> Hellow jaipur {name}</h1>
              )
          
        
    }
}

export default Counter



// lec : 12 : Destructuring in class components ( check in funtional also )
// In this, we can accept any no of parameter passed by App.js component and recieve it just writing it 
// in following lines, 1st line written in the render() below.
// class Counter extends Component {
    
//     render() {
    
//           const { name, done} =this.props
//               return(
//                   <h1> Hellow jaipur {name}</h1>
//               )
          
        
//     }
// }


// lecture : 11 // set state with previous state of the component. like calling increment five times from a funtion 
//will only change the state of the component only once. but will be called five times. for this we set previous state.

// class Counter extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count:0
//         }
//     }
   
//     increment(){
//         // this.setState({  
//         //  count : this.state.count + 1       
 
//         // }, () => {
//         //     console.log(' Callback value : ', this.state.count)
//         // })

//         this.setState(prevState => ({
//             count : prevState.count + 1
//         }))

//       // this.state.count=this.state.count + 1
//        console.log(this.state.count)
//     }
//     incrementFive(){
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//     }
//     render() {
//         return (
//             <div>
//                 Counter : {this.state.count} <br/>
//                 <button onClick={() => this.incrementFive()}>Increment</button>
                
//             </div>
//         )
//     }
// }





//1. Always make use of setState and never modify the state directly
//2. Code has to be executed after the state has been updated ? Place that code in the call back funtion
// which is the second argument to the setState method
//3. When you have to update state based on the previous state value, pass in a funtion as an argument 
// instead of the regular object.