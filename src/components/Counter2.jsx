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
    }
    // sets counter to its current value + 1
    setCounter(counter + 1)
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

