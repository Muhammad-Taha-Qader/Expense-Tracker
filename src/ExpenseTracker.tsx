import React from "react";
import Item from "./Item";
import AddItem from "./AddItem";
import { useState, SetStateAction } from "react";

function ExpenseTracker() {
  const [type,setType] = useState<string>("Expense");
  const handleTypeChange = (event: { target: { value: SetStateAction<string>; }; }):void => {
      setType(event.target.value);
  };

  return (
    <div >
      Hello
      <AddItem type={type} handleTypeChange={handleTypeChange}/>
      {<p>type set is: {type}</p>}
      <Item/>
    </div>
  );
}

export default ExpenseTracker;
