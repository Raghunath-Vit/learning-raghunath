import React from 'react';
const expensiveFunction = (value) => {
  return value * 2;
};

const anotherPriceyFunction = (value) => {
  return value + 10;
};

const UseMemoHooks = ({ listOfItems, props }) => {
  const memoizedList = React.useMemo(() => 
    listOfItems.map(item => ({
      ...item,
      itemProp1: expensiveFunction(props.first),
      itemProp2: anotherPriceyFunction(props.second),
    })),
    [listOfItems, props.first, props.second] 
  );

  return (
    <div>
      {memoizedList.map((item, index) => (
        <li key={index}>
          <div>Item Prop 1: {item.itemProp1}</div>
          <div>Item Prop 2: {item.itemProp2}</div>
        </li>
      ))}
    </div>
  );
};

export default UseMemoHooks;
