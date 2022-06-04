import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [goals, setGoals] = useState([]);
    const addGoalHandler = (text) => {
        setGoals((currentGoals) => [...currentGoals, { text: text, id: Math.random().toString() }]);
        closeGoalInputModal();
    };

    const openGoalInputModal = () => {
        setIsVisible(true);
    };
    const closeGoalInputModal = () => {
        setIsVisible(false);
    };
    const deleteGoalHandler = (goalId) => {
        setGoals(
            goals.filter((goal) => {
                return goal.id !== goalId;
            })
        );
    };
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#5e0acc" onPress={openGoalInputModal} />
                <GoalInput onAddGoal={addGoalHandler} isVisible={isVisible} onCancel={closeGoalInputModal} />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={(item) => {
                            return <GoalItem text={item.item.text} id={item.item.id} onDeleteItem={deleteGoalHandler} />;
                        }}
                        alwaysBounceVertical={false}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#1e045a"
    },
    goalsContainer: {
        flex: 5
    }
});
