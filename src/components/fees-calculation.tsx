'use client'

import React, { useState } from 'react';

function FeesCalculation() {
  const [items, setItems] = useState([
    { id: 1, amount: ''},
  ]);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <form id="fees-calculation">
        {items.map((item) => (
          <div key={item.id} className="text-black flex justify-center">
            <label htmlFor={`amount${item.id}`}>
              <input
                id={`amount${item.id}`}
                name={`amount${item.id}`}
                className="ml-4"
                type="text"
                // onChange={(e) =>
                //   handleAmountChange(item.id, e.target.value)
                // }
              />
            </label>
            <label htmlFor={`unit${item.id}`}>
              <select
                id={`unit${item.id}`}
                name={`unit${item.id}`}
                className="ml-4"
                // onChange={(e) => handleUnitChange(item.id, e.target.value)}
              >
                <option value="円">円</option>
                <option value="%">%</option>
              </select>
            </label>
          </div>
        ))}
      </form>
      <p className="text-4xl font-bold mt-16 text-center">
        合計金額: <span className="">¥</span>
        {total}
      </p>
    </div>
  );
}

export default FeesCalculation;
