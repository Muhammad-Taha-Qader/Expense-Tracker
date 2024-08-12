import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import { useState, SetStateAction, ChangeEvent, useRef } from "react";
import "./Table";
import { Table } from "./Table";

export interface TableItem{
  amount: number | null
  type: string
  dis: string
  category: string
}
export interface TableRefTypeHandle{
  pushItem: () => void;
}
function ExpenseTracker() {
  const [amount,setAmount] = useState<number | null>(null);
  const [type,setType] = useState<string>("Expense");
  const [disciption,setDisciption] = useState<string>("");
  const [category,setCategory] = useState<string>("Health");
  const [tableItems, setTableItems] = useState<TableItem[]>([]);
  const [totalBalance, SetTotalBalance]= useState<number>(0);
  // const handleAmountChange = (event: ChangeEvent<HTMLInputElement>):void => {
  //     setAmount(parseFloat(event.target.value));
  // };

  // const handleTypeChange = (event: { target: { value: SetStateAction<string>; }; }):void => {
  //   setType(event.target.value);
  // };

  // const handleDispChange = (event: { target: { value: SetStateAction<string>; }; }):void => {
  //   setDisciption(event.target.value);
  // };

  // const handleCataChange = (event: { target: { value: SetStateAction<string>; }; }):void => {
  //   setCategory(event.target.value);
  // };
  // const childTableRef = useRef();
  const childTableRef = useRef<TableRefTypeHandle>(null);
  const handleAdd= ()=>{
    if(childTableRef.current){
      childTableRef.current.pushItem();
      if(amount !== null)
        SetTotalBalance((totalBalance + (type==="Expense"? -amount:amount)));
      setAmount(null);
      setType("Expense");
      setDisciption("");
      setCategory("Health");
    }
  };

  return (
    <div >
      {totalBalance}
      <ItemForm 
        setAmountChange={setAmount} amount={amount} setTypeChange={setType} type={type}
        setDispChange={setDisciption} setCataChange={setCategory} 
      />
      <button type="button" onClick={handleAdd}>Add</button>
      <Table ref={childTableRef} setTableItems={setTableItems} newTableItem={{amount:amount, type:type, dis:disciption, category:category}} tableItems={tableItems}/>
      {<p>type set is: {type} , {amount}, {category}, {disciption}</p>}
      <Item/>
    </div>
  );
}

export default ExpenseTracker;
