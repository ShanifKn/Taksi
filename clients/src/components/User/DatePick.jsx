import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePick = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div>
      <Datepicker
        value={value}
        onChange={handleValueChange}
        classNames="text-white"
      />
    </div>
  );
};

export default DatePick;
