import { configureStore } from "@reduxjs/toolkit"
import { contactsReducer } from "./contacts/contactsSlice"
// , persistedContactsReducer
import { filterReducer } from "./filter/filterSlice"
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
// persistStore,

export const store = configureStore({
	reducer: {
		// contacts: persistedContactsReducer,
		contacts: contactsReducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

// export const persistor = persistStore(store)