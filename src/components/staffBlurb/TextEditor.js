import React from 'react';

const TextEditor = ( { content } ) => {
    
    const createHtml = (content) => {
        return { __html: content.content };
    }

    return (
        <div className="text-editor-content" dangerouslySetInnerHTML={createHtml({content})}>
        </div>
    );
}

export default TextEditor;