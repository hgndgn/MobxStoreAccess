import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import React, { useState } from "react";

import { Notes } from "../components/notes";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/rootStore";

export const MainScreen = observer(() => {
  const { noteStore } = useStores();

  const [note, setNote] = useState("");

  const onNoteChanged = (value: string) => {
    setNote(value);
  };

  const addNote = () => {
    noteStore.addNote(note);
  };

  return (
    <SafeAreaView style={{ margin: 0 }}>
      <View style={styles.flexRowContainer}>
        <Text style={styles.header}>Accessing any store in MobX</Text>

        <TextInput
          style={styles.noteInput}
          onChangeText={onNoteChanged}
          value={note}
          placeholder="Your note"
        ></TextInput>
        <Button onPress={addNote} title="Add Note"></Button>
      </View>
      <Notes></Notes>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  flexRowContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  noteInput: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 40
  }
});
