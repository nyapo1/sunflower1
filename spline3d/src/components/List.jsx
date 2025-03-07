import React, { useState } from 'react';

const ListComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const items = ['Home', 'How to use', 'About', 'Advantages'];

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={`cursor-pointer hover:text-gray-600 font-semibold rounded-tl-xl rounded-br-xl px-4 py-2 text-purple-900 ${
            selectedItem === index ? 'bg-gray-300' : ''
          }`}
          onClick={() => handleClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;