import { Instance, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { LoggingStoreModel } from '../loggingStore/index';
import { NoteStoreModel } from '../noteStore/index';

export const RootStoreModel = types.model('RootStore').props({
  noteStore: types.optional(NoteStoreModel, {}),
  loggingStore: types.optional(LoggingStoreModel, {}),
});

const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => useContext(RootStoreContext);

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface NoteStore extends Instance<typeof NoteStoreModel> {}
export interface LoggingStore extends Instance<typeof LoggingStoreModel> {}
