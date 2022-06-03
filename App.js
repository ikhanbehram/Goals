import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    const [text, setText] = useState("");
    const goalInputHandler = (enteredValue) => {
        setText(enteredValue);
    };
    const addGoalHandler = () => {
        console.log(text);
    };
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your Goal" onChangeText={goalInputHandler} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <Text>Your Goals</Text>
                <Text>Your Goals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
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
    },
    goalsContainer: {
        flex: 5
    }
});
