import { useState } from 'react'
import '../style/stateassignmenttwo.css'

function StateAssignmentTwo() {
  const [numbers, setNumber] = useState([]);

  return (
    <section className='assignment-2'>
      <button onClick={() => {
        const result = Math.floor(Math.random() * 10);
        setNumber([...numbers, result])
      }} className="click-me">
        Click Me!
      </button>
      <ul className='num-list'>
        {numbers.map((e, index) => {
          return <li key={index}>{e}</li>
        })}
      </ul>
    </section>
  )
}

export default StateAssignmentTwo