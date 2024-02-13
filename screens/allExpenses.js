import {View, Text, StyleSheet} from 'react-native'
import ExpensesOutput from '../components/expensesOutput/expensesOutput'

function AllExpenses(){
    return (
        <ExpensesOutput expensesPeriod='Total'/>
    )

}

export default AllExpenses