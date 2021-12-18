import { cast, types } from 'mobx-state-tree';

import { withLoggingStore } from '../withStores';

export const NoteStoreModel = types
  .model('NoteStoreModel')
  .props({
    notes: types.optional(types.array(types.string), []),
  })
  .extend(withLoggingStore)
  .actions((self) => {
    const addNote = (note: string) => {
      self.notes = cast(self.notes.concat([note]).slice());
      self.loggingStore.addLog(`Note '${note}' added`);
    };

    return { addNote };
  });
