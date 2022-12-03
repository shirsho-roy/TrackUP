import styled from "styled-components";
import Overview from "./OverviewComponent";
import Transaction from "./Transaction";
import Header from "./Head";
import { useState,useEffect } from "react";
const Container = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin:25px 0 18px;
justify-content:space-between;
`;
const HomeComponent= (props)=>{
    const [transactions,updateTransactions]=useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0.00;
        let inc = 0.00;
        transactions.map((payload) =>
            payload.type === "EXPENSE"
                ? (exp = exp + payload.amnt)
                : (inc = inc + payload.amnt),
        );
        updateExpense(exp.toFixed(2));
        updateIncome(inc.toFixed(2));
    };
    useEffect(() => calculateBalance(), [transactions]);
    
    const addTransaction=(payload)=>{
        const transactarray=[...transactions];
        transactarray.push(payload);
        updateTransactions(transactarray);
    };
return(
    <Container>
    <Header expense={expense}
    income={income}/>
    <Overview 
    expense={expense}
    income={income}
    addTransaction={addTransaction}/>
   <Transaction transactions={transactions} />
            
    </Container>
)
};
export default HomeComponent;