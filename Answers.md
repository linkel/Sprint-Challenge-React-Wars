# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a Javascript framework that tries to expedite the process of building web applications. It seeks to encourage reusable components, ameliorate the difficulty of DOM manipulation, and provide data-handling via state and properties in its applications. 

1.  What does it mean to _think_ in react?
To me, thinking in React is to visualize construction of a web application by separating it into its pieces that are purely functional, and pieces that are data-containing/data-operating. Parts of the site that hold data and operate on data will control any logic or calculation that happens, and they will pass along properties and information to the purely functional pieces to display. So in one way the data-holders are like water reservoirs and pumps and the functional pieces are the pipes and the endpoint.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A stateful component contains state and data. The syntax uses Class MyThing extends React.Component, and needs a constructor and a super just like any javascript class. A stateful component will manage what information is sent to the functional/presentational component. A functional/presentational component will receive properties from the stateful component and display it. It can also receive user input and send it back to the stateful component. 

1.  Describe state.
State is another term for data storage. Within a React component, state is an object that contains changeable information so that the previous state of the information is known, and so that information can be passed along to other components.

1.  Describe props.
Props, meaning properties, are one-way chunks of information that will flow from the stateful components to a functional component. Upon reaching a functional component they are used to display data to the user or to receive information that will make its way back to the parent/state by means of the functions that are passed as props into the child component. 