import { StyleSheet, View, Text, Pressable } from "react-native";

function CardButton(props) {
  return (
    <Pressable style={styles.container} onPress={props.goToScreen}>
      {/* <Text style={styles.title}>{props.title}</Text> */}
      {/* <Text style={styles.title}>Welcome</Text> */}

      <Text>{props.btnName}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3498db",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});

export default CardButton;
