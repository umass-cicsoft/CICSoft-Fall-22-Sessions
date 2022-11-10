# React tutorial

## What's React? [Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library))
React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

## Learn more about React? [Reactjs.org](https://reactjs.org/)
Explore the docs above to take a deeper dive into today's topics. Alternatively, the youtube playlist [Full Modern React Tutorial](https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d) by Net Ninja has been very useful.


## Setting a react app
Create a react app with a file name called "learning-react":
``` 
$npx create-react-app learning-react
```
Head over to src/App.js to edit the code.


## Introduction to JSX
JSX is pretty much HTML, but with some minor changes. The main differences being HTML's 'for' tag, and 'class' tag are both replaced with 'HTMLfor' and 'className' tag to avoid the compiler from getting confused between HTML and JS. It also allows you to use JS inside of HTML by using curly braces '{}', which can be used for replacing data in HTML.

```JSX
const user = 'Xeze';
const element = <h1>Hello, {user}!</h1>;
```

The easiest way to run the following code is to drop it in src/App.js file:

```JS
function App() {
  const user = 'Xeze';
  return (
    <div className="card">
      <h1>Hello, {user}!</h1>
    </div>
  )
}
```

React created the following HTML code which follows a structure similar to the original JSX code:

```HTML
<div id="root">
  <div class="card">
    <h1>Hello, Xeze!</h1>
  </div>
</div>
```


## Components

Components are the best way to refactor code. Any JSX code can be modularized and written into its own JS file called a component. A component must just return a single JSX element. The following code is a componenent, and it should be added to be found in src/GreetingCard.js:

```JS
function GreetingCard() {
    const user = 'Xeze';
    return (
        <div className="card">
        <h1>Hello, {user}!</h1>
        </div>
    );
}

export default GreetingCard;
```

To run this component, we need to import it into the App.js file:

```JS
import GreetingCard from './GreetingCard';

function App() {
  return (
    <GreetingCard />
  )
}

export default App;
```

The above code together produces the same output as earlier, but now GreetingCard can be used anytime in the App.js file.


## Props

Components work like templates for any data. Whereas if variables need to be introduced, one would need to use props (short for properties) to pass data into a component. To allow so, one must also have a props argument when defining a component:

```JS
function PropGreetingCard(props) {
    const user = props.name;
    return (
        <div className="card">
        <h1>Hello, {user}!</h1>
        </div>
    );
}

export default PropGreetingCard;
```

To call the component with the prop, one must do the following:

```JS
function App() {
  return (
    <PropGreeting name="Xeze"/>
  )
}

export default App;
```

Components help you render stuff easily on to the page. For example, one could render Hello Bob! 10 times, in the following way.
```js
function App() {
  let fields = [];
  for (let i = 0; i < 10; i++) {
    fields.push(<PropGreetingCard name="Bob" />);
  }
  return (
    <div className="App">
      {fields}
    </div>
  )
}
```
By running the above code, it renders Hello Bob! 10 times on to the screen.


## Hooks

Hooks are useful way of writing react code without having to write classes. You can build your own hooks, but the most used hooks are called `useState` and `useEffect`.


### useState hook [Reactjs docs](https://reactjs.org/docs/hooks-state.html)

Variables that need to be changed in the page can be initialized in the following way:
```JS
const [count, setCount] = useState(0);

// count is a variable initialized to 0, setCount is a function can be used to change the data

// Accessing count in JSX can be done like this:
{count}

// Changing the value of count can be done in the following way
setCount(5);

// This causes the value of count to change to 5, and it will automatically re-render it onto the screen
```

Here is a simple counter in React. Create a file called Counter.js and add the following code (A component):
```js
import React, { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
        <button onClick={incrementCounter}>
            Click me Daddy!
        </button>
    </div>
  );
}

export default Counter;
```