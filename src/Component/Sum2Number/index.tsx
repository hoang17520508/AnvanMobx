import React from 'react'
import {observer} from 'mobx-react'
import {useStore} from '../../store'
export const Sum2Number = observer(() => {
    const { sum2NumberStore } = useStore();
    const { num1, num2, total, doubleTotal } = sum2NumberStore;
    return (
      <>
        <div>
          <p>Number 1</p>
          <input
            value={num1}
            type="number"
            onChange={(e) => {
              sum2NumberStore.num1 = Number(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Number2</p>
          <input
            value={num2}
            type="number"
            onChange={(e) => {
              sum2NumberStore.num2 = Number(e.target.value);
            }}
          />
        </div>
        <p>Total: {total}</p>
        <p>When total &gt; 100 will double total: {doubleTotal}</p>
      </>
    );
  });