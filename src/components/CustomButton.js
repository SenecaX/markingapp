import { StyleSheet, View, Text, Pressable } from "react-native";

function CustomButton(props) {
  return (
    <Pressable onPress={props.goToNewDiaryScreen} style={styles.btn}>
      <Text style={styles.text}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  btn: {
    backgroundColor: "#27ae60",
    padding: 10,
    borderRadius: 16,
  },
  text: {
    color: "#fff",
  },
});

export default CustomButton;
