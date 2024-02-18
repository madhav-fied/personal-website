import { EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import { Node } from '@tiptap/core'
import axios from 'axios'

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateEditorContent } from '../../app/reducers/editorSlice';
import { RootState } from '../../app/store';

const EditorContainer = styled.div`
    border: 1px solid black;
    height: 100%;
    width: 40%;
    padding: 2rem;
    margin: 1rem; 

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    div {
        width: 95%;
    }

    .tiptap {
        border: 1px solid red;
    }
`;

const ExecuteButton = styled.input`

`;

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        customExtension: {
            toggleTerminal: () => ReturnType,
            clearTerminal: () => ReturnType,
            execute: () => ReturnType,
        }
    }
}

export interface CLIOptions {
    HTMLAttributes: Record<string, any>,
}

const CLI = Node.create<{}, CLIOptions>({
    name: 'CLI',
    content: 'text*',
    marks: '',
    group: 'block',



    renderHTML({ HTMLAttributes }) {
        return ['pre', 'vasudevn@hyd008:~$ ', ['code', HTMLAttributes, 0],]
    },

    addCommands() {
        return {
            toggleTerminal:
                () => ({ commands }) => {
                    if (!this.editor.isActive('CLI') || this.editor.isEmpty) {
                        console.log('currently inactive')
                        return commands.toggleNode(this.name, 'paragraph');
                    }
                    console.log('currently active');
                    return true;
                },
            clearTerminal:
                () => ({ }) => {

                    this.editor.chain().focus().clearContent(true).run();
                    return true;
                },
            execute:
                () => ({ }) => {
                    return true;
                }
        }
    },

    addKeyboardShortcuts() {
        return {
            'Alt-Enter': () => this.editor.commands.toggleTerminal(),
            'Mod-Alt-l': () => this.editor.commands.clearTerminal(),
            'Enter': () => this.editor.commands.execute(),
        }
    },
})

// write interface for editor props
const TerminalEditor = () => {
    const dispatch = useDispatch();
    const editorContent = useSelector((state: RootState) => state.editor.content);

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            CLI,
        ],
        onUpdate() {
            editor?.commands.toggleTerminal();
            dispatch(updateEditorContent(editor?.getText()));
        },

        onCreate() {
            editor?.commands.toggleTerminal();
        },

        onFocus() {
            editor?.commands.toggleTerminal();
        },
    });

    const handleEnter = async (event: any) => {
        if (event.key === "Enter") {
            console.log('Req sending')
            const response = await axios.post("/api/cmd", {
                data: editorContent,
            });
            console.log(response);
        }
    }

    return (
        <>
            <EditorContainer onKeyDownCapture={handleEnter}>
                <EditorContent editor={editor} />
                <ExecuteButton type="submit" value="Execute" onClick={handleEnter} />
            </EditorContainer>
        </>
    )
}

export default TerminalEditor;
