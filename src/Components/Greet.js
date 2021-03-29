import React from 'react'



const Greet = ({name, done}) => {
 //console.log(props)
 return(
<div>
     <h1> Hello from {name} a.k.a {done} </h1>
 
</div>
 
 
 )
 }
 export default Greet



// lec : 12 : Destructuring in funtional components 
// In this, we can accept any no of parameter passed by App.js component and recieve it just writing it 
// in parameter without using props
//  const Greet = ({name, done}) => {
//      //console.log(props)
//      return(
//     <div>
//          <h1> Hello from {name} a.k.a {done} </h1>
     
//     </div>
     
     
//      )
//      }







 // lecture 9 
// const Greet = (props) => {
//     console.log(props)
//     return(
//    <div>
//         <h1> Hello World {props.name} a.k.a {props.children} </h1>
//         {props.children}

//    </div>

//export const Greet = () => <h1> Hello Tushar from Arrow concepts</h1>
// we can write this way but while importing this, we must need keep the
//same as of the component.







// function Greet()
// {
//     return <h1> Hello tulsi </h1>
// }