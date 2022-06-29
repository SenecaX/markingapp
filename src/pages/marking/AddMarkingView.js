import { StyleSheet, View, Text } from "react-native";
import MarkingViewForm from "../../components/marking/MarkingViewForm";
import TableView from "../../components/marking/TableView";
import { postMarking } from "../../util/httpMarking";
import { useNavigation } from "@react-navigation/native";

function AddMarkingView(props) {
  const navigation = useNavigation();

  async function onSubmit(data) {
    const id = await postMarking(data);

    if (id) {
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>Marking View</Text>
      <MarkingViewForm onSubmit={onSubmit} btnTitle="Save" />
      {/* <TableView /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default AddMarkingView;
