import { StyleSheet, View, Text, FlatList } from "react-native"
import { GlobalStyles } from "../../constants/styles"

function ExpensesSummary({expenses,periodName}){

    const expensesSum = expenses.reduce((sum, expense)=>{
        return sum = expense.amount
    }, 0) 

    return(
        <View style={styles.container}>
            <Text style={styles.period}>
                {periodName}
            </Text>
            <Text style={styles.sum}>
                ${expensesSum.toFixed(2)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 8,
        borderRadius: 4,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    period: { 
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 18,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})  

export default ExpensesSummary