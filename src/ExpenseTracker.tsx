import React from "react";
import ItemForm from "./ItemForm";
import { useState, SetStateAction, ChangeEvent, useRef } from "react";
import "./Table";
import { Table } from "./Table";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
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
    <div className="flex flex-col items-center">
    <div className={`mt-5 mb-8 px-52 py-10 ${totalBalance >= 0 ? "bg-green-400" : "bg-red-400"} rounded-xl text-lg relative overflow-hidden`}>
        <h1 className="text-center text-slate-800 max-w-60 text-wrap"><strong>Current Balance:</strong> {totalBalance}-/Rs</h1>
        { totalBalance >= 0 ? <img className="h-36 w-36 absolute -ml-48 -mt-12" src="/img/up-arrow.png" alt="" /> :
          <img className="h-20 w-20 absolute -ml-40 -mt-[44px]" src="/img/loss.png" alt="" />}
        <img className="h-24 w-24 absolute ml-64 -mt-20 opacity-90" src="/img/trend.png" alt="" />
    </div>

      <ItemForm 
        setAmountChange={setAmount} amount={amount} setTypeChange={setType} type={type}
        setDispChange={setDisciption} disciption={disciption}  setCataChange={setCategory}  category={category}
      />
      <button type="button" onClick={handleAdd} className="bg-green-400 rounded-lg py-2 px-6 mt-6 mb-6"><CurrencyExchangeIcon fontSize="small" className="mr-1 -mt-1"/>Add</button>
      <Table ref={childTableRef} setTableItems={setTableItems} newTableItem={{amount:amount, type:type, dis:disciption, category:category}} tableItems={tableItems}/>
      {/* {<p>type set is: {type} , {amount}, {category}, {disciption}</p>} */}
    </div>
  );
}

export default ExpenseTracker;
