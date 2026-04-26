"use client"
 
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import CodeMirror from '@uiw/react-codemirror';

interface EditorProps {
    selectedLanguage?: string;
    code: string;
    setCode: (value: string) => void;
}

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
            extensions={getLanguageExtension() } // Dynamically injects the logic
            onChange={(value) => setCode(value)}
            theme="dark"  
        />
    );
}