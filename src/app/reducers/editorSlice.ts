import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export interface EditorSlice {
    content: string | undefined,
}

const initialState: EditorSlice = {
    content: '',
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        updateEditorContent: (state, action: PayloadAction<string | undefined>) => {
            state.content = action.payload;
        }     
    }
});

export const {updateEditorContent} = editorSlice.actions;

export default editorSlice.reducer;
