import { SetStateAction, useState, ChangeEvent } from "react";

interface ItemFormProps{
    // handleAmountChange:(event: ChangeEvent<HTMLInputElement>) => void;
    // handleTypeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    // handleDispChange:(event: ChangeEvent<HTMLSelectElement>) => void;
    // handleCataChange:(event: ChangeEvent<HTMLInputElement>) => void;
    // handleAmountChange:(event: number) => void;
    // handleTypeChange: (event: string) => void;
    // handleDispChange:(event: string) => void;
    // handleCataChange:(event: string) => void;
    setAmountChange:(React.Dispatch<React.SetStateAction<number|null>>);
    amount: number|null;
    setTypeChange: (React.Dispatch<React.SetStateAction<string>>);
    type: string;
    setDispChange:(React.Dispatch<React.SetStateAction<string>>);
    disciption: string;
    setCataChange:(React.Dispatch<React.SetStateAction<string>>);
    category:string;
};

const ItemForm:React.FC<ItemFormProps> = ({setAmountChange, amount, setTypeChange, setDispChange, disciption, setCataChange, category, type})=>{
    // function handleInputAmountChange(event: ChangeEvent<HTMLInputElement>) : void{
    const handleInputAmountChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        setAmountChange(parseFloat(event.target.value));
    };

    function handleInputTypeChange(event: ChangeEvent<HTMLSelectElement>) : void{
        setTypeChange(event.target.value);
    }

    function handleInputDispChange(event: ChangeEvent<HTMLInputElement>) : void{
        setDispChange(event.target.value);
    }
    
    function handleInputCatChange(event: ChangeEvent<HTMLSelectElement>) : void{
        setCataChange( event.target.value);
    }

    // function handleClick(){
    //     // handleAmountChange(inputAmount);
    //     // handleTypeChange(inputType);
    //     // handleDispChange(inputDisp);
    //     // handleCataChange(inputCat);
    // }
    return (
        <div className="flex gap-x-5 justify-center">
            {/* <input type="number" name="income" id="income" onChange={() => handleAmountChange(parseFloat(event.target.value))}/> */}
            <input className="bg-green-100" type="number" name="income" id="income" value={amount!==null? amount:""} onChange={handleInputAmountChange} placeholder="Amount..."/>
            <label htmlFor="incomeOrExpense"></label>
            <select id="incomeOrExpense" name="incomeOrExpense" value={type} onChange={handleInputTypeChange} className="bg-green-100">
            {/* <select id="incomeOrExpense" name="incomeOrExpense" value={type} onChange={handleTypeChange}> */}
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>
            <input type="text" name="disp" id="disp"  value={disciption} onChange={handleInputDispChange} className="bg-green-100" placeholder="Description..."/>
            {type === "Expense" && (
                <select id="category" name="category" value={category} onChange={handleInputCatChange} className="bg-green-100">
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                    <option value="Bills">Bills</option>
                    <option value="Rents">Rents</option>
                </select>
            )}
        </div>
    );
};

export default ItemForm;