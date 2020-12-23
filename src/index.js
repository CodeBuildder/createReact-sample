import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {

  const [count, setCount] = useState(props.count)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount((props.count))
  }

    return(
      <div>
       <p>Current Count: {count}</p>
       <button onClick={increment}>Add</button>
       <button onClick={decrement}>Subtract</button>
       <button onClick={reset}>Reset</button>
      </div>
    )
}

App.defaultProps = {
  count: 0
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

