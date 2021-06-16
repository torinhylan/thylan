import React from 'react';
// import Hello from './sayHello';
import Tweet from './Tweet';

function App() {
  return(
    <div className="app">
      <h1>These are Tweet components</h1>
      <Tweet name="Torin Hylan" tweet="I'm really digging this pool weather." 
        likes="25.4K" comments="2.3k"/>
      <Tweet name="John Smith" tweet="I know my name is generic but I still matter." 
        likes="102" comments="6"/>
      <Tweet name="Marvel Entertainment" tweet="Loki comes out on wednesdays... stay tuned!" 
        likes="3.4M" comments="240.3K"/>
    </div>
  );


  // // using the say hello function
  // return(
  //   <div>
  //     <h1>This is the first app component</h1>
  //     <Hello />
  //   </div>
  // );


  // // trying out with incrementing a counter
  // let counter = 0;

  // let increaseCounter = () => {
  //   counter = counter + 1;
  //   console.log("You incremented counter to " + counter);
  // };

  // increaseCounter();

  // return(
  //   <div>
  //     <h1>Hello React!</h1>
  //     <button onClick={increaseCounter}>Increment Counter</button>
  //     <h3>{counter}</h3>
  //   </div>
  // );
}

export default App;