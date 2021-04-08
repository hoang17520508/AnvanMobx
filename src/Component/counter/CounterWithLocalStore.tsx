import React, { FC } from 'react'
import {useLocalStore,observer} from "mobx-react"
export const CounterWithLocalStore=observer(()=> {
    const store= useLocalStore(()=>({
        count: 0,
        increase:()=>{store.count+=1},
        decrease:()=>{store.count-=1},
        reset:()=>{store.count=0}

    }))
    const {count,increase,decrease,reset}=store;
    return (
        <>
            <p>Count (with local store): {count}</p>
      <button onClick={increase}>Increase +</button>
      <button onClick={decrease}>Decrease -</button>
      <button onClick={reset}>Reset</button>
        </>
    )
});
;
