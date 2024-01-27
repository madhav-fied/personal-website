import { EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import { Node } from '@tiptap/core'

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateEditorContent } from '../../app/reducers/editorSlice';


const EditorContainer = styled.div`
    border: 1px solid black;
    height: 100%;
    width: 40%;
    padding: 2rem;
    margin: 1rem; 

    .tiptap {
        border: 1px solid red;
    }
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
    group: 'block list',

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

                    this.editor.chain().focus().clearContent().toggleTerminal().run();
                    return true;
                },
            execute:
                () => ({ }) => {
                    this.editor.chain().focus().clearContent().toggleTerminal().run();
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
    const dispatch = useDispatch()

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

    return (
        <EditorContainer>
            <EditorContent editor={editor} />
        </EditorContainer>
    )
}

export default TerminalEditor;
