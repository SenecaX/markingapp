import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

function AddClassForm({ onSubmit, onCancel, defaultValues }) {
  const [inputs, setInputs] = useState({
    grade: {
      value: defaultValues ? defaultValues.grade : "",
      isValid: true,
    },
    section: {
      value: defaultValues ? defaultValues.section : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const data = {
      // class: {
      grade: inputs.grade.value,
      section: inputs.section.value,
      // },
    };

    const sectionIsValid = data.section.value !== "";
    const gradeIsValid = data.value !== "";

    if (!sectionIsValid) {
      setInputs((curInputs) => {
        return {
          section: { value: curInputs.section.value, isValid: sectionIsValid },
          grade: {
            value: curInputs.grade.value,
            isValid: gradeIsValid,
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
            <Picker.Item label="Grad 8" value="Grade8" />
            <Picker.Item label="Grad 9" value="Grade9" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            label="section"
            invalid={!inputs.section.isValid}
            style={styles.errorInput}
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputChangeHandler.bind(this, "section"),
              value: inputs.section.value,
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

export default AddClassForm;
