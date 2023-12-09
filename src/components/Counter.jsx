import { useState } from "react"
// useState is a hook

export default function Counter(props) {
  // Declare the state
  const [counter, setCounter] = useState(0) // STEP #2 (I think)

  // Function to add one to the state
  const addOne = () => {
    // sets counter to its current value + 1
    setCounter(counter + 1) // STEP #1
  }

  // The h1 display the counter and button runs addOne function
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addOne}>Click Me to Add One</button>
    </div>
  )
}

/* What happens when the button is clicked?

  1. setCounter is passed the current value + 1
  
  2. React then compares this new value to the old value of counter

  3. If they are the same, React does nothing (beware of references as values when it comes to objects and arrays, make sure you understand pass by value vs pass by reference remember the arthurshouse taraleeshouse example from unit 1) /// yeah sorry i don't haha, but I do understand difference between pass by value and pass by reference.

  4. If they are different then React updates its VirtualDOM based on a re-render of the component and its children

  5. It then compares the virtualDOM to the real browser DOM and only updates the places in which they differ.

The above process is why variables that are "State" are reactive, meaning the DOM will updates when the value updates. All other variables are not reactive and will not trigger updates when changed.

NOTE: If the state is an object or array, make sure you pass a new array or object and not just modify the old one. objects and Arrays are reference types, so if you pass the old array with modified values the references will still be equal so there will be no update to the DOM.

Example...

Don't do this:

// modify the existing state
state[0] = 6
// then setState  as the existing state, triggering NO update
setState(state)

also don't do this:

// these two variables are both pointing to the same position in memory
const updatedState = state
// no update is triggered
setState(updatedState)

 */