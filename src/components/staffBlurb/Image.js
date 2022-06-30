import React from 'react';

const Image = ( {content} ) => {
    const sourceUrl = content.source_url;

    return (
        <div style={{ backgroundImage: `url(${sourceUrl})` }} className="image"></div>
    );
}

export default Image;