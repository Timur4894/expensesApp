import {View, Text, StyleSheet} from 'react-native'
import ExpensesOutput from '../components/expensesOutput/expensesOutput'

function ResetnExpenses(){
    return (
        <ExpensesOutput expensesPeriod='Last 7 days'/>
    )

}

export default ResetnExpenses