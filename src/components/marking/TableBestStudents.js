import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { DataTable } from "react-native-paper";

export default function TableBestStudents() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Surname</DataTable.Title>
          <DataTable.Title>Year</DataTable.Title>
          <DataTable.Title numeric>Term 1</DataTable.Title>
          <DataTable.Title numeric>Term 2</DataTable.Title>
          <DataTable.Title numeric>Term 3</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Bond</DataTable.Cell>
          <DataTable.Cell numeric>2021</DataTable.Cell>

          <DataTable.Cell numeric>77</DataTable.Cell>
          <DataTable.Cell numeric>37</DataTable.Cell>
          <DataTable.Cell numeric>90</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Sparrow</DataTable.Cell>
          <DataTable.Cell numeric>2021</DataTable.Cell>

          <DataTable.Cell numeric>78</DataTable.Cell>
          <DataTable.Cell numeric>99</DataTable.Cell>
          <DataTable.Cell numeric>90</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    // paddingHorizontal: 30,
    width: "100%",
  },
});
