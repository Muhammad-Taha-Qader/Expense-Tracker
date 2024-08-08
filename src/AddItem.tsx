import { SetStateAction, useState, ChangeEvent } from "react";

interface AddItemProps{
    type:string;
    handleTypeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const AddItem:React.FC<AddItemProps> = ({type, handleTypeChange})=>{
    const inputAmount:number=0;
    function handleClick(){

    }
    return (
        <div className="flex bg-amber-600">
            <input type="text" name="income" id="income" />
            <label htmlFor="incomeOrExpense"></label>
            <select id="incomeOrExpense" name="incomeOrExpense" value={type} onChange={handleTypeChange}>
            {/* <select id="incomeOrExpense" name="incomeOrExpense" value={type} onChange={handleTypeChange}> */}
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <input type="text" name="disp" id="disp" />
            {type === "Expense" && (
                <select id="category" name="category">
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                </select>
            )}
            <button type="button" onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddItem;