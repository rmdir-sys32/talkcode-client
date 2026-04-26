"use client"

import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';

interface EditorProps {
    selectedLanguage?: string;
    code: string;
    setCode: (value: string) => void;
}

const myTheme = createTheme({
    theme: 'dark',
    settings: {
        background: '#121212',
        foreground: '#ffffff',
        caret: '#5d00ff',
        selection: '#036dd626',
        gutterBackground: '#121212',
        gutterForeground: '#8a919966',
    },
    styles: [
        { tag: t.comment, color: '#787b80' },
        { tag: t.definition(t.variableName), color: '#00bcff' },
        { tag: t.keyword, color: '#ff0055' },
    ],
});

export default function Editor({ selectedLanguage = "python", code, setCode }: EditorProps) {
    // A simple mapping of language name to the CodeMirror extension
    const getLanguageExtension = () => {
        switch (selectedLanguage) {
            case 'python': return [python()];
            case 'java': return [java()];
            default: return [python()];
        }
    };

    return (

        <CodeMirror
            value={code}
            extensions={getLanguageExtension()} // Dynamically injects the logic
            onChange={(value) => setCode(value)}
            theme={myTheme}
        />
    );
}