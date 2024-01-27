import { configureStore } from '@reduxjs/toolkit'

import modeReducer from './reducers/modeSlice';
import editorReducer from './reducers/editorSlice';

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        editor: editorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

