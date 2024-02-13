import { View, Text, FlatList } from "react-native"
import ExpensesSummary from "./expensesSummary"
import ExpensesList from "./expensesList"
import { GlobalStyles } from "../../constants/styles"

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Food',
        amount: 59.34,
        date: new Date('2024-13-02')
    },
    {
        id: 'e2',
        title: 'Sport',
        amount: 170.90,
        date: new Date('2024-12-02')
    },
    {
        id: 'e4',
        title: 'Club',
        amount: 109.11,
        date: new Date('2024-12-02')
    },
    {
        id: 'e5',
        title: 'Games',
        amount: 13.27,
        date: new Date('2024-09-02')
    },
]



function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style={{
            backgroundColor: GlobalStyles.colors.primary700,
            padding:25,
            flex: 1
        }}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

export default ExpensesOutput