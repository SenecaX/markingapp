import { StyleSheet, View, Text, Pressable } from "react-native";

function Tags(props) {
  const onBtnPress = () => {};

  return (
    <Pressable
      onPress={onBtnPress}
      style={[styles.btn, { width: props.width }]}
    >
      <Text style={styles.text}>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#27ae60",
    padding: 5,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 5,
  },
  text: {
    color: "#fff",
  },
});

export default Tags;
