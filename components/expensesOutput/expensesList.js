import { View, Text, FlatList } from "react-native"
import ExpenseItem from "./expenseItem"

function renderExpenseItem(itemData){
    return(
        <ExpenseItem {...itemData.item}/>
    ) 
}

function ExpensesList({expenses}){
    return(
        <View> 
            <FlatList data={expenses} 
            renderItem={renderExpenseItem}
            keyExtractor={(item)=>item.id}/>
        </View>
    )
}

export default ExpensesList