import { StyleSheet, View, Text } from "react-native";
import MarkingViewForm from "../../components/marking/MarkingViewForm";
import TableView from "../../components/marking/TableView";
import CardButton from "../../components/marking/CardButton";

import { postMarking } from "../../util/httpMarking";
import { useNavigation } from "@react-navigation/native";

function MarkingView(props) {
  const navigation = useNavigation();

  async function onSubmit(data) {}

  function goToAddMarkingView() {
    navigation.navigate("AddMarkingView");
  }
  function goToViewMarking() {
    navigation.navigate("ViewMarkingView");
  }

  return (
    <View style={styles.container}>
      <Text>Marking Section</Text>

      <View style={styles.viewContainer}>
        <CardButton
          btnName="Add Marking"
          style={styles.leftBtn}
          goToScreen={goToAddMarkingView}
        />

        <CardButton btnName="View Marking" goToScreen={goToViewMarking} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
});

export default MarkingView;
