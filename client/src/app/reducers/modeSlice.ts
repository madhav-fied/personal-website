import {createSlice} from '@reduxjs/toolkit'

export interface ShellMode {
    value: boolean
}

const initialState: ShellMode = {
    value: false,
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleShellMode: (state) => {
            state.value = true;
        },
        toggleMouseMode: (state) => {
            state.value = false;
        },
        switchMode: (state) => {
            state.value = !state.value;
        }
    }
});

export const {toggleShellMode, toggleMouseMode, switchMode} = modeSlice.actions;

export default modeSlice.reducer;
