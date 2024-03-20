import React from "react";
import Card from "./Props";

const ParentComponent = () => {
  const data = [
    { label: "Item 1", price: "$10", buttonName: "Add to Cart" },
    { label: "Item 2", price: "$20", buttonName: "Add to Cart" },
    { label: "Item 3", price: "$15", buttonName: "Add to Cart" },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <Card
          key={index}
          label={item.label}
          price={item.price}
          buttonName={item.buttonName}
        />
      ))}

    </div>
  );
};

export default ParentComponent;
