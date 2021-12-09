import React from 'react';

import './Cards.css'

import Card from '../Card/Card.jsx';

function Cards ({files}) {
    return (
        <div className="cards">
            {files.map((file) => (
                <Card key={file.data.id} file={file} />
            ))}
        </div>
    );
}

export default Cards;
