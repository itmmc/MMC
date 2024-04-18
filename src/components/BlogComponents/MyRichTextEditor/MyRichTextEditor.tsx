import React, { useRef, useState, useEffect } from 'react'
// import JoditEditor from 'jodit-react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
// interface MyRichTextEditorProps {
//     placeholder?: string
//     initialValueEn?: string
//     initialValueAr?: string
//     onChange?: (valueEn: string, valueAr: string) => void
// }

const MyRichTextEditor = ({ name, value, changeHandler }: any) => {
    const editor = useRef(null)
    // const config = useMemo(
    //     () => ({
    //         readonly: false,
    //         // placeholder: placeholder || 'Start typing...',
    //         styles: {
    //             background: '#f0f0f0',
    //             color: '#333',
    //             borderRadius: '8px',
    //             border: '1px solid #ccc',
    //             padding: '10px',
    //         },
    //     }),
    //     []
    // )
    const [isFocused, setIsFocused] = useState(false)
    return (
        <div>
            <Editor
                editorState={value}
                onEditorStateChange={(newContent: any) => {
                    const abc = {
                        target: {
                            name: name,
                            value: newContent,
                        },
                    }
                    changeHandler(abc)
                }}
                editorStyle={{
                    border: isFocused
                        ? '2px solid #90806d'
                        : '2px solid #36272030',
                    padding: '10px',
                    // height: '300px',
                    // backgroundColor: '#fff',
                    // borderRadius: '2px',
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                // onEditorStateChange={onEditorStateChange}
                // className="Custom-CSS-Editor"
            />
        </div>
    )
}

export default MyRichTextEditor
