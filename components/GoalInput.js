import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput({ onAddGoal }) {
    const [text, setText] = useState("");
    const goalInputHandler = (enteredValue) => {
        setText(enteredValue);
    };
    const addGoalHandler = () => {
        onAddGoal(text);
        setText("");
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Your Goal" onChangeText={goalInputHandler} value={text} />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8
    }
});
