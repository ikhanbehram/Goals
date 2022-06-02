import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    return (
        <View>
            <View>
                <TextInput placeholder="Your Goal" />
                <Button title="Add Goal" />
            </View>
            <View>
                <Text>Your Goals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 15
    }
});
