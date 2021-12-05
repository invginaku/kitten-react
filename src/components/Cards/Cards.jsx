import React from 'react';

import './Cards.css'

import Card from '../Card/Card.jsx';

const Cards = ({files}) => {
    return (
        <div className="cards">
            {files.map((file) => (
                <Card key={file.data.id} file={file} />
            ))}
        </div>
    );
}

export default Cards;
