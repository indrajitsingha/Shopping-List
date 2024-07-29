export default function Products({ productName, sendItems, products }) {
  const moveToCart = (pro) => {
    if (!products?.find((x) => x === pro)) {
      sendItems((pro) => [...pro, productName]);
    }
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
      <div style={{ width: '100%' }}>{productName?.toUpperCase()}</div>
      <div style={{ width: '100%' }}>
        <button onClick={() => moveToCart(productName)}>Add to cart</button>
      </div>
    </div>
  );
}
