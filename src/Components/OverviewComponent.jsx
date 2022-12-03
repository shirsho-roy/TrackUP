import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin:8px 0 18px;
width:100%;
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;
const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  background-color:#1A191E;
  color:white;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;
const BalanceBox=styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
font-weight:bold;
font-size: 18px;
width:400px;
margin:8px;
color:green;
`;
const Add=styled.button`
background:#1A191E;
padding:8px 15px;
color:white;
text-align:center;
align-items:center;
border-radius:4px;
cursor: pointer;
font-weight:bold;
font-size: 12px;
margin:auto;
`;
const Addx=styled.button`
background:black;
padding:15px 25px;
color:white;
text-align:center;
align-items:center;
border-radius:4px;
font-weight:bold;
font-size: 14px;
margin:6px;
`;
const TxnContainer=styled.div`
 display:flex;
 flex-direction:column;
 border:1px solid black;
 gap:10px;
 padding:15px 20px;
 margin:6px;
 &input{
    outline:none;
    border:1px solid #e6e8e9;
    border-radius:4px;
 }
`;
const RadioBox= styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
margin:6px;
// justify-content:space-between;
`;
const Sxd=styled.input`
background:#1A191E;
height: 30px;
width: 344px;
left: 0px;
top: 0px;
color:gray;
border-radius:4px;
`;
const AddTxnView= (props)=>{
    const[amnt, setAmnt]=useState();
    const [desc, setDesc]=useState();
    const [type, setType]=useState("EXPENSE");
    const addTransaction=()=>{
        props.addTransaction({
            amnt:Number(amnt),
            desc,
            type,
            id:Date.now(), 
        });
        console.log({amnt,desc,type});
        props.toggleAddTxn(!props.isAddTxnVisible);
    };
    return(
   <TxnContainer>
     <Sxd placeholder="Amount"
     value={amnt}
     type="number"
     onChange={(e)=>setAmnt(e.target.value)}/>
     <Sxd placeholder="Description"
     value={desc}
     onChange={(e)=>setDesc(e.target.value)}/>
     <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" checked={type==="EXPENSE"} onChange={(e)=>{setType(e.target.value)}}/>
        <Add><label htmlFor="expense">EXPENSE</label></Add>
        <input type="radio" id="income" name="type" value="INCOME" checked={type==="INCOME"}
        onChange={(e)=>{setType(e.target.value)}}/>
        <Add><label htmlFor="income">INCOME</label></Add>
     </RadioBox>
     <Add onClick={addTransaction}>ADD TRANSACTION</Add>
     
   </TxnContainer>
    )
};
const Overview= (props)=>{
    const [isAddTxnVisible,toggleAddTxn] = useState(false);
    return(
   
    <Container>
        <BalanceBox>
       {/* <Addx> Balance: Rs {props.income - props.expense}</Addx>  */}
        <Add onClick={()=>{toggleAddTxn(!isAddTxnVisible)}}>{isAddTxnVisible?"ADD TRANSACTION":"CANCEL"}</Add>
        </BalanceBox>
        {!isAddTxnVisible && <AddTxnView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction}/>}
        <ExpenseContainer>
        <ExpenseBox>
         <b>Expense</b><span>Rs {props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          <b>Income</b><span>Rs {props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
)
}
export default Overview;