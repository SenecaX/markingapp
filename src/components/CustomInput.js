import { StyleSheet, View, TextInput, Text } from "react-native";
import Title from "../components/Title";

function CustomInput({ label, invalid, textInputConfig }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={[styles.input, invalid && styles.invalidInput]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // width: "100%",
    marginBottom: 20,
    marginTop: 20,
    display: "flex",
  },
  label: {
    fontSize: 12,
    color: "#000",
    marginBottom: 4,
    flex: 2,
  },
  input: {
    backgroundColor: "#bdc3c7",
    // padding: 6,
    // fontSize: 18,
    // borderRadius: 6,
    // color: "black",
    flex: 2,
  },
  invalidLabel: {
    color: "red",
  },
  invalidInput: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default CustomInput;
