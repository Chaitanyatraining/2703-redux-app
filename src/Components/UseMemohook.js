import React, { useState, useMemo } from 'react'

const UseMemohook = () => {
    // the useMemo hook in react is to optimize the performance of your
    // component by memorizing the result of expensive calculations. it allows
    //  you to cache the result of a function and only compute if when
    //  the dependencies of the funciton have changed.
    const [someBool, setSomeBool] = useState(false)
    const [amount, setAmount] = useState(10000)

    const expensiveFunction = () => {
        const data = []
        for(let i = 0; i<= amount; i++){
            if(i%2 ===0){
                console.log(i)
                data.push(i)
            }
        }
        return data
    }

    const calculationData = useMemo(() => expensiveFunction(), [amount])

  return (
    <div>
        <h2>UseMemohook</h2>
        <h4>Current value: {someBool ? 'true' : 'false'}</h4>
        <button
            onClick={() => setSomeBool(prevsState => !prevsState)}
        >Change</button>
        <button 
        onClick={()=>setAmount(prevsState => prevsState + 100)}
        >Add Amount</button>
        {
            calculationData && calculationData.map((val) => {
                return <p>{val}</p>
            }) 
        }
    </div>
  )
}

export default UseMemohook