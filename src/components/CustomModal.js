import { StyleSheet, View, Text, Modal } from "react-native";

function CustomModal(props) {
  const { isVisible, message, textValue } = props;

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        isVisible={isVisible}
        backdropColor={"white"}
        style={{ margin: 0 }}
        onModalHide={() => {}}
      >
        <View>
          <Text>textValue</Text>
          <Text>message</Text>
        </View>
      </Modal>
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

export default CustomModal;
