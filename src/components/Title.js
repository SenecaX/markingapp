import { StyleSheet, View, Text } from "react-native";

function Title(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
});

export default Title;
