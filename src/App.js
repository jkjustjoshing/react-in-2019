import React from 'react';
import logo from './logo.svg';
import './App.css';
import useForceUpdate from './useForceUpdate'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HeroLink text='Learn React' />
      </header>
    </div>
  );
}


// DO NOT DO THIS!!!
// THIS IS A DEMONSTRATION OF WHAT REACT IS *SORT OF*
// DOING IN THE BACKGROUND FOR useState() HOOK. DO NOT
// REPLECATE THIS METHOD.
let counter = 0
let setCounter = (newVal) => {
  counter = newVal
  // Somehow tell React to re-render
}
// end of DO NOT USE THIS


const HeroLink = (props) => {

  const { text } = props
  const forceUpdate = useForceUpdate()

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1)
          forceUpdate()
        }}
      >Increment</button> - {counter}
      <br />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </div>
  )
}

// // Class example of component state and lifecycle methods
// class HeroLink extends React.Component {

//   state = { red: true, counter: 0 }

//   componentDidMount() {
//     this.timeout = setTimeout(() => {
//       this.setState({ red: false })
//     }, 2000)
//   }

//   componentDidUpdate() {
//     this.timeout = setTimeout(() => {
//       this.setState({ red: !this.state.red })
//     }, 2000)
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timeout)
//   }

//   render() {
//     const { text } = this.props

//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({ counter: this.state.counter + 1})
//           }}
//         >Increment</button> - {this.state.counter}
//         <br />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ background: this.state.red ? 'red' : 'transparent' }}
//         >
//           {text}
//         </a>
//       </div>
//     )
//   }
// }


export default App;
