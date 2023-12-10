/// The useEffect Hook

// What if we only want it to run when evenCounter changes.

// This is where the useEffect hook comes into play. This hook is a function that takes two argunments:

//   1. A function that will be run immediately when the component loads and anytime any value in the second argument changes

//   2. An array of values, when they change the function will run again. Usually an empty array if you never want the function to run again.

import { useState, useEffect} from "react"

export default function Counter(props) {
  // Declare the state
  const [counter, setCounter] = useState(0)
  // second piece of state
  const [evenCounter, setEvenCounter] = useState(0)

  // making sure console.log only runs on certain renders
  useEffect(() => {
    console.log("I'm just a random log")
  }, [evenCounter])

  // Function to add one to the state
  const addOne = () => {
    // if counter is even before the update, update evenCounter
    if (counter % 2 === 0) {
      setEvenCounter(evenCounter +1)
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
/*
So notice the useEffect receives a function that executes our log, and we also gave it an array with evenCounter in it. This means...

  The function will run once when the component is first loaded

  The function will run again only when evenCounter changes

  useEffect is more regularly used for API calls. Usually you'll call the API, get the data then update state inside a useEffect to prevent an infinite loop from occurring.

  const getSomethingFromAPI = async(url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setState(data)
    }catch(e){
      console.error(e)
    }
  }
  useEffect(() => {
    getSomethingFromAPI('api url')
  },[])

/// It will be nice when I understand the abvove - one day....

Also if the function given to useEffect returns a function, the returned function will be run when the component is removed from the DOM useful for removing event listeners that may be left behind (not something that should come up often)

/// Well that's good because I have no idea what the hell you're talking about
/// haha no, I kinda do......

*/
