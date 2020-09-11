import React, { useState } from 'react';
import ItemComponent from './ItemComponent';
import Data from './Data';

const MenuItem = () => {
  const [labels, setLabel] = useState(Data);

  const toggle = (index) => {
    setLabel(
      labels.map((label, i) => {
        if (i === index) {
          label.open = !label.open;
        } else {
          label.open = false;
        }

        return label;
      })
    );
  };
  return (
    <div className="faqs">
      {labels.map((label, i) => (
        <ItemComponent label={label} index={i} toggle={toggle} key={i} />
      ))}
    </div>
  );
};

export default MenuItem;
