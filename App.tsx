import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import { styles } from "./styles";
import GoalInput from "./components/goal-input/index";

type Goal = {
  text: string;
  key: string;
};

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState<Goal[]>([]); // For the list of goals

  const onSetGoal = () => {
    if (newGoal) {
      setGoals((goals) => [
        ...goals, 
        { text: newGoal, key: Math.random().toString() }
      ]);
    }
    setNewGoal("");
  };

  return (
    <View style={styles.body}>
      <GoalInput newGoal={newGoal} onSetGoal={onSetGoal} setNewGoal={setNewGoal}/>
      <View style={styles.goalContainer}>
        <Text>List of Goals...</Text>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}