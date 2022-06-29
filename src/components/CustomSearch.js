import { StyleSheet, View, TextInput } from "react-native";

function CustomSearch(props) {
  return (
    <View style={styles.titleContainer}>
      <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={props.updateSearch}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 25,
  },
});

export default CustomSearch;
