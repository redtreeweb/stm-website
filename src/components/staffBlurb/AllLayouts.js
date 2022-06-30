import React from 'react';
import TextEditor from './TextEditor';
import Image from './Image';

const AllLayouts = ({layoutData}) => {

    const layoutType = layoutData[0];
    const layoutContent = layoutData[1];

    if ( layoutContent === null ) {
        return '';
    }

    const Default = () => <p>Component is missing!</p>

    const layouts = {
        text: TextEditor,
        image: Image,
        default: Default
    }

    const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts['default'];

    return (
        <ComponentTag content={layoutContent} />
    )
}

export default AllLayouts;