import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import CustomInput from "../CustomInput";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { getAllStudentsFromBack, getGrade } from "../../util/httpMarking";
import { grades } from "../../constants/Form";

function MarkingViewForm({
  onSubmit,
  onCancel,
  defaultValues,
  isTermShown,
  btnTitle,
}) {
  // section Arr
  const [sections, setSection] = useState([]);
  const [filteredSection, setFilteredSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");

  // grades Arr
  const [selectedGrade, setSelectedGrade] = useState("");

  // students Arr
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState([]);

  // Get all students
  useEffect(() => {
    async function getSections() {
      const sections = await getGrade();
      const filteredSection = Array.from(sections);
      setSection(sections);
      setFilteredSection(filteredSection);
    }

    async function getAllStudents() {
      const students = await getAllStudentsFromBack();
      const filteredStudents = Array.from(students);
      setStudents(students);
      setFilteredStudents(filteredStudents);
    }

    getAllStudents();
    getSections();
  }, []);

  function filterSection(text) {
    const updatedData = sections.filter((item) => {
      const item_data = `${item.grade.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    setFilteredSection(updatedData);
  }

  function filterStudents(selectedSection = "", selectedGrade = "") {
    const updatedData = students.filter((item) => {
      // filter section for students
      const item_data_section = `${item.section.toUpperCase()})`;
      const text_data_section = selectedSection.toUpperCase();
      // filter grade for students
      const item_data_grade = `${item.grade.toUpperCase()})`;
      const text_data_grade = selectedGrade.toUpperCase();
      return (
        item_data_grade.indexOf(text_data_grade) > -1 &&
        item_data_section.indexOf(text_data_section) > -1
      );
    });
    setFilteredStudents(updatedData);
  }

  const [inputs, setInputs] = useState({
    grade: {
      value: defaultValues ? defaultValues.grade : "",
      isValid: true,
    },
    section: {
      value: defaultValues ? defaultValues.section : "",
      isValid: true,
    },
    subject: {
      value: defaultValues ? defaultValues.subject : "",
      isValid: true,
    },
    student: {
      value: defaultValues ? defaultValues.student : "",
      isValid: true,
    },
    term: {
      value: defaultValues ? defaultValues.term : "",
      isValid: true,
    },
    marks: {
      value: defaultValues ? defaultValues.marks : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    if (inputIdentifier && inputIdentifier === "grade") {
      setSelectedGrade(enteredValue);
      filterSection(enteredValue);
      filterStudents(selectedSection, enteredValue);
    }
    if (inputIdentifier && inputIdentifier === "section") {
      setSelectedSection(enteredValue);
      filterStudents(enteredValue, selectedGrade);
    }
    if (inputIdentifier && inputIdentifier === "student") {
      setSelectedStudent(enteredValue);
    }
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const data = {
      grade: selectedGrade,
      section: selectedSection,
      subject: inputs.subject.value,
      student: selectedStudent,
      term: inputs.term.value,
      // marks: inputs.marks.value,
    };

    if (data.term === "term1") {
      data.marks1 = inputs.marks.value;
    } else if (data.term === "term2") {
      data.marks2 = inputs.marks.value;
    } else {
      data.marks3 = inputs.marks.value;
    }

    const gradeIsValid = true;
    const sectionIsValid = true;
    const subjectIsValid = true;
    const studentIsValid = true;
    const termIsValid = true;
    const marksIsValid = true;

    if (!gradeIsValid) {
      setInputs((curInputs) => {
        return {
          grade: {
            value: curInputs.grade.value,
            isValid: gradeIsValid,
          },
          subject: {
            value: curInputs.subject.value,
            isValid: subjectIsValid,
          },
          section: {
            value: curInputs.section.value,
            isValid: sectionIsValid,
          },
          student: {
            value: curInputs.student.value,
            isValid: studentIsValid,
          },
          term: {
            value: curInputs.term.value,
            isValid: termIsValid,
          },
          marks: {
            value: curInputs.marks.value,
            isValid: marksIsValid,
          },
        };
      });
      return;
    }

    onSubmit(data);
  }

  const formIsInvalid = false;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.selectContainer}>
          <Text style={styles.label}>Grade</Text>
          <Picker
            selectedValue={inputs.grade.value}
            onValueChange={inputChangeHandler.bind(this, "grade")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the grade." value="Unknown" />
            {grades.map((grade) => {
              return (
                <Picker.Item
                  label={grade.label}
                  value={grade.value}
                  key={grade.id}
                />
              );
            })}
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>Section</Text>
          <Picker
            selectedValue={inputs.section.value}
            onValueChange={inputChangeHandler.bind(this, "section")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the section." value="Unknown" />
            {filteredSection.map((section) => {
              return (
                <Picker.Item
                  label={section.section}
                  value={section.section}
                  key={section.id}
                />
              );
            })}
          </Picker>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.label}>subject</Text>
          <Picker
            selectedValue={inputs.subject.value}
            onValueChange={inputChangeHandler.bind(this, "subject")}
            mode="dropdown" // Android only
            style={styles.picker}
          >
            <Picker.Item label="Please select the subject." value="Unknown" />
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Maths" value="maths" />
            <Picker.Item label="French" value="french" />
            <Picker.Item label="Physics" value="physics" />
            <Picker.Item label="Chemistry" value="chemistry" />
          </Picker>
        </View>

        {!isTermShown && (
          <View style={styles.selectContainer}>
            <Text style={styles.label}>student</Text>
            <Picker
              selectedValue={inputs.student.value}
              onValueChange={inputChangeHandler.bind(this, "student")}
              mode="dropdown" // Android only
              style={styles.picker}
            >
              <Picker.Item label="Please select a student." value="Unknown" />
              {/* <Picker.Item label="Jack Sparrow" value="jacksparrow" />
            <Picker.Item label="James Bond" value="jamesbond" />
            <Picker.Item label="John" value="Terry" /> */}
              {filteredStudents.map((student) => {
                return (
                  <Picker.Item
                    label={student.name + " " + student.surname}
                    value={student.name}
                    key={student.id}
                  />
                );
              })}
            </Picker>
          </View>
        )}

        {!isTermShown && (
          <View style={styles.selectContainer}>
            <Text style={styles.label}>term</Text>
            <Picker
              selectedValue={inputs.term.value}
              onValueChange={inputChangeHandler.bind(this, "term")}
              mode="dropdown" // Android only
              style={styles.picker}
            >
              <Picker.Item label="Please select a term." value="Unknown" />
              <Picker.Item label="Term 1" value="term1" />
              <Picker.Item label="Term 2" value="term2" />
              <Picker.Item label="Term 3" value="term3" />
            </Picker>
          </View>
        )}
        {!isTermShown && (
          <View style={styles.inputContainer}>
            <CustomInput
              label="marks"
              invalid={!inputs.marks.isValid}
              style={styles.errorInput}
              textInputConfig={{
                keyboardType: "default",
                onChangeText: inputChangeHandler.bind(this, "marks"),
                value: inputs.marks.value,
              }}
            />
            {formIsInvalid && (
              <Text style={styles.errorText}>
                Invalid input values. Please check your submission.
              </Text>
            )}
          </View>
        )}

        <View style={styles.btnContainer}>
          <Button onPress={submitHandler} title={btnTitle}></Button>
          {/* <Button onPress={onCancel} title="Cancel"></Button> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    margin: 8,
    fontSize: 8,
  },
  errorInput: {
    color: "red",
  },
  inputContainer: {
    width: 300,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    // marginVertical: 30,
    // width: 300,
    // padding: 10,
    // borderWidth: 1,
    borderColor: "#666",
    flex: 3,
    fontSize: 12,
  },

  label: {
    fontSize: 12,
    flex: 1,
  },
});

export default MarkingViewForm;
