import { useState } from 'react'

const Button = () => {

    const [data, setData] = useState("");

    return (
        <>
        <button onClick={()=>setData("API Data onClick!")}>Click Me!</button>            
            <p>{ data }</p>
        </>
  )
}

export default Button