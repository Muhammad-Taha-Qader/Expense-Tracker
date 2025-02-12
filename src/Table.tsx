import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { TableRefTypeHandle, TableItem } from "./ExpenseTracker";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";
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
            {props.tableItems.map((item)=> <div className={`flex flex-col items-center gap-x-5 max-w-72 min-w-72 
                                                            ${item.type === "Expense" ? "bg-rose-300 border-l-4 border-rose-600" : "bg-teal-300 border-l-4 border-green-600"} 
                                                            mb-2 rounded-lg px-8 py-3 text-slate-800`}>
                    <div className="flex justify-between min-w-60">
                        <p className="font-bold">
                            {item.type !== "Expense" ? <KeyboardDoubleArrowUpIcon fontSize="small" className="text-green-700"/>:<KeyboardDoubleArrowDownIcon fontSize="small" className="text-red-700"/> }
                            Rs. {item.amount}
                        </p>
                        <p className="text-xs text-black/50">{item.type}</p> 
                    </div>
                    <div className="flex justify-start min-w-60 gap-x-6 text-sm text-black/45">
                        {item.dis && <p><DescriptionIcon fontSize="small"/>{item.dis} </p>}
                        <p> {item.type==="Expense"? <div><CategoryIcon fontSize="small"/> {item.category} </div>:null} </p>
                    </div>

                </div>)}
        </div>
    );
}
);