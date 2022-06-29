import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

function AddStudentForm({ onSubmit, onCancel, defaultValues, grade }) {
  let grading;
  const [inputs, setInputs] = useState({
    grade: {
      value: defaultValues ? defaultValues.grade : "",
      isValid: true,
    },
    section: {
      value: defaultValues ? defaultValues.section : "",
      isValid: true,
    },
    name: {
      value: defaultValues ? defaultValues.name : "",
      isValid: true,
    },
    surname: {
      value: defaultValues ? defaultValues.surname : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    grading = grade.filter((g) => {
      return enteredValue === g.grade;
    });

    // filter the grades here

    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function getSectionByGrade() {}

  function submitHandler() {
    const data = {
      // class: {
      grade: inputs.grade.value,
      section: inputs.section.value,
      name: inputs.name.value,
      surname: inputs.surname.value,
      // },
    };

    const sectionIsValid = data.section.value !== "";
    const gradeIsValid = data.value !== "";
    const nameIsValid = data.value !== "";
    const surnameIsValid = data.value !== "";

    if (!sectionIsValid) {
      setInputs((curInputs) => {
        return {
          section: { value: curInputs.section.value, isValid: sectionIsValid },
          grade: {
            value: curInputs.grade.value,
            isValid: gradeIsValid,
          },
          name: {
            value: curInputs.name.value,
            isValid: nameIsValid,
          },
          surname: {
            value: curInputs.surname.value,
            isValid: surnameIsValid,
          },
        };
      });
      return;
    }

    onSubmit(data);
  }

  const formIsInvalid = !inputs.section.isValid || !inputs.grade.isValid;

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
            <Picker.Item label="Grade 7" value="Grade7" />
            <Picker.Item label="Grade 8" value="Grade8" />
            <Picker.Item label="Grade 9" value="Grade9" />
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
            <Picker.Item label="Please select the class." value="Unknown" />
            <Picker.Item label="Red" value="Red" />
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Yellow" value="Yellow" />

            {/* {grading &&
              grading.map((grade, index) => {
                return (
                  <Picker.Item
                    label={grade.section}
                    value={index}
                    key={index}
                  />
                );
              })} */}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            label="name"
            invalid={!inputs.name.isValid}
            style={styles.errorInput}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "name"),
              value: inputs.name.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            label="surname"
            invalid={!inputs.surname.isValid}
            style={styles.errorInput}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "surname"),
              value: inputs.surname.value,
            }}
          />
          {formIsInvalid && (
            <Text style={styles.errorText}>
              Invalid input values. Please check your submission.
            </Text>
          )}
        </View>

        <View style={styles.btnContainer}>
          <Button onPress={submitHandler} title="Submit"></Button>
          <Button onPress={onCancel} title="Cancel"></Button>
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

export default AddStudentForm;
