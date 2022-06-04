import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

function GoalInput({ onAddGoal, isVisible, onCancel }) {
    const [text, setText] = useState("");
    const goalInputHandler = (enteredValue) => {
        setText(enteredValue);
    };
    const addGoalHandler = () => {
        onAddGoal(text);
        setText("");
    };
    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={{
                        uri: "https://www.pikpng.com/pngl/b/379-3791890_challenge-white-icon-png-download-challenge-white-icon.png"
                    }}
                    style={styles.inputImage}
                />
                <TextInput style={styles.textInput} placeholder="Your Goal" onChangeText={goalInputHandler} value={text} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16
    },
    inputImage: {
        width: 100,
        height: 100,
        margin: 10
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
