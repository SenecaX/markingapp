import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import PlantGrowthStatusForm from "../components/PlantGrowthStatusForm";

function AddNewClass(props) {
  return (
    <View style={styles.titleContainer}>
      <Title title="add new class" />
      <PlantGrowthStatusForm />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default AddNewClass;
