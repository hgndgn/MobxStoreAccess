import { cast, types } from 'mobx-state-tree';

export const LoggingStoreModel = types
  .model('LoggingStoreModel')
  .props({
    logs: types.optional(types.array(types.string), []),
  })
  .actions((self) => {
    const addLog = (message: string) => {
      self.logs = cast(self.logs.concat([message]).slice());
      console.log(message);
    };
    return { addLog };
  });
