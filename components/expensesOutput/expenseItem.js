import {StyleSheet, View, Text, FlatList, Pressable } from "react-native"
import { GlobalStyles } from "../../constants/styles"
import { getFormatedDate } from "../../util/date"


function ExpenseItem({title, amount, date}){
    return(
        <Pressable> 
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.title]}>{title}</Text>
                    <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 0 , height: 4},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    title: {
        fontSize: 24,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amount: {
        olor: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    }
    
})

export default ExpenseItem