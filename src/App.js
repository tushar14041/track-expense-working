import React, { Component } from 'react'
// import ReactDOM from 'react-dom';

import Category from './Category'
import Home from './Home'
import Expenses from './Expenses'
import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom'
import hello from './Yello'


class App extends Component {

  render() {
    return (
     <Router>
       <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/categories' exact={true} component={Category} />
          <Route path='/expenses' exact={true} component={Expenses} />
          <Route path='/hello' exact={true} component={hello} />

      </Switch>
     </Router>

    )
      // "proxy": "http://localhost:8080",

  // "proxy": "https://expense-app-1404.herokuapp.com",
  }
}

export default App

















// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import  Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
// import Message from './Components/Message'
// import Counter from './Components/Counter';
// import FuntionClick from './Components/FuntionClick';
// import ClassClick from './Components/ClassClick';
// import ArrowFuntion from './Components/ArrowFuntion';
// import Callback from './Components/Callback';
// import ParentComponent from './Components/ParentComponent';
// import ConditionalRendering from './Components/ConditionalRendering';
// import ListRendering from './Components/ListRendering';
// //import Category from './Category';
// import Home from './Home';

// function App() {
  
//   return (
   
//     <div className="App">
//       {/* <Home /> */}
//       {/* <h2> Hello </h2> */}
//       {/* <Category/> */}
//       {/* <ListRendering ></ListRendering> */}


//      </div>
//   );
// }

// export default App;


//some lecture before 16th 
//  {/* <ConditionalRendering /> */}

//       {/* <ParentComponent /> */}
//   {/* <Callback /> */}


// Destructuring example
// function App() {
//   return (
//     <div className="App">
//     <Greet name="Tulsi Khatri" done="Engineering" />
//      </div>
//   );
// }



// function App() {
//   return (
//     <div className="App">

//        <Greet name="Tushar Khatri" heroName="Hulk">
//         <p> This is the paragraph tag in the greet component</p>
//       </Greet>
     
//       <Greet name="Ranjan" heroName="Hawkeye">
//       </Greet>

//        <Greet name="Mani Khatri" heroName="Ronin">
//       </Greet>

//      <Greet>
//        <button>Buttun</button>
//      </Greet>
//        <Welcome name="IronMan" />
      
//       <Welcome name="Captain America">
//         <p> Hello India </p>
//       </Welcome>
//     </div>
//   );
// }

// while importing Greet we can also use other component name, but path should be the same.