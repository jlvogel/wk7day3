

function App() {
  return (
    <div>
      {/*
      Intro to React State

      Learning Objectives:
        Learn about state
        Learn how to declare tsate in a React component
        Learn how to iterate over some data and render it

      Students will be able to:
        1. Understanding Component Driven Development
        2. Understanding Declaritive Programming
        3. Understand the Virtual DOM and it's purpose
        4. Understand React Dev Tools
        5. Build a Simple Todo List Application using Component
           Driven Development, Declarative Programming, The
           Virtual DOM, React Dev Tools

      State 

      State is the particular view of a React component based on it's data.

      We can imagine we have a component that has our shopping cart.

      At first, our cart is empty. Our state would likely be an empty array.

      then we add an item into our cart. We'd push an objcet like this one into our cart:

      {
        itemName: 'Jar of Speculoos',
        description: 'Imagine butter cookies dissolved in butter, made into cookie butter and stored in a jar.  Stop imagining and now buy this!',
        price: 6.99
      }

      Now our view of our shopping cart will change, based on the data or the state of the shopping cart.

      Beginning with the End in Mind

        React, Components, and The Virtual DOM

      Separation of Concerns

      Separation of concerns in web development is the practice of breaking down a web application into distinct parts that each handles a separate concern, such as the user interface, business logic, and data access. This helps to improve maintainability, scalability, and reusability of the application.

      Traditionally Frontend is separated into:

      HTML: Structure

      CSS: Presentation

      JS: Functionality

      A different way of Separating Concerns with Component Driven Development:

      (a different point of view)

      example:

      BUTTON
      DATE PICKER
      MODAL
      LIST
      LIST-ITEM
      MEDIA


      Component Driven Development

      Component Driven Development (CDD) is an approach to web development that makes use of reusable components to create a user interface. It is based on the React JavaScript library and is used to create interactive websites, mobile apps, and other user interfaces. React is a JavaScript library created by Facebook with a focus on performance and scalability.

      CDD makes use of reusable componentst, or "widgets", to create a user interface.-

      Each component is responsible for rendering a specific part of the user interface, and components can be composed together to create a complete user inteface.

      React components are written using JavaScript and the React library provides a set of tools to help developers create and manage components.

      CDD also makes use of a declarative programming style, which makes it easier to write code that is easier to maintain and debug.

      In addition, React's component-driven architucture encourages developers to write modular code, which makes it easier to reuse and update components.

      Finally, React supports server-side rendering, which allows developers to create faster and more responsive user interfaces.

      ***************************************************************
      Component Driven Development is a powerful and efficent approach to web development that is based on the React JavaScript library. It makes use of reusable components and a declarative programming style to create user interfaces that are easy to maintain and debug.  Additionally, React supports server-side rendering, which allows developers to create faster and more responsive user interfaces.
      ****************************************************************


      Declarative Programming

      Declarative programming is a programming style in React that focuses on describing the logic of a program, rather than describing the exact steps the program should take to reach a certain outcome. In React, this is achieved by using components, properties, and state.

      Components are the basic building blocks of React, and are used to represent pieces of user interface. They are composed of HTML, JavaScript, and other languages, and can be reused in different parts of the application. Properties are used to provide data to components, while state is used to store data.

      Declarative programming in React allows developers to focus on the logic of the program, rather than the implementation details. This makes it easier to create responsive, reusable, and testable components.  It also allows for rapid development, since changes can be made without needing to rewrite the entire application.

      ****************************************************************
      Declarative programming in React is an efficient and powerful programming style that allows developers to focus on the logic of their program. It makes applications more responsive and easier to maintain, as well as allowing for faster development.
      ****************************************************************


      The Virtual DOM

      The Virtual DOM is a core concept of React, a JavaScript library used to create user interfaces. The Virtual DOM is a JavaScript representation of the actual DOM, or Document Object Model, which is the tree structure of HTML elements in a web page. The Virtual DOM allows React to make changes to the DOM without having to reload the page or redraw the page.

      The Virtual DOM works by creating a virtual representation of the current DOM and comparing it to the desired state of the DOM. When a change is made, React runs a diffing algorithm which looks for differences between the virtual DOM and the actual DOM. The diffing algorithm then determines which parts of the DOM need to be changed and updates only those parts, instead of having to redraw the entire page. This makes changes to the DOM faster and more efficient.

      React's use of the virtual DOM also allows developers to write more efficient code. Instead of having to write code to manipulate the DOM directly, developers can use React's declarative API to describe the desired state of the DOM, and React will handle the rest. This makes it easier for developers to create complex user interfaces and makes their code less prone to errors.

      ****************************************************************
      The Virtual DOM is a core concept of React that allows it to make changes to the DOM without having to reload the page or redraw the page. It works by creating a virtual representation of the current DOM and comparing it to the desired state of the DOM, and then updating only the parts that need to be changed. This makes it faster and more efficient to make changes to the DOM, as well as easier for developers to create complex user interfaces.
      ****************************************************************




      */}
    </div>
  );
}

export default App;
