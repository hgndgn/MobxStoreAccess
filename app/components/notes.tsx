import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/rootStore";

export const Notes = observer(() => {
  const { noteStore } = useStores();

  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.listHeader}>Notes List</Text>

      {
        noteStore.notes.length === 0
          ? <Text style={styles.listEmptyText}>List empty</Text>
          : noteStore.notes.map((note, index) => {
            return <View style={styles.listItemWrapper} key={note + index}>
              <Text style={styles.listItem}>-</Text>
              <Text style={styles.listItem}>{note}</Text>
            </View>
          })
      }
    </View>
  );
})

const styles = StyleSheet.create({
  listItemWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  listItem: {
    paddingLeft: 10
  },
  listHeader: {
    fontSize: 25
  },
  listEmptyText: {
    color: "#aaaaaa",
    padding: 5
  }
});