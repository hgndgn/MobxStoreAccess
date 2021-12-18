import { IStateTreeNode, getRoot } from "mobx-state-tree";
import { LoggingStore, NoteStore, RootStoreModel } from "./rootStore/index";

export const withLoggingStore = (self: IStateTreeNode) => ({
  views: {
    get loggingStore(): LoggingStore {
      const root = getRoot<typeof RootStoreModel>(self);
      return root.loggingStore;
    },
  },
});

export const withNoteStore = (self: IStateTreeNode) => ({
  views: {
    get noteStore(): NoteStore {
      const root = getRoot<typeof RootStoreModel>(self);
      return root.noteStore;
    },
  },
});
