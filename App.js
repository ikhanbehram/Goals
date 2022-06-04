import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const addGoalHandler = (text) => {
        setGoals((currentGoals) => [...currentGoals, { text: text, id: Math.random().toString() }]);
    };

    const deleteGoalHandler = (goalId) => {
        setGoals(
            goals.filter((goal) => {
                return goal.id !== goalId;
            })
        );
    };
    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
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
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 5
    }
});
