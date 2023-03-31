import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen-{catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
