import { StyleSheet, View, Text } from "react-native";
import AddStudentForm from "../../components/marking/AddStudentForm";
import { useNavigation } from "@react-navigation/native";
import { postStudent } from "../../util/httpMarking";

function AddClass(props) {
  const navigation = useNavigation();

  async function confirmHandler(data) {
    const id = await postStudent(data);
  }

  function onCancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.title}>Administrator mode</Text>
      <Text> Add Grade</Text>

      <AddStudentForm onSubmit={confirmHandler} onCancel={onCancel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default AddClass;
