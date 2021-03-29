import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn : false
        }

    }
    

    render() {
        
            // We will print this based on the condition, if loggedin then Welcome Tushar else Hello Guest
            // <div>
            //     <h1> Welcome Tushar </h1>
            //     <h1> Hello Guest </h1>
            // </div>

            // 1st Way -- If/ Else
            // if(this.state.isLoggedIn){
            //     return <div> Welcome Tushar</div>
            // }else
            // {
            //   return <div> Hello Guest </div>
            // }

            //2nd Way -- Element Variables
        //     let message 
        //     if(this.state.isLoggedIn)
        //     {
        //         message=<div> Welcome Tushar</div>
        //     }
        //     else{
        //         message=<div> Hello Guest </div>
        //     }
        // return <div> {message} </div>

            // 3rd Way -- Ternary Conditional Operators
           // return this.state.isLoggedIn ? (<div> Welcome Tushar </div>) : (<div> Hello Guest </div>)
        
        // 4th Way -- Short circuit Operator
        return this.state.isLoggedIn && <div> Welcome Tushar</div>
        // if first contion is true then it will go to div tag. otherwise nothing will be returned
    }
}

export default ConditionalRendering



// Lecture 16 --  Conditional rendering   
// 1st Way -- If/ Else
//2nd Way -- Element Variables
// 3rd Way -- Ternary Conditional Operators
// 4th Way -- Short circuit Operator
