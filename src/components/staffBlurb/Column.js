import React from 'react';

const Column = ( { children } ) => {
    return (
        <div className="col">
            {children}
        </div>
    );
}

export default Column;