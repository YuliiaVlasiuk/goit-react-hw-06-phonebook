import { configureStore } from "@reduxjs/toolkit";
//import { contactsReducer } from "./contactsSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
 import { persistContactReducer } from "./contactsSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//      },
// });


export const store = configureStore({
  reducer: {
    contacts: persistContactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);