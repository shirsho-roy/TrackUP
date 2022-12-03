import styled from "styled-components";
import { useState,useEffect } from "react";
const Container = styled.div`
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 18px 22px;
  font-size: 18px;
  width: 360px;
  gap: 10px;
  font-weight: bold;
  background-color:#3c3c3c;
  color:white;
  border-radius: 8px;
  overflow-y: auto !important;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`;
const Cell = styled.div`
  background-color: #b4b4b4;
  color: #0d1d2c;
  display: flex;
  width:340px;
  flex-direction: row;
 
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #e6e8e9;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>{props.payload?.desc}</span>
      <span>Rs {props.payload?.amnt}</span>
    </Cell>
  );
};
const Transaction= (props)=>{
    const [filteredTransaction, updateTxn] = useState(props.transactions);
  
    const updateData = () => {
      let txn = [...props.transactions];
      updateTxn(txn);
    };
  
    useEffect(() => {
      updateData();
    }, [props.transactions]);
return(
    <Container>
        Transactions
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} />
      ))}
    </Container>
)
}
export default Transaction;