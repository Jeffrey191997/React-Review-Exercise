import { useState } from "react";
import '../style/stateassignmentone.css'

function StateAssignmentOne() {
  const [count, setCount] = useState(0);
  return (
    <section className="count">
      <button onClick={() => {
        setCount((c) => c+1)
      }}>{count}</button>
    </section>
  )
};

export default StateAssignmentOne;