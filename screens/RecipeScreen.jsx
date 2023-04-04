import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RecipeScreen = ({ route }) => {
  //* extracting props from route from mealItem
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>this is my Recipe {mealId}</Text>
    </View>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({});
