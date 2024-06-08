import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from "./styles";

interface Props {
    newGoal: string;
    setNewGoal: (goal: string) => void;
    onSetGoal: () => void;
}

const GoalInput: React.FC<Props> = (props) => {
    const { newGoal, onSetGoal, setNewGoal } = props;

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="My Fitness Goal"
                style={styles.textInput}
                onChangeText={(text) => setNewGoal(text)}
                value={newGoal}
            />
            <Button 
                title="Add Goal" 
                onPress={onSetGoal}
            />
        </View>
    )
};

export default GoalInput;
