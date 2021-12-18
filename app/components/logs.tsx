import { FlatList, Text, View } from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/rootStore";

export const Logs = observer(() => {
  const { loggingStore } = useStores();

  const RenderItem = ({ item: log }) => {
    return <Text>{log}</Text>
  }

  return (
    <View>
      <StatusBar style="auto" />
      <FlatList data={loggingStore.logs} renderItem={RenderItem} />
    </View>
  );
})
