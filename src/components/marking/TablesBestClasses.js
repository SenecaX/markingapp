import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { DataTable } from "react-native-paper";

export default function TableBestClasses() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Class</DataTable.Title>
          <DataTable.Title>Section</DataTable.Title>
          <DataTable.Title>Pass rate %</DataTable.Title>

          <DataTable.Title numeric>Year</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Grade 7</DataTable.Cell>
          <DataTable.Cell>Red</DataTable.Cell>
          <DataTable.Cell>98%</DataTable.Cell>

          <DataTable.Cell numeric>2021</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Grade 6</DataTable.Cell>
          <DataTable.Cell>Red</DataTable.Cell>
          <DataTable.Cell>92%</DataTable.Cell>

          <DataTable.Cell numeric>2021</DataTable.Cell>
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
