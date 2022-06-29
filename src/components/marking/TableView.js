import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";
const { useState, useCallback } = React;

export default function TableView(props) {
  let title = "";
  let objA = [...props.markings];

  return (
    <View style={styles.container}>
      <Text>Grade: {title}</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Surname</DataTable.Title>
          <DataTable.Title numeric>Term 1</DataTable.Title>
          <DataTable.Title numeric>Term 2</DataTable.Title>
          <DataTable.Title numeric>Term 3</DataTable.Title>
        </DataTable.Header>

        {Array.isArray(objA) &&
          objA.map((marking) => {
            return (
              <DataTable.Row key={marking.id}>
                <DataTable.Cell>{marking.student}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {isNaN(marking.marks1) ? 0 : marking.marks1}
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  {isNaN(marking.marks2) ? 0 : marking.marks2}
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  {isNaN(marking.marks3) ? 0 : marking.marks3}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>
      {/* <Button title="Submit"></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 30,
  },
});
