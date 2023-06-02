import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';

function Transactions() {
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    const {transactionHistoryAll} = useGlobalContext()

    const [...history] = transactionHistoryAll()
    return (
        <TransactionsStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                {/* <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2> */}
                {/* <div className="income-content"> */}
                    {/* <div className="form-container">
                        <Form />
                    </div> */}
                    {/* <div className="transactions">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div> */}
                    {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
                {/* </div> */}
            </InnerLayout>
        </TransactionsStyled>
    )
}

const TransactionsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem; 
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        margin:20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default Transactions