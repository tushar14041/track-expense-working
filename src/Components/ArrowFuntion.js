import React, { Component } from 'react'

 class ArrowFuntion extends Component {
 
    SayHello(cmt){
      console.log(cmt)
  }
  

    render() {
        return (
            <div>
             <button onClick={() => this.SayHello("hello")}> Click me</button>
             
            </div>
        )
    }
}

export default ArrowFuntion



// passing value to a funtion from an event using arrow funtion
// <div>
// <button onClick={() => this.SayHello("hello")}> Click me</button>

// </div>


// From the web : stackOverflow   https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
// Easy Way
// Use an arrow function:

// return (
//   <th value={column} onClick={() => this.handleSort(column)}>{column}</th>
// );
// This will create a new function that calls handleSort with the right params.

// Better Way
// Extract it into a sub-component. The problem with using an arrow function in the render call is it will create a new function every time, which ends up causing unneeded re-renders.

// If you create a sub-component, you can pass handler and use props as the arguments, which will then re-render only when the props change (because the handler reference now never changes):

// Sub-component

// class TableHeader extends Component {
//   handleClick = () => {
//     this.props.onHeaderClick(this.props.value);
//   }

//   render() {
//     return (
//       <th onClick={this.handleClick}>
//         {this.props.column}
//       </th>
//     );
//   }
// }
// Main component

// {this.props.defaultColumns.map((column) => (
//   <TableHeader
//     value={column}
//     onHeaderClick={this.handleSort}
//   />
// ))}