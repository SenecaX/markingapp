import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { postGrade } from "../../util/httpMarking";
import AddClassForm from "../../components/marking/AddClassForm";

function AddClass(props) {
  const navigation = useNavigation();

  async function confirmHandler(data) {
    const id = await postGrade(data);
  }

  function onCancel() {
    console.log("cancel");
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.title}>Administrator mode</Text>
      <Text> Add Grade</Text>

      <AddClassForm onSubmit={confirmHandler} onCancel={onCancel} />
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
