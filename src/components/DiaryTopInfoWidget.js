import { StyleSheet, View, Text, Image } from "react-native";

function DiaryTopInfoWidget(props) {
  return (
    <View style={styles.container}>
      <View style={styles.widgetContainer}>
        <View>
          <Image source={props.src} style={styles.image} />
        </View>
        <View>
          <Text>{props.label}</Text>
          <Text style={styles.type}>{props.type}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  widgetContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#27ae60",
    paddingBottom: 10,
  },
  image: {
    height: 45,
    width: 45,
    marginRight: 10,
  },
  type: {
    color: "#27ae60",
    fontWeight: "bold",
  },
});

export default DiaryTopInfoWidget;
