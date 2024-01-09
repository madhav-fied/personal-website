import {EditorContent, useEditor} from '@tiptap/react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import styled from 'styled-components';
import { useState } from 'react';


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


const TerminalEditor = () => {

    const [content, setContent] = useState<string | undefined>('');


    function handleUpdate() {
        const html = editor?.getHTML();
        setContent(html);
    }

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
        ],
        onUpdate: handleUpdate,
    });
    
    return (
        <EditorContainer>
            <EditorContent editor={editor} />
            <h4>{content}</h4>
        </EditorContainer>
    )
}

export default TerminalEditor;
