import { StyleSheet, View, Text, Pressable } from "react-native";

function CustomLargeButton(props) {
  const onBtnPress = () => {};

  return (
    <Pressable
      onPress={props.onBtnPress}
      style={[styles.btn, { backgroundColor: props.color }]}
    >
      <Text style={styles.text}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  btn: {
    // backgroundColor: props.color,
    padding: 10,
    borderRadius: 16,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default CustomLargeButton;
