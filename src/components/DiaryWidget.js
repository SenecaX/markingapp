import { StyleSheet, View, Text, Image, Pressable } from "react-native";

function DiaryWidget(props) {
  const src =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*";
  return (
    <Pressable
      style={styles.titleContainer}
      onPress={props.goToDiary}
      key={props.title}
    >
      {/* source={src}  */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: src,
            method: "POST",
            headers: {
              Pragma: "no-cache",
            },
            body: "Your Body goes here",
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.week}>
          Week {props.week[props.week.length - 1].weekNum}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: 100,
    margin: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 10,
  },
  week: {},
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {},
});

export default DiaryWidget;
