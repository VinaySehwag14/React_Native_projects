import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-expense-tr-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
