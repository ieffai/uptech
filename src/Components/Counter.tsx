import { useState } from 'react';
import classes from './Counter.module.scss'


const Counter = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState(state + 1)
    }
  return (
    <div className={classes.btnclass}>
        <h1>{state}</h1>
        <button onClick={increment}>CLICK</button>
    </div>
  )
}

export default Counter