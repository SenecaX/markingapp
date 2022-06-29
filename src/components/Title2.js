import { StyleSheet, View, Text } from "react-native";

function Title2(props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Title2;
