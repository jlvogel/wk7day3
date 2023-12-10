// The useEffect Hook

// Here is our counter component from earlier with a console.log and second piece of state.

import { useState } from "react"

export default function Counter(props) {
  // Declare the state
  const [counter, setCounter] = useState(0)
  // second piece of state
  const [evenCounter, setEvenCounter] = useState(0)

  console.log("I'm just a random log")

  // Function to add one to the state
  const addOne = () => {
    // if counter is even before the update, update evenCounter
    if (counter %2 === 0) {
      setEvenCounter(evenCounter + 1)
      /// this happens every OTHER time the button is clicked
    }
    // sets counter to its current value + 1
    setCounter(counter + 1)
    /// this happens every time the button is clicked
  }

  // The h1 display the counter and button runs addOne function
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{evenCounter}</h1>
      <button onClick={addOne}>Click Me to Add One</button>
    </div>
  )
}

/*
So right now this component displays both counter in its JSX

  when we click the button counter will always go up by 1

  if counter is even before it is increased, evenCounter will go

Any code in the function body will run again on every render of the component. The component will render with every change of state. So in this case if we keep clicking the button that console.log will run again and again.

What if we only want it to run when evenCounter changes.

This is where the useEffect hook comes into play. This hook is a function that takes two argunments:

  1. A function that will be run immediately when the component loads and anytime any value in the second argument changes

  2. An array of values, when they change the function will run again. Usually an empty array if you never want the function to run again.
*/

/// NOTES CONTINUE IN Counter3.jsx -> The useEffect Hook

