import { StyleSheet, View, Text } from "react-native";
import MarkingViewForm from "../../components/marking/MarkingViewForm";
import TableView from "../../components/marking/TableView";
import { getMarkings } from "../../util/httpMarking";
import { useContext, useEffect, useState } from "react";

function AddMarkingView(props) {
  const [markings, setMarkings] = useState("");
  const [filteredMarkings, setFilteredMarkings] = useState("");

  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    async function getMarkingsFromBack() {
      const markings = await getMarkings();
      const filteredMarkings = Array.from(markings);
      setFilteredMarkings(filteredMarkings);
      setMarkings(markings);
    }

    getMarkingsFromBack();
  }, []);

  function onSubmit(data) {
    const selectedGrade = data.grade || "";
    const selectedSection = data.section || "";
    const selectedStudent = data.student.length > 0 ? data.student : "";
    const selectedSubject = data.subject || "";

    const updatedData = markings.filter((item) => {
      // filter section for grid
      const item_data_section = `${item.section.toUpperCase()})`;
      const text_data_section = selectedSection.toUpperCase();
      // filter grade for grid
      const item_data_grade = `${item.grade.toUpperCase()})`;
      const text_data_grade = selectedGrade.toUpperCase();
      // filter student for grid
      const item_data_student = `${item.student.toUpperCase()})`;
      const text_data_student = selectedStudent.toUpperCase();
      // filter subject for grid
      const item_data_subject = `${item.subject.toUpperCase()})`;
      const text_data_subject = selectedSubject.toUpperCase();
      return (
        item_data_grade.indexOf(text_data_grade) > -1 &&
        item_data_section.indexOf(text_data_section) > -1 &&
        item_data_student.indexOf(text_data_student) > -1 &&
        item_data_subject.indexOf(text_data_subject) > -1
      );
    });

    updatedData.sort((a, b) => {
      return b.marks1 - a.marks1;
    });

    updatedData.sort((a, b) => {
      return b.marks2 - a.marks2;
    });

    updatedData.sort((a, b) => {
      return b.marks3 - a.marks3;
    });

    setFilteredMarkings(updatedData);

    /*
    // allMarkings = markings[0];

    // Data from search inputs user
    console.log("data :>> ", data);

    // in "markings" you have array of markings
    console.log("markings :>> ", markings);

    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        delete data[key];
      }
    });

    const keys = Object.keys(data);

    let filteredData = [];

    const copyMarkings =  Array.from(markings);

    copyMarkings.filter((marking) => {
      keys.filter((key, index) => {
        if (marking[key] === data[key]) {
          filteredData.push({ ...marking });
        }
      });
    });
    */

    setShowTable(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>Marking View</Text>
      <MarkingViewForm
        onSubmit={onSubmit}
        isTermShown={true}
        btnTitle="Search"
      />
      {<TableView markings={filteredMarkings} />}
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
