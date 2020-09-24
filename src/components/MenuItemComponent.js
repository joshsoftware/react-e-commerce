import React, { useState } from 'react';
import ItemComponent from './ItemComponent';
import Data from './Data';
import Product from './Product';

const MenuItem = () => {
  const [labels, setLabel] = useState(Data);
  const [products, setProducts] = useState(Product);

  const toggle = (index) => {
    setLabel(
      labels.map((label, i) => {
        if (i === index) {
          label.open = !label.open;
        } else {
          if (label.label !== 'Price' || label.label !== 'Accessories') {
            label.open = false;
          }
        }

        return label;
      })
    );
  };
  return (
    <div className="faqs">
      {labels.map((label, i) => (
        <ItemComponent
          label={label}
          index={i}
          toggle={toggle}
          key={i}
          setLabel={setLabel}
          setProducts={setProducts}
          products={products}
          labels={labels}
        />
      ))}
    </div>
  );
};

export default MenuItem;
