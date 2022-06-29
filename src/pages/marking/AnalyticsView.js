import { StyleSheet, View, Text } from "react-native";
import TableBestStudents from "../../components/marking/TableBestStudents";
import Title2 from "../../components/Title2";
import TableBestClasses from "../../components/marking/TablesBestClasses";

function AnalyticsView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>Analtyic View</Text>

      <View style={styles.bestStudentContainer}>
        <Title2 title="Best Students 2021" />

        <TableBestStudents />
      </View>

      <View style={styles.bestClassesContainer}>
        <Title2 title="Best Classes 2021" />

        <TableBestClasses />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 300,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  bestStudentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  bestClassesContainer: {
    marginTop: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnalyticsView;
