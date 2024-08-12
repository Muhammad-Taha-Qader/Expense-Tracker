import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { TableRefTypeHandle, TableItem } from "./ExpenseTracker";
interface TableProps {
    setTableItems: React.Dispatch<React.SetStateAction<TableItem[]>>;
    newTableItem: TableItem;
    tableItems: TableItem[];
  }
// export const Table = forwardRef((props, ref)=>{
// export const Table = forwardRef<TableRefTypeHandle,{}>((props, ref)=>{
export const Table = forwardRef<TableRefTypeHandle,TableProps>((props, ref)=>{
    function pushItem(){
        props.setTableItems(prevItems => [...prevItems, props.newTableItem]);  //prevItems contains the current state of tableItems.   When you use the functional update form of setTableItems, React provides prevItems as an argument.
    }
    
    // Use useImperativeHandle to expose specific functions to the parent
    useImperativeHandle(ref, () => ({
        pushItem,
    }));
   
    return (
        <div>
            {props.tableItems.map((item)=> <div>{item.amount} {item.type==="Expense"? item.category:null} {item.dis} {item.type}</div>)};
        </div>
    );
}
);