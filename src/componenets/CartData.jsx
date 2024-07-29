import { useState } from 'react';

export default function CartData({ productName, sendItems, products }) {
  const [isCompleted, setisCompleted] = useState(false);
  const Remove = (pro) => {
    // if (products.indexOf((x) => x === pro)) {
    // }
    const Index = products.findIndex((x) => x === pro);
    console.log(Index);
    products.splice(Index, 1);

    sendItems((val) => [...val]);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        height: '100px',
        width: '150px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '10px',
      }}
    >
      <div
        style={{ textDecorationLine: isCompleted ? 'line-through' : 'none' }}
      >
        {productName?.toUpperCase()}
      </div>

      {/* <div style={{ width: '100%' }}>nddbvhddh</div> */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        {isCompleted ? (
          <button>Completed☑️</button>
        ) : (
          <>
            <button onClick={() => setisCompleted(true)}>☑️</button>
            <button onClick={() => Remove(productName)}>❌</button>
          </>
        )}
      </div>
    </div>
  );
}
