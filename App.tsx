import { RootStore, RootStoreModel, RootStoreProvider } from './app/stores/rootStore';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainScreen } from './app/screens/mainScreen';
import React from 'react';
import { StatusBar } from 'react-native';
import { onSnapshot } from 'mobx-state-tree';

const ROOT_STORE_KEY = 'root';

const initRootStore = async () => {
  let rootStore: RootStore;
  let data: any;

  try {
    data = (await AsyncStorage.getItem(ROOT_STORE_KEY)) || {};
    rootStore = RootStoreModel.create(data);
  } catch (error) {
    rootStore = RootStoreModel.create({});
  }

  onSnapshot(rootStore, (snapshot) => AsyncStorage.setItem(ROOT_STORE_KEY, JSON.stringify(snapshot)));
};


export default function App() {
  const rootStore: RootStore = RootStoreModel.create();

  React.useEffect(() => {
    const init = async () => {
      await initRootStore();
    }

    init();
  })

  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <StatusBar hidden></StatusBar>
      <MainScreen></MainScreen>
    </RootStoreProvider>
  );
}
