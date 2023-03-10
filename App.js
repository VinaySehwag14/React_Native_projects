import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList,Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler (){
    setModalIsVisible(true)
  }

  function endAddGoalHandler (){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
    console.log(enteredGoalText);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log("DELETE");
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
   <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          itemData.index;
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
        style={styles.goalsContainer}
        alwaysBounceVertical={false}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,

  },

  goalsContainer: {
    flex: 5,
  },
 
});
